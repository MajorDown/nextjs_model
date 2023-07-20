"use client";
import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleIsSidebarOpen = () => {
    if (isSidebarOpen) setIsSidebarOpen(false);
    if (!isSidebarOpen) setIsSidebarOpen(true);
  };
  return (
    <aside>
      <button onClick={handleIsSidebarOpen}>
        {isSidebarOpen ? "Fermer " : "Ouvrir "}la Sidebar
      </button>
      {isSidebarOpen && (
        <ul>
          <li>
            <Link href="https://www.google.fr">Google</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com">Facebook</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://www.twitter.com">Twitter</Link>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
