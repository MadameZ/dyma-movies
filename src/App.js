import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// Besoin des accolades car on fait référence au fichier index.js qui permet d'importer tous les éléments depuis le dossier component :
import { Header, MovieElement, MovieList, MovieDetails } from "./components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "The Godfather",
          img:
            "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/35/57/73/18660716.jpg",
          details: "175 mins | Crime, Drama",
          description:
            "The aging patriarch of an organized crime dynastytransfers control",
        },
        {
          title: "Apocalypse Now",
          img:
            "https://fr.web.img2.acsta.net/c_310_420/pictures/19/08/01/11/55/5421188.jpg",
          details: "175 mins | Crime, Drama",
          description:
            "The aging patriarch of an organized crime dynastytransfers control",
        },
        {
          title: "The Lord of the Rings",
          img:
            "https://images-eu.ssl-images-amazon.com/images/I/51yGGGhrsHL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
          details: "175 mins | Crime, Drama",
          description:
            "The aging patriarch of an organized crime dynastytransfers control",
        },
        {
          title: "Gladiator",
          img:
            "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/68/64/41/19254510.jpg",
          details: "175 mins | Crime, Drama",
          description:
            "The aging patriarch of an organized crime dynastytransfers control",
        },
      ],
      selectedMovie: 0,
    };
  }

  // Méthode pour changer le film séléctionné :
  updateSelectedMovie = (title) => {
    /* findIndex retourne l'index d'un élément qu'on cherche
     - elle sera invoquée pour chacun des éléments du tableau
     - elle prend en paramètre une fonction de callback 
     - m sera le film de l'itération en cours 
     - Si le title correspond à celui de l'itération en cours, alors on retourne l'index */
    const index = this.state.movies.findIndex((m) => {
      return title === m.title;
    });
    this.setState({
      selectedMovie: index,
    });
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row border flex-fill pt-4 p-2">
          {/* On passe la fonction updateSelectedMovie en propriété  */}
          <MovieList
            movies={this.state.movies}
            updateSelectedMovie={this.updateSelectedMovie}
          />
          <MovieDetails movie={this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    );
  }
}
