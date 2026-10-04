import { useEffect, useRef } from "react";
import "./HexagonBackground.css";

export function HexagonBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const surface = canvas?.parentElement;
    if (!canvas || !surface) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    let field;
    let stopped = false;
    let frame = 0;
    let last = 0;
    let elapsed = 0;
    let pointerActive = false;
    let x = 0.76;
    let y = 0.48;
    const pointer = { x, y };

    function draw(now) {
      frame = 0;
      if (!field || stopped || document.hidden) return;
      // A frame can observe the preference before its change event arrives.
      // Dispose here too so the hidden renderer never retains GPU resources.
      if (motion.matches) { syncAnimation(); return; }
      // Touch devices use a gentle ambient light at 30 fps.
      if (coarse.matches && now - last < 32) { frame = requestAnimationFrame(draw); return; }
      const delta = Math.min((now - last) / 1000 || 0.016, 0.05);
      last = now;
      elapsed += delta;
      const targetX = pointerActive ? pointer.x : 0.72 + Math.sin(elapsed * 0.22) * 0.13;
      const targetY = pointerActive ? pointer.y : 0.45 + Math.sin(elapsed * 0.3) * 0.18;
      const ease = 1 - Math.exp(-delta * 9);
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      field.render(x, y, elapsed, delta);
      canvas.dataset.ready = "true";
      frame = requestAnimationFrame(draw);
    }

    function syncAnimation() {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
      if (motion.matches) {
        // The CSS/SVG fallback needs no GPU or animation loop.
        canvas.dataset.ready = "false";
        field?.dispose();
        field = undefined;
      } else if (field && !document.hidden) {
        frame = requestAnimationFrame(draw);
      }
    }

    function resize() {
      if (!field) return;
      field.resize(Math.max(surface.clientWidth, 1), Math.max(surface.clientHeight, 1));
      syncAnimation();
    }

    // Keep one viewport-sized scene behind the page.
    // Load the 3D library separately from the portfolio content and only
    // when motion is allowed. Links and text work before it is available.
    let loading = false;
    async function start() {
      syncAnimation();
      if (motion.matches || stopped || field || loading) return;
      loading = true;
      try {
        const { createHexagonField } = await import("./lib/hexagon-field.js");
        if (stopped || motion.matches) return;
        field = createHexagonField(canvas);
        resize();
      } catch {
        // WebGL unavailable or chunk load failed: keep the static background.
        canvas.dataset.ready = "false";
        field?.dispose();
        field = undefined;
      } finally {
        loading = false;
      }
    }

    function move(event) {
      if (event.pointerType === "touch") return;
      const bounds = surface.getBoundingClientRect();
      pointer.x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      pointer.y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      pointerActive = true;
    }
    function leave() { pointerActive = false; }
    function contextLost(event) {
      event.preventDefault();
      cancelAnimationFrame(frame);
      canvas.dataset.ready = "false";
      field?.dispose();
      field = undefined;
    }

    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(surface);
    // Listen on the document so cards and links can still receive pointer
    // events. Client coordinates stay correct at every scroll position.
    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    document.addEventListener("visibilitychange", syncAnimation);
    motion.addEventListener("change", start);
    canvas.addEventListener("webglcontextlost", contextLost);
    canvas.addEventListener("webglcontextrestored", start);
    void start();

    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      sizeObserver.disconnect();
      document.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      document.removeEventListener("visibilitychange", syncAnimation);
      motion.removeEventListener("change", start);
      canvas.removeEventListener("webglcontextlost", contextLost);
      canvas.removeEventListener("webglcontextrestored", start);
      field?.dispose();
    };
  }, []);

  return (
    <div className="site-hexagons" aria-hidden="true">
      <canvas ref={canvasRef} className="site-hexagons-canvas" />
    </div>
  );
}
