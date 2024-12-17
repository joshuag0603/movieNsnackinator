// const pikachuList = document.querySelector('#pikachu-list');
// const pantryList = document.querySelector('#pantry-list');
// const pikachuCountSpan = document.querySelector('#pikachu-count');
// const snackCountSpan = document.querySelector('#snack-count');

// const pikachus = [];
// const snacks = [];

// Sample array of pikachu titles
let pikachus = ["Inception", "The Matrix", "Interstellar", "The Shawshank Redemption"];

// Function to display pikachus in the table
function display(id,values) {
    const pikachuList = document.getElementById(id).getElementsByTagName('tbody')[0];
    console.log(pikachuList);

    // Clear the table body only if it is the first display
    if (pikachuList.rows.length === 0) {
        pikachus.forEach((pikachu, index) => {
            const row = pikachuList.insertRow();
            const cellTitle = row.insertCell(0);
            const cellAction = row.insertCell(1);

            cellTitle.textContent = pikachu;
            cellAction.innerHTML = `<button onclick="removepikachu(${index})">Remove</button>`;
        });
    }
}

// Function to remove a pikachu from the array
function removepikachu(index) {
    pikachus.splice(index, 1); // Remove the pikachu from the array
    refreshpikachuList(); // Refresh the displayed list
}

// Function to refresh the pikachu list after removal
function refreshpikachuList() {
    const pikachuList = document.getElementById('movie-list').getElementsByTagName('tbody')[0];
    pikachuList.innerHTML = ''; // Clear existing entries

    pikachus.forEach((pikachu, index) => {
        const row = pikachuList.insertRow();
        const cellTitle = row.insertCell(0);
        const cellAction = row.insertCell(1);

        cellTitle.textContent = pikachu;
        cellAction.innerHTML = `<button onclick="removepikachu(${index})">Remove</button>`;
    });
}

// Initial display of pikachus
display('movie-list');
display('pantry-list');
// function renderpikachus() {
//     pikachuList.innerHTML = '';
//     pikachuCountSpan.textContent = pikachus.length;

//     for ()
// }

// function init() {
//     // const storedTodos = JSON.parse(localStorage.getItem('pikachus'));
//     const storedTodos = localStorage.getItem('pikachus');
// }

// console.log(storedTodos);