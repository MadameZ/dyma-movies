import React from "react";

export default class MovieDetails extends React.Component {
  // Le tag render est obligatoire dans les class :
  render() {
    return (
      <div className="w-25 bg-light p-4 d-flex flex-column">
        <h5>{this.props.movie.title}</h5>
        <hr className="w-100" />

        <img
          className="d-block mx-auto"
          src={this.props.movie.img}
          alt="film"
        ></img>

        <hr className="w-100" />
        <span className="text-secondary">{this.props.movie.details}</span>
        <hr className="w-100" />
        <span>{this.props.movie.description}</span>
      </div>
    );
  }
}
