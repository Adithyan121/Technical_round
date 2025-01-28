import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; 
const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const filteredUsers = data.filter((user) => user.id >= 1 && user.id <= 9);
        setUsers(filteredUsers);
      });
  }, []);

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="grid">
        {users.map((user) => (
          <div
            key={user.id}
            className="card"
            onClick={() => handleUserClick(user.id)}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
