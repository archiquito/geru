import React from "react";
import Logo from "../assets/logo.png";
import Container from "../template/Container";

const Menu = () => (
  <div className="bg-branco">
    <Container colNum="col-md-12">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#/todos ">
          <img src={Logo} style={{ width: "150px" }} alt="geru" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavCol"
          aria-controls="navbarNavCol"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavCol">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/todos">
                Todo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/about">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  </div>
);

export default Menu;
