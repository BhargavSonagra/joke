

// Define variables
const apiUrl = 'https://official-joke-api.appspot.com/jokes/random';
const jokeElement = document.getElementById('joke');
const punchline = document.getElementById('punchline');
const nextButton = document.getElementById('next');
const cardBody = document.getElementsByClassName('card-body');

// Define function to get a joke from the API and display it on the screen
function getJoke() {

    cardBody[0].innerHTML = '<h3 class="m-3 p-5">Loading..</h3>';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cardContainer.innerHTML = `
            <div class="card shadow p-3 mb-3 mt-5 bg-white rounded" style="width: 40rem">
            <div class="card-body">
                    <p class="card-text"><br>${data.setup}</p>
                    <p class="card-text p-4"><b>Punchline:</b><br>${data.punchline}</p>
                </div>
                
            </div>
            `
        });
}

// Call getJoke function to display a joke when the page loads
getJoke();

// Add event listener to the "Next" button to display a new joke when clicked
nextButton.addEventListener('click', function (event) {
    event.preventDefault();
    getJoke();
});