import "./About.scss";
import gustavo from "../../assets/gustavo-alves-YOXSC4zRcxw-unsplash.png";
import gustavoDesk from "../../assets/gustavo.png";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { useState, useEffect } from "react";

export default function About() {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 961 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth > 991) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <main className="k-about container">
      <section className="header-main">
        <Banner img={isDesktop ? gustavoDesk : gustavo} />
      </section>

      <section className="k-about-content">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
    </main>
  );
}
