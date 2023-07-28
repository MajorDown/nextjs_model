import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div id="title">
        <Image src="/logo.jpg" alt="logo" width={40} height={55} />
        <h1>Titre du site</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
