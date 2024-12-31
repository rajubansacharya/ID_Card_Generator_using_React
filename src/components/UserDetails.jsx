import React from "react";
import x from '../assets/xyz.png';

function UserDetails({ userName, id, address, program, phone, expireDate, userImage }) {
  return (
    <div className="user-info-container">
      {/* Display user image if available */}
      {userImage ? <img src={userImage} alt="User" className="rajuImage" /> : null}

      <p className="usernameclass">{userName}</p>
      <div className="user-label">
        <p>ID NO: {id}</p>
        <p>Address: {address}</p>
        <p>Program: {program}</p>
        <p>Phone: {phone}</p>
        <p>Expire Date: {expireDate}</p>
        {/* Signature image */}
        <img src={x} alt="No signature found" className="signature" />
      </div>
    </div>
  );
}

export default UserDetails;
