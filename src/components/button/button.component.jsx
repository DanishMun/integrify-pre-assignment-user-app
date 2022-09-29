import "./button.style.css";
import { Link } from "react-router-dom";
const Button = ({ user, more }) => {
  return (
    <Link to={`user/${user.id}`}>
      <button className="button">{more}</button>
    </Link>
  );
};

export default Button;
