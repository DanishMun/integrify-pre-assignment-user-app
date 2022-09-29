import "./user-card.styles.css";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
const UserCard = ({ user }) => {
  const { name, username } = user;

  return (
    <div className="user-card-container">
      <div className="circle-alphabet">
        <p>{name[0]}</p>
      </div>
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className="username">
        <p>@{username}</p>
      </div>
      <div className="website">
        <Link>{user.website}</Link>
      </div>
      <div className="card-button">
        <Button user={user} more="more details"></Button>
      </div>
    </div>
  );
};

export default UserCard;
