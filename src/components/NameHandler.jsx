


import React from "react";

function NameHandler({
    setUserName
}) {
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <>
      <form>
        <label>UserName</label>
        <input type="text" onChange={handleChange(setUserName)} />
     </form>
    </>
  );
}

export default NameHandler;
