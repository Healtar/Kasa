// import React from "react";

import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import "./FicheLogement.scss";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import Carousel from "../../components/Carousel/Carousel";
import { VscStarFull } from "react-icons/vsc";
import Host from "../../components/Host/Host";

export default function FicheLogement() {
  const params = useParams();
  const id = params.id;

  const logement = logements.find((logement) => logement.id === id);

  let stars = [];
  if (logement) {
    for (let index = 0; index < 6; index++) {
      logement.rating < index
        ? stars.push(<VscStarFull className="star star__empty" />)
        : stars.push(<VscStarFull className="star star__full" />);
    }
  }

  return logement ? (
    <main>
      <div className="k-fiche-logement container">
        <Carousel imgData={logement.pictures} />
        <div className="k-fiche-logement__logement-infos">
          <h2 className="logement-infos__title">{logement.title}</h2>

          <p className="logement-infos__location">{logement.location}</p>

          <ul className="tag-list">
            {logement.tags.map((tag, index) => {
              return (
                <li key={index}>
                  <Tag text={tag} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="k-fiche-logement__profile-infos">
          <ul className="rate">
            {stars.map((star, index) => {
              return <li key={index}>{star}</li>;
            })}
          </ul>

          <Host name={logement.host.name} picture={logement.host.picture} />
        </div>

        <div className="collapses">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Equipements" content={logement.equipments} />
        </div>
      </div>
    </main>
  ) : (
    <Navigate replace to="/error" />
  );
}
