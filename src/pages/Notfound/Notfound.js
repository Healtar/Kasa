import { Link, Outlet } from "react-router-dom";
import "./Notfound.scss";

export default function Error() {
  return (
    <div className="k-error">
      <div className="k-error-content">
        <h1 className="k-error-content__title">404</h1>
        <p className="k-error-content__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>

      <Link to={"/"} className="k-error-link">
        Retourner à la page d'accueil
      </Link>
      <Outlet />
    </div>
  );
}
