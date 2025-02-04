import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = ({ className }: { className: string }) => {
  return (
    <Link to="/">
      <img className={className} src={logo} alt="" />
    </Link>
  );
};

export default Logo;
