import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

// An original procedural scene: no remote models, textures or paid assets.
export function createHexagonField(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: "low-power" });
  renderer.setClearColor(0x07090f);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-10, 10, 6, -6, 0.1, 60);
  camera.position.z = 20;
  const light = new THREE.Vector2(3, -2);
  const uniforms = { uLight: { value: light } };

  const shape = new THREE.Shape();
  for (let corner = 0; corner < 6; corner++) {
    const angle = Math.PI / 6 + corner * Math.PI / 3;
    const x = Math.cos(angle) * 0.555;
    const y = Math.sin(angle) * 0.555;
    if (corner === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.24, steps: 1, bevelEnabled: true,
    bevelSegments: 2, bevelSize: 0.018, bevelThickness: 0.025, curveSegments: 1,
  });
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      attribute float energy;
      varying vec3 vWorld;
      varying vec3 vNormal;
      varying float vEnergy;
      varying float vDepth;
      void main() {
        vec4 world = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vNormal = normalize(mat3(modelMatrix * instanceMatrix) * normal);
        vEnergy = energy;
        vDepth = position.z;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,
    fragmentShader: `
      uniform vec2 uLight;
      varying vec3 vWorld;
      varying vec3 vNormal;
      varying float vEnergy;
      varying float vDepth;
      void main() {
        vec3 n = normalize(vNormal);
        vec3 view = vec3(0.0, 0.0, 1.0);
        vec3 whitePosition = vec3(uLight + vec2(-0.8, 1.6), 3.3);
        vec3 l = normalize(whitePosition - vWorld);
        float d = length(whitePosition.xy - vWorld.xy);
        float falloff = exp(-d * d * 0.105);
        float diffuse = max(dot(n, l), 0.0);
        float specular = pow(max(dot(n, normalize(l + view)), 0.0), 42.0);
        float ambientEdge = max(dot(n, normalize(vec3(-2.0, 3.0, 1.0))), 0.0);
        vec3 color = vec3(0.008, 0.01, 0.014) + ambientEdge * vec3(0.008, 0.009, 0.012);
        color += falloff * (diffuse * vec3(0.045, 0.05, 0.065) + specular * vec3(0.19, 0.21, 0.28));
        // Blue leads the light; a violet edge gives the portfolio its own palette.
        vec2 offset = vWorld.xy - uLight;
        float violet = smoothstep(-1.3, 1.6, offset.x + offset.y * 0.35);
        float glow = exp(-dot(offset, offset) * 0.22);
        vec3 lightColor = mix(vec3(0.007, 0.035, 0.20), vec3(0.115, 0.016, 0.235), violet);
        color += glow * lightColor * (0.45 + diffuse);
        // The glowing band is on the sides, below the dark tile caps.
        float side = (1.0 - smoothstep(0.12, 0.24, vDepth)) * (1.0 - max(n.z, 0.0));
        color += side * vEnergy * mix(vec3(0.035, 0.65, 2.0), vec3(0.85, 0.13, 2.0), violet);
        color += vEnergy * lightColor * 0.12;
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  });

  // Light beneath the hexagons is visible through gaps as the tiles lift.
  const underlayGeometry = new THREE.PlaneGeometry(200, 200);
  const underlayMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec2 vPosition;
      void main() {
        vPosition = position.xy;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec2 uLight;
      varying vec2 vPosition;
      void main() {
        vec2 offset = vPosition - uLight;
        float d = length(offset);
        float glow = exp(-d * d * 0.55);
        float violet = smoothstep(-1.3, 1.6, offset.x + offset.y * 0.35);
        vec3 lightColor = mix(vec3(0.015, 0.16, 1.0), vec3(0.48, 0.035, 1.1), violet);
        gl_FragColor = vec4(vec3(0.003, 0.004, 0.007) + lightColor * glow, 1.0);
      }
    `,
  });
  const underlay = new THREE.Mesh(underlayGeometry, underlayMaterial);
  underlay.position.z = -0.35;
  scene.add(underlay);

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.65, 0.65, 0.5);
  const output = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloom);
  composer.addPass(output);

  let tiles;
  let cells = [];
  let energies = new THREE.InstancedBufferAttribute(new Float32Array(0), 1);
  const transform = new THREE.Object3D();
  let worldWidth = 20;
  let worldHeight = 12;

  function resize(width, height) {
    // Cap both pixel density and total resolution; large screens stay economical.
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5, Math.sqrt(1_500_000 / (width * height)));
    renderer.setPixelRatio(ratio);
    renderer.setSize(width, height, false);
    composer.setPixelRatio(ratio);
    composer.setSize(width, height);
    const tilePixels = width < 600 ? 48 : 61;
    worldWidth = width / tilePixels;
    worldHeight = height / tilePixels;
    camera.left = -worldWidth / 2;
    camera.right = worldWidth / 2;
    camera.top = worldHeight / 2;
    camera.bottom = -worldHeight / 2;
    camera.updateProjectionMatrix();
    if (tiles) { scene.remove(tiles); tiles.dispose(); }
    cells = [];
    const rows = Math.ceil(worldHeight / 0.9) + 3;
    const columns = Math.ceil(worldWidth / 1.03923) + 3;
    for (let row = -rows; row <= rows; row++) {
      const y = row * 0.9;
      if (Math.abs(y) > worldHeight / 2 + 1.2) continue;
      for (let column = -columns; column <= columns; column++) {
        const x = (column + (Math.abs(row) % 2) * 0.5) * 1.03923;
        if (Math.abs(x) > worldWidth / 2 + 1.2) continue;
        const hash = Math.sin(row * 127.1 + column * 311.7) * 43758.5453;
        cells.push({ x, y, seed: hash - Math.floor(hash), heat: 0 });
      }
    }
    energies = new THREE.InstancedBufferAttribute(new Float32Array(cells.length), 1);
    energies.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("energy", energies);
    tiles = new THREE.InstancedMesh(geometry, material, cells.length);
    tiles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    tiles.frustumCulled = false;
    scene.add(tiles);
  }

  function render(x, y, seconds, delta) {
    if (!tiles) return;
    light.set((x - 0.5) * worldWidth, (0.5 - y) * worldHeight);
    const ease = 1 - Math.exp(-delta * 7);
    cells.forEach((cell, index) => {
      const dx = cell.x - light.x;
      const dy = cell.y - light.y;
      const distance = Math.hypot(dx, dy);
      const influence = Math.exp(-distance * distance * 0.42);
      const ripple = 0.65 + 0.35 * Math.sin(distance * 3.5 - seconds * 3 + cell.seed * 5);
      cell.heat += (influence * ripple - cell.heat) * ease;
      const lift = cell.heat * (0.28 + cell.seed * 0.35);
      transform.position.set(cell.x, cell.y, lift + cell.seed * 0.025);
      transform.rotation.set(cell.heat * Math.sin(cell.seed * 14) * 0.32, cell.heat * Math.cos(cell.seed * 9) * 0.32, 0);
      transform.updateMatrix();
      tiles.setMatrixAt(index, transform.matrix);
      energies.setX(index, cell.heat);
    });
    tiles.instanceMatrix.needsUpdate = true;
    energies.needsUpdate = true;
    composer.render(delta);
  }

  function dispose() {
    tiles?.dispose();
    geometry.dispose();
    material.dispose();
    underlayGeometry.dispose();
    underlayMaterial.dispose();
    bloom.dispose();
    output.dispose();
    renderPass.dispose();
    composer.dispose();
    renderer.dispose();
  }

  return { resize, render, dispose };
}
