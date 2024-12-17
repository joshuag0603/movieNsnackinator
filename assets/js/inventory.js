
const movieButton = document.getElementById('movieButtonEntry');
let movieList = JSON.parse(localStorage.getItem('movies')) || [];
console.log('movies list ', movieList)
let snacksList = JSON.parse(localStorage.getItem('snacks'))|| [];
console.log('snacks list', snacksList)


// Function to display pikachus in the table
function display() {
    const moviesList = document.getElementsByTagName('tbody')[0];
    console.log(moviesList);

    // Clear the table body only if it is the first display
    if (moviesList.rows.length === 0) {
        movieList.forEach((movie, index) => {
            const row = moviesList.insertRow();
            const cellTitle = row.insertCell(0);
            const cellAction = row.insertCell(1);

            cellTitle.textContent = movie;
            cellAction.innerHTML = `<button onclick="removemovie(${index})">Remove</button>`;
        });
    }
}

// Function to remove a pikachu from the array
function removemovie(index) {
    console.log('index?', index)
    // console.log('movies', movie)
    movieList.splice(index, 1); // Remove the pikachu from the array
    localStorage.setItem('movies', JSON.stringify(movieList))
     refreshLists(); 
  
}

// Function to refresh the pikachu list after removal
function refreshLists() {  
location.reload()
}

function gatherInventory () {

        // moviesList.push(moviesLogged);
        localStorage.setItem('movies', JSON.stringify(movieList));
        // clearMoviesForm();
    
            console.log('Movies form cleared out');

        // moviesList.push(moviesLogged);
        localStorage.setItem('snacks', JSON.stringify(snacksList));
        // clearMoviesForm();
        display()

};

function init() {
    // Get stored movies from localStorage
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedMovies !== null) {
        movies = storedMovies;
      }
    display()

    // const storedSnacks = JSON.parse(localStorage.getItem('snacks'));
    // // If todos were retrieved from localStorage, update the todos array to it
    // if (storedSnacks !== null) {
    //     snacks = storedSnacks;
    //   }
    
    //   display(snack)
}


gatherInventory()
// initialize
init()