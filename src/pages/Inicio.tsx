import React from "react";
import "./Inicio.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface NavOptionsProps {
  name: string;
  type: string;
  state?: string;
  moreOptions?: NavOptionsProps[];
  href: string;
}

function Inicio() {
  const listNavOptionsProp = [
    {
      name: "Iniciar Sesión",
      type: "item",
      state: "active",
      href: "#"
    },
    {
      name: "Registrarse",
      type: "item",
      href: "#"
    },
    {
      name: "Notas",
      type: "item",
      href: "#"
    },
    {
      name: "Ramos",
      type: "item",
      href: "#"
    },
    {
      name: "Contacto",
      type: "dropdown",
      href: "#",
      moreOptions: [
        {
          name: "Instagram",
          type: "item",
          href: "https://www.youtube.com"
        },
        {
          name: "Facebook",
          type: "item",
          href: "#"
        },
        {
          name: "Github",
          type: "item",
          href: "#"
        }
      ]
    },
  ];

  return (
    
    <div className="Inicio d-flex flex-column bg-back-color">
      <Navbar options={listNavOptionsProp}/>

      <div className="body container-fluid d-flex align-items-center">
        <div className="main container-fluid bg-white shadow rounded-3">
          <button className="btn btn-main-color shadow">Hola</button>
          <button className="btn btn-alter-color shadow">Hola</button>
          <button className="btn btn-back-color shadow">Hola</button>
          <button className="btn btn-custom-color shadow">Hola</button>
        </div>
      </div>

      <Footer/>
      
    </div>
  );
}

export default Inicio;
