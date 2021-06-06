/** - BOOTSTARP chargé dans public/index.html */

/** - Voir le projet sur Dyma :
 *    https://github.com/dymafr/react-chapitre9-projet3-end */

 /* ------------------------------------------------------- */

import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// Besoin des accolades car on fait référence au fichier index.js qui permet d'importer tous les éléments depuis le dossier component :
import {
  Header,
  MovieElement,
  MovieList,
  MovieDetails,
  Loading,
} from "./components";
import dataMovies from "./components/data";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
    };

    setTimeout(() => {
      this.setState({
        movies: dataMovies,
        loaded: true,
      });
    }, 2000);
  }

  // Méthode pour changer le film séléctionné :
  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index,
    });
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        {this.state.loaded ? (
          <div className="d-flex flex-row border flex-fill pt-4 p-2">
            {/* On passe la fonction updateSelectedMovie en propriété  */}
            <MovieList
              movies={this.state.movies}
              updateSelectedMovie={this.updateSelectedMovie}
            />
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
