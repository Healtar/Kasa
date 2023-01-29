import { Link, Outlet } from "react-router-dom";
import bgBanner from "../../assets/bg-home.png";
import logements from "../../data/logements.json";
import "./Home.scss";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  return (
    <main className="k-home">
      <section className="container">
        <header className="header-main">
          <Banner img={bgBanner} caption="Chez vous, partout et ailleurs" />
        </header>

        <ul className="logements-list">
          {logements.map((logement) => {
            return (
              <li key={logement.id} className="card-item">
                <Link
                  to={`../logement/${logement.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    className="card"
                    title={logement.title}
                    cover={logement.cover}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </section>
    </main>
  );
}
