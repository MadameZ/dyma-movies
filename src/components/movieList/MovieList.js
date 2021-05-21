import React from "react";
import MovieElement from "./MovieElement";

// on met les 2 composant MovieList et MovieDetails ici car App est le composant qui contient les 2 autres (qui sont frères et soeur):
export default class MovieList extends React.Component {
  // Le tag render est obligatoire dans les class :
  render() {
    return (
      // on passe une nouvelle propriété movie dans laquelle on lui passe les movies du composant parent App :
      <div className="w-75 d-flex flex-row flex-wrap align-content-start">
        <MovieElement
          movie={this.props.movies[0]}
          // On passe updateSelectedMovie composant par composant jusqu'à MovieElement
          updateSelectedMovie={this.props.updateSelectedMovie}
        />
        <MovieElement
          movie={this.props.movies[1]}
          updateSelectedMovie={this.props.updateSelectedMovie}
        />
        <MovieElement
          movie={this.props.movies[2]}
          updateSelectedMovie={this.props.updateSelectedMovie}
        />
        <MovieElement
          movie={this.props.movies[3]}
          updateSelectedMovie={this.props.updateSelectedMovie}
        />
      </div>
    );
  }
}
