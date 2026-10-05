import "./ProjectDevices.css";

function DesktopFrame({ image }) {
  return (
    <div className="device-desktop">
      <div className="device-browser-bar" aria-hidden="true"><i /><i /><i /><span /></div>
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" width={image.width} height={image.height} />
    </div>
  );
}

function PhoneFrame({ image, secondary = false }) {
  return (
    <div className={`device-phone${secondary ? " device-phone-secondary" : ""}`} style={{ "--screen-position": image.position || "center top" }}>
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" width={image.width} height={image.height} />
    </div>
  );
}

function TabletFrame({ image }) {
  return (
    <div className="device-tablet" style={{ "--screen-ratio": image.frameRatio || 3 / 4 }}>
      <img src={image.src} alt={image.alt} loading="lazy" decoding="async" width={image.width} height={image.height} />
    </div>
  );
}

export default function ProjectDevices({ preview, tone }) {
  const layout = preview.tablet ? "tablet" : preview.desktop ? (preview.mobile ? "responsive" : "desktop") : "phones";
  return (
    <figure className={`work-preview work-preview-${tone} device-preview`}>
      <div className={`device-stage device-stage--${layout}`}>
        {preview.desktop && <DesktopFrame image={preview.desktop} />}
        {preview.tablet && <TabletFrame image={preview.tablet} />}
        {preview.secondaryMobile && <PhoneFrame image={preview.secondaryMobile} secondary />}
        {preview.mobile && <PhoneFrame image={preview.mobile} />}
      </div>
      <figcaption className="device-caption">{preview.caption}</figcaption>
    </figure>
  );
}
