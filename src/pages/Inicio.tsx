import React from "react";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="Inicio d-flex flex-column bg-back-color">
      
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-main-color" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="d-flex logo align-items-baseline">
                <p className="text-alter-color fw-bold fs-3">TUS</p><p className="text-custom-color fw-bold fs-3">RAMOS</p><p className="fs-4">.cl</p>
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Iniciar Sesión
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Registrarse
                  </a>
                </li>
                <li className="nav-item dropdown" data-bs-theme="light">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contacto
                  </a>
                  <ul className="dropdown-menu bg-custom-color">
                    <li>
                      <a className="dropdown-item" href="#">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Github
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="body container-fluid d-flex align-items-center">
        <div className="main container-md bg-white shadow rounded-3">
          <button className="btn btn-main-color shadow">Hola</button>
          <button className="btn btn-alter-color shadow">Hola</button>
          <button className="btn btn-back-color shadow">Hola</button>
          <button className="btn btn-custom-color shadow">Hola</button>
        </div>
      </div>


      <div className="footer container-fluid bg-main-color mt-auto text-white ">
        <div className="copyright">
          aaaaaaa
          aaaaaaaa
          aaaaaaaa
        </div>
        
        
      </div>
    </div>
  );
}

export default Inicio;
