let movieList = JSON.parse(localStorage.getItem('movies')) || [];
console.log('movies list ', movieList);

let snacksList = JSON.parse(localStorage.getItem('snacks'))|| [];
console.log('snacks list', snacksList);

// Function to display movies in the table
function displayMovies() {
    const filmTable = document.getElementById('movie-list').getElementsByTagName('tbody')[0];
    filmTable.innerHTML = ''; // Clear table before displaying updated list

    movieList.forEach((movie, index) => {
        const row = filmTable.insertRow();
        row.classList.add('align-middle'); // Add vertical alignment for rows

        const cell = row.insertCell(0);

        // Combine title and button in the same cell
        cell.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${movie}</span>
                <button onclick="removemovie(${index})" class="btn btn-sm btn-danger">Remove</button>
            </div>`;
        cell.classList.add('px-3'); // Add padding for better spacing
    });

    // Update the movie count
    document.getElementById('movie-count').textContent = movieList.length; 
}

// Function to remove a pikachu from the array
function removemovie(index) {
    // console.log('removing movie at index', index)
    movieList.splice(index, 1); // Remove the movie from the array
    localStorage.setItem('movies', JSON.stringify(movieList))
    displayMovies(); //refresh table 
}

// Function to display snacks in the table
function displayPantry() {
    const cupBoard = document.getElementById('pantry-list').getElementsByTagName('tbody')[0];
    cupBoard.innerHTML = ''; // Clear table before displaying updated list

    snacksList.forEach((snack, index) => {
        const row = cupBoard.insertRow();
        row.classList.add('align-middle'); // Add vertical alignment for rows

        const cell = row.insertCell(0);

        // Combine title and button in the same cell
        cell.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span>${snack}</span>
                <button onclick="removeSnack(${index})" class="btn btn-sm btn-danger">Remove</button>
            </div>`;
        cell.classList.add('px-3'); // Add padding for better spacing
    });

    // Update the snack count
    document.getElementById('snack-count').textContent = snacksList.length; 
}

// Function to show the confirmation modal
function showConfirmModal(imageSrc, action) {
    // Dynamically update the modal image
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc;

    // Initialize and show the Bootstrap modal
    const modalElement = document.getElementById('myModal');
    const myModal = new bootstrap.Modal(modalElement);
    myModal.show();

    // Handle the Yes button click
    const confirmYesButton = document.getElementById('confirmYes');
    confirmYesButton.onclick = function () {
        action(); // Execute the passed action
        myModal.hide(); // Hide the modal
    };

    // Ensure Cancel and backdrop work as expected
    modalElement.addEventListener('hidden.bs.modal', () => {
        confirmYesButton.onclick = null; // Clean up the click event
    });
}

// function to clear the entire movie list
function clearMovieList() {
    showConfirmModal('./assets/images/movieFire.jpg', () => {
        movieList = []; // Clear the list
        localStorage.setItem('movies', JSON.stringify(movieList));
        displayMovies(); // Refresh table
    })
}

// Function to clear the entire snack list
function clearSnacksList() {
    showConfirmModal('./assets/images/emptyPantry.jpg', () => {
        snacksList = []; // Clear the list
        localStorage.setItem('snacks', JSON.stringify(snacksList));
        displayPantry(); // Refresh table
    });
}

// Function to clear both lists
function clearBothLists() {
    showConfirmModal('./assets/images/tornadoCollection.jpg', () => {
        movieList = [];
        snacksList = [];
        localStorage.setItem('movies', JSON.stringify(movieList));
        localStorage.setItem('snacks', JSON.stringify(snacksList));
        displayMovies();
        displayPantry();
    });
}

// Function to remove a snack
function removeSnack(index) {
    // console.log('removing snack at index', index):
    snacksList.splice(index, 1); // Remove the item from the array
    localStorage.setItem('snacks', JSON.stringify(snacksList)) //updates snack list
    displayPantry(); // Refreshs the table
}

//gather and save inventory
function gatherInventory () {
    localStorage.setItem('movies', JSON.stringify(movieList));
    localStorage.setItem('snacks', JSON.stringify(snacksList));
    
    displayMovies();
    displayPantry();

};

function init() {
   
    displayMovies()
    displayPantry()
}


gatherInventory()
// initialize
init();