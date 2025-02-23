// task 1

// const str = "Hello World";

// function countAll(str) {
//   let letterCounter = 0;
//   let digitCounter = 0;

//   const arr = str.toLowerCase().replace(" ", "").split("");

//   for (let i of arr) {
//     if (!isNaN(i)) {
//       digitCounter++;
//     } else if (i >= "a" && i <= "z") {
//       letterCounter++;
//     }
//   }

//   return `Letters: ${letterCounter}, Digits: ${digitCounter}`;
// }

// console.log(countAll(str));

// task 2

// function counterFunc (){
//   let count = 0

//  return {
//   this.getCurrentCount = function(){
//     return count;
//   }

//   this.addCount = function(num){
//     count += num
//     return count
//   }

//   this.subtrackCount = function(num){
//     count -= num
//     return count
//   }

//   this.resetCount = function(){
//     count = 0
//     return count
//   }
// }
// }

// task 3

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Action"],
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genres: ["Action", "Crime"],
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
  },
];

function addMovie(movie) {
  movies.push(movie);
}
function findMoviesByDirector(director) {
  const movieListByDirector = [];
  for (let movie of movies) {
    if (movie.director === director) {
      moviesLitByDirector.push(movie);
    }
  }
  return movieListByDirector;
}
function findMoviesByYear(year) {
  const movieListByYear = [];
  for (let movie of movies) {
    if (movie.year === year) {
      movieListByYear.push(movie);
    }
  }
  return movieListByYear;
}
function getMoviesByGenre(genre) {
  const movieListByGenre = [];
  for (let movie of movies) {
    if (movie.genres.includes(genre)) {
      movieListByGenre.push(movie);
    }
  }
  return movieListByGenre;
}
function sortMoviesBy(criteria) {
  // Implement the function to sort movies
}
function removeMovieByTitle(title) {
  const newMoviesArray = movies.filter((movie) => {
    return movie.title !== title;
  });
  return newMoviesArray;
}

console.log();
