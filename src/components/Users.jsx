import { useEffect, useState } from "react";
import "./Users.css"; // CSS file link

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", margin: "50px 0" }}>Loading users...</h2>;
  }

  if (error) {
    return <h2 style={{ textAlign: "center", margin: "50px 0", color: "red" }}>Error: {error}</h2>;
  }

  return (
    <section className="users-section">
      <h2 className="users-title">Our Users</h2>

      <div className="users-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p className="user-email">📧 {user.email}</p>
            <p className="user-phone">📞 {user.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;