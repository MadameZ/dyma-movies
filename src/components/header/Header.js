// Ecriture raccourcie de React.Component grâce à l'import de COmponent :
import React, { Component } from "react";

export default class Header extends Component {
  // Le tag render est obligatoire dans les class :
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/" className="navbar-brand">
          AlloMovie
        </a>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Favoris
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
