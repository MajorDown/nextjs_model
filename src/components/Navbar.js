import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Accueil</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/infos">Infos</Link>
    </nav>
  );
};

export default Navbar;
