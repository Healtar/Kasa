import "./Card.scss";

export default function Card({ title, cover }) {

  return (
    <div className="card" style={{backgroundImage: "url("+cover+""}}>
      <h3 className="card-caption" >{title}</h3>
    </div>
  );
}
