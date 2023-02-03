import "./Banner.scss";

export default function Banner({ img, caption }) {
  return (
    <div className="k-banner" style={{ backgroundImage: "url(" + img + "" }}>
      {caption ? <span className="k-banner-caption">{caption}</span> : null}
    </div>
  );
}
