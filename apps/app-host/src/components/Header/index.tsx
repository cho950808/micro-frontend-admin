import { Link } from "react-router-dom";
import { container, wrapper, logo_image } from "./index.css";

const Header = () => {
  return (
    <div className={`${container}`}>
      <div className={`${wrapper}`}>
        <Link to="/">
           <img
            src={"/img/logo.png"}
            className={`${logo_image}`}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
