import { Link } from "react-router-dom";
import "./notFound.scss";

function NotFound() {
  return (
    <div className="notFound">
      <h1>Page not found 404</h1>
      <Link className="return btn" to="/login">
        return
      </Link>
    </div>
  );
}

export default NotFound;
