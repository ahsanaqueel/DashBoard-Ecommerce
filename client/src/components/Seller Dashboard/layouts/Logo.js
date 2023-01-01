import  {ReactComponent as LogoDark }  from "../assets/images/logos/xtremelogo.svg";
// import { ReactComponent as LogoDark } from "../assets/images/logos/LogoWhite.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark />
    </Link>
  );
};

export default Logo;


