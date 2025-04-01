import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="header">
        <button className="menu-button" aria-label="menu" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FiAlignJustify />}
        </button>
        <h1 className="logo">Meu Projeto</h1>
      </header>

      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>
        <ul className="sidebar-nav">
          <li onClick={() => { navigate("/cadastro-login"); setIsOpen(false); }} className="nav-item">Entrar</li>
          <li onClick={() => { navigate("/"); setIsOpen(false); }} className="nav-item">Início</li>
          <li onClick={() => { navigate("/perfil"); setIsOpen(false); }} className="nav-item">Perfil</li>
          <li onClick={() => { navigate("/mensagem"); setIsOpen(false); }} className="nav-item">Mensagens</li>
          <li onClick={() => { navigate("/configuracoes"); setIsOpen(false); }} className="nav-item">Configurações</li>
          <li onClick={() => { navigate("/"); setIsOpen(false); }} className="nav-item">Sair</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
