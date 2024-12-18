const form = document.getElementById ('form');
const movieButton = document.getElementById('movieButtonEntry');
const snackButton = document.getElementById('snackButtonEntry');
const randomButton = document.getElementById('buttonRandom');
const moviesSubmitted = document.getElementById('movieInputs');
const snacksSubmitted = document.getElementById ('snackInputs');
const modalMovieContent = document.getElementById("modalMovieText");
const modalSnackContent = document.getElementById("modalSnackText");
let moviesList = JSON.parse(localStorage.getItem('movies')) || []; //Good Error Handling!
let snacksList = JSON.parse(localStorage.getItem('snacks')) || [];

function clearMoviesForm() {
    moviesSubmitted.value = "";
};
function clearSnacksForm() {
    snacksSubmitted.value = "";
};

function movieButtonClicked () {

    // functionality for movie button when clicked
    movieButton.addEventListener('click', function (newEvent) {
        newEvent.preventDefault ();

        // for error message to trigger if any of the entries are blank:   
        if (moviesSubmitted.value === "") {
            //  errorMessage.textContent = "Please add some movies!";
                console.log ("You can't eat snacks wihout a movie! Please add some movies!");
                return; 
            };

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

function randomizerButton () {

    randomButton.addEventListener("click", function(event) {
    event.preventDefault();
    const movieArray = JSON.parse(localStorage.getItem("movies"));
    const snackArray = JSON.parse(localStorage.getItem("snacks"));

    getRandomMovie(movieArray);
    getRandomSnack(snackArray);
    showRecModal();
    return;
})};

const getRandomMovie = function (movieArray) {
    const random1Index = Math.floor(Math.random() * movieArray.length);
    const randomMovieName = movieArray[random1Index];
    modalMovieContent.textContent = `The movie you should watch is: ${randomMovieName}`;
    return;
};
const getRandomSnack = function (snacksList) {
    const random2Index = Math.floor(Math.random() * snacksList.length);
    const randomSnackName = snacksList[random2Index];
    modalSnackContent.textContent = `The snack you should eat is: ${randomSnackName}`;
    return;
};
function showRecModal() {
    const modalElement = document.getElementById('recModal');
    const myModal = new bootstrap.Modal(modalElement);
    myModal.show();
    };

randomizerButton();