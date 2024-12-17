const form = document.getElementById ('form');
const movieButton = document.getElementById('movieButtonEntry');
const snackButton = document.getElementById('snackButtonEntry');
const randomButton = document.getElementById('button');
const moviesSubmitted = document.getElementById('movieInputs');
const snacksSubmitted = document.getElementById ('snackInputs');
let moviesList = JSON.parse(localStorage.getItem('movies')) || [];
let snacksList = JSON.parse(localStorage.getItem('snacks')) || [];

function clearMoviesForm() {
    moviesSubmitted.value ="";
    };
function clearSnacksForm (){
    snacksSubmitted.value =""
    };

function movieButtonClicked () {

    // functionality for movie button when clicked
    movieButton.addEventListener('click', function (newEvent) {
        newEvent.preventDefault ();

        // for error message to trigger if any of the entries are blank:   
        if (moviesSubmitted.value === "") {
            //  errorMessage.textContent = "Please add some movies!";
                console.log ("You can't eat snacks wihout a movie! Please add some movies!");
                return; };

        const moviesLogged = moviesSubmitted.value.trim();
        moviesList.push(moviesLogged);
        localStorage.setItem('movies', JSON.stringify(moviesList));
        clearMoviesForm();
            console.log('Movies form cleared out');

        })};

        function snackButtonClicked () {

    // functionality for snack Button when clicked
    snackButton.addEventListener('click', function (event) {
        event.preventDefault ();

        // for error message to trigger if any of the entries are blank:   
        if (snacksSubmitted.value === "") {
            //  errorMessage.textContent = "Please add some movies!";
                console.log ("You can't watch movies wihout snacks! Please add some snacks!");
                return; };

        const snacksLogged = snacksSubmitted.value.trim();
        snacksList.push(snacksLogged);
        localStorage.setItem('snacks', JSON.stringify(snacksList));
        clearSnacksForm();
            console.log('Snacks form cleared out');
        })};

  movieButtonClicked();
  console.log('Movies are entered');

  snackButtonClicked();
  console.log('Snacks are entered');

const getRandomMovie = function (moviesArray) {
    const random1Index = Math.floor(Math.random() * moviesArray.length);
    const randomMovieName = moviesArray[randomIndex];
    console.log(`The movie you should watch is: ${randomMovieName}`);
  };

const getRandomSnack = function (snacksArray) {
    const random2Index = Math.floor(Math.random() * snacksArray.length);
    const randomSnackName = snacksArray[randomIndex];
    console.log(`The snack you should eat is: ${randomSnackName}`);
  };