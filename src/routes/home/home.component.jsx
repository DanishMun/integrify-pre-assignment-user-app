import { useEffect, useState } from "react";
import UserCard from "../../components/user-card/user-card.component";
import "./home.styles.css";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="user-card-list-container">
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Home;
