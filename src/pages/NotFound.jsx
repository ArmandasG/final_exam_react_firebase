import { useNavigate } from "react-router-dom";
import "./notFound.scss";

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="notFound">
      <h1>Page not found 404</h1>
      <button onClick={() => {navigate(-1)}} className="return btn" to="/">
        return
      </button>
    </div>
  );
}

export default NotFound;
