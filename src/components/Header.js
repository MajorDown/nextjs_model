import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import AdminCorner from "./AdminCorner";

const Header = () => {
  return (
    <header>
      <AdminCorner />
      <div id="title">
        <Image src="/logo.jpg" alt="logo" width={40} height={55} />
        <h1>Titre du site</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
