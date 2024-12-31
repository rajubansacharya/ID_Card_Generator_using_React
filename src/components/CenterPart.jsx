import React, { useState } from "react";

function CenterPart({
  setID,
  setAddress,
  setProgram,
  setPhone,
  setExpireDate,
  setUserImage
}) {
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  // Handle image file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the image
      setUserImage(imageUrl); // Pass the image URL to parent component
    }
  };

  return (
    <>
      <form>
        <label>Enter ID NO:</label>
        <input type="text" onChange={handleChange(setID)} />
        <br />
        <label>Address:</label>
        <input type="text" onChange={handleChange(setAddress)} />
        <br />
        <label>Program:</label>
        <input type="text" onChange={handleChange(setProgram)} />
        <br />
        <label>Phone:</label>
        <input type="text" onChange={handleChange(setPhone)} />
        <br />
        <label>Expire Date:</label>
        <input type="text" onChange={handleChange(setExpireDate)} />
        <br />
        
        {/* File input for image upload */}
        <label>Upload Image:</label>
        <input type="file" onChange={handleImageChange} />
      </form>
    </>
  );
}

export default CenterPart;
