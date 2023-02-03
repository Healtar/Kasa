import "./Host.scss";

export default function Host({ name, picture }) {
  return (
    <div className="host">
      <span className="host-name">{name}</span>
      <img className="host-picture" src={picture} alt="host"/>
    </div>
  );
}
