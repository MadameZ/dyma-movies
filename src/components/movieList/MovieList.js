import React from "react";
import MovieElement from "./MovieElement/MovieElement";

// on met les 2 composant MovieList et MovieDetails ici car App est le composant qui contient les 2 autres (qui sont frères et soeur):
export default class MovieList extends React.Component {
  // Le tag render est obligatoire dans les class :
  render() {
    return (
      // on passe une nouvelle propriété movie dans Movie Element dans laquelle on lui passe les movies du composant parent App :

      <div className="w-75 d-flex flex-row flex-wrap align-content-start">
        {this.props.movies.map((m, index) => (
          <MovieElement
            // on rajoute ici l'index car il y a plusieurs élément avec le même nom :
            key={m.title + index}
            movie={m}
            // On passe updateSelectedMovie composant par composant jusqu'à MovieElement
            // On utilise une fonction intermédiaire pour passer la référence d'une méthode sans l'invoquer :
            updateSelectedMovie={() => {
              this.props.updateSelectedMovie(index);
            }}
          />
        ))}
      </div>
    );
  }
}
