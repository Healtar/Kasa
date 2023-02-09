import { Link, Outlet } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="k-notFound">
      <div className="k-notFound-content">
        <h1 className="k-notFound-content__title">404</h1>
        <p className="k-notFound-content__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>

      <Link to={"/"} className="k-notFound-link">
        Retourner à la page d'accueil
      </Link>
      <Outlet />
    </div>
  );
}
