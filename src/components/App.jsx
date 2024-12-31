import React, { useRef, useState } from "react";
import Header from "./Header";
import UserDetails from "./UserDetails";
import Footer from "./Footer";
import CenterPart from "./CenterPart";
import { toPng } from "html-to-image";
import NameHandler from "./NameHandler";
import p from '../assets/pp.jpg';

function App() {
  const [userName, setUserName] = React.useState("Raju Bans Acharya");
  const [id, setID] = React.useState("PASCAL2021");
  const [address, setAddress] = React.useState("Balkot Bhaktapur");
  const [program, setProgram] = React.useState("BCA");
  const [phone, setPhone] = React.useState("9862232355");
  const [expireDate, setExpireDate] = React.useState("2024/12/11");
  const [userImage, setUserImage] = useState(p); // Store user image

  const userDetailsRef = useRef(null);

  const handleDownload = () => {
    if (userDetailsRef.current) {
      toPng(userDetailsRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "user-details.png";
          link.click();
        })
        .catch((error) => {
          console.error("Error capturing and downloading the image:", error);
        });
    }
  };

  return (
    <div className="main-app">
      <div ref={userDetailsRef} className="Main-Id-Container">
        <Header />
        <UserDetails
          userName={userName}
          id={id}
          address={address}
          program={program}
          phone={phone}
          expireDate={expireDate}
          userImage={userImage} // Pass the image URL to UserDetails
        />
        <Footer />
      </div>
      <button onClick={handleDownload}>Click to download</button>

      <NameHandler setUserName={setUserName} />

      <CenterPart
        setID={setID}
        setAddress={setAddress}
        setProgram={setProgram}
        setPhone={setPhone}
        setExpireDate={setExpireDate}
        setUserImage={setUserImage} // Pass setter to CenterPart
      />
    </div>
  );
}

export default App;
