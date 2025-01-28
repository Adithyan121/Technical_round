import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './userDetails.css';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <table className="user-details-table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{user.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
