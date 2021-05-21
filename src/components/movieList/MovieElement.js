import React from "react";

export default class MovieElement extends React.Component {
  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title);
  };
  // Le tag render est obligatoire dans les class :
  render() {
    // On écoute ici l'évent onMouseEnter et on créer le nom de la fonction
    return (
      <div onMouseEnter={this.mouseEnter} className="w-50 p-2">
        <div className="border d-flex">
          <img width="150" height="200" alt="film" src={this.props.movie.img} />
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{this.props.movie.title}</h5>
            <hr className="w-100" />
            <span>{this.props.movie.details}</span>
          </div>
        </div>
      </div>
    );
  }
}
