import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/button/button.component";
const UserInfo = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <div>
      <Link to="/">Go Back</Link>;<h2>-name: {user.name}</h2>
      <h2>-username: {user.username}</h2>
      <h2>-email: {user.email}</h2>
      <h2>-phone: {user.phone}</h2>
      <h2>-website: {user.website}</h2>
    </div>
  );
};

export default UserInfo;
