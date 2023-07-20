"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AdminCorner = () => {
  const adminCorner = useRef();
  const [isOpen, setisOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [userId, setUserId] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputMdp, setInputMdp] = useState("");

  useEffect(() => {
    if (localStorage.getItem("AppUserId")) {
      setUserId(localStorage.getItem("AppUserId"));
      setIsConnected(true);
    } else {
      setUserId("");
      setIsConnected(false);
    }
  }, [localStorage.getItem("AppUserId")]);

  useEffect(() => {
    if (isOpen) {
      adminCorner.current.classList.add("isOpen");
    } else {
      adminCorner.current.classList.remove("isOpen");
    }
  }, [isOpen]);

  const handleLogin = () => {
    fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputId, inputMdp }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur d'authentification");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("appToken", data.token);
        localStorage.setItem("AppUserId", data.userId);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("AppToken");
    localStorage.removeItem("AppUserId");
  };

  return (
    <div id="adminCorner" ref={adminCorner}>
      <button onClick={() => setisOpen(!isOpen)}>
        <Image
          id="adminBtn"
          src={
            isConnected
              ? "/adminIcons/adminBtnOn.png"
              : "/adminIcons/adminBtnOff.png"
          }
          alt="admin icon"
          width={30}
          height={30}
        />
      </button>
      {isOpen && (
        <div>
          {isConnected ? (
            <div id="adminForm">
              <p>mode Admin : {userId}</p>
              <button onClick={handleLogout}>
                <Image
                  id="disconnectBtn"
                  src="/adminIcons/disconnectBtn.png"
                  alt="Déconnection"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          ) : (
            <div id="adminForm">
              <input
                id="userId"
                name="userId"
                type="text"
                placeholder="identifiant"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="mot de passe"
                value={inputMdp}
                onChange={(e) => setInputMdp(e.target.value)}
              />
              <button onClick={handleLogin}>
                <Image
                  id="connectBtn"
                  src="/adminIcons/connectBtn.png"
                  alt="Connection"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminCorner;
