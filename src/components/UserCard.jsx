import { useState } from "react";

function UserCard({ user }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      <h3 onClick={() => setExpanded(!expanded)} className="clickable">
        {user.name}
      </h3>
      <p>{user.email}</p>

      {expanded && (
        <div className="details">
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p>
            <strong>Address:</strong>{" "}
            {user.address.street}, {user.address.city}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserCard;