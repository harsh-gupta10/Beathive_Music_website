const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const filters = document.querySelector("#filters");
const durationFilter = document.querySelector("#duration-filter");
const explicitFilter = document.querySelector("#explicit-filter");
const filterButton = document.querySelector("#filter-button");
const clearButton = document.querySelector("#clear-button");
const resultsDiv = document.querySelector("#results");

let results = [];

function searchItunes(term) {
    const url = `https://itunes.apple.com/search?term=${term}&limit=10`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            results = data.results;
            displayResults();
        })
        .catch((error) => console.error(error));
}

function displayResults() {
    resultsDiv.innerHTML = "";
    results.forEach((result) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        const img = document.createElement("img");
        img.src = result.artworkUrl100;
        resultDiv.appendChild(img);
        const h2 = document.createElement("h2");
        h2.textContent = result.trackName;
        resultDiv.appendChild(h2);
        const p1 = document.createElement("p");
        p1.textContent = result.artistName;

        const h3 = document.createElement("h3");
        h3.textContent = result.duration;
        resultDiv.appendChild(h3);


        resultDiv.appendChild(p1);
        const audioPreview = result.previewUrl;
        if (audioPreview) {
            const audioPlayer = document.createElement("div");
            audioPlayer.classList.add("audio-player");
            const audio = document.createElement("audio");
            audio.controls = true;
            audio.src = audioPreview;
            audioPlayer.appendChild(audio);
            resultDiv.appendChild(audioPlayer);
        }
        resultsDiv.appendChild(resultDiv);
    });
}

function filterResults() {

    let filteredResults = results;
    
    if (durationFilter.value) {
        filteredResults = filteredResults.filter((result) => {
            const duration = result.trackTimeMillis / 1000 / 60;
            return duration <= durationFilter.value;
        });
    }

    if (explicitFilter.value) {
        filteredResults = filteredResults.filter((result) => {
            return result.trackExplicitness === explicitFilter.value;
        });
    }

    results = filteredResults;
    displayResults();

}


searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        searchItunes(searchTerm);
    }
});

filterButton.addEventListener("click", filterResults);

clearButton.addEventListener("click", () => {
    durationFilter.value = "";
    explicitFilter.value = "";
    results = results.sort((a, b) => a.trackId - b.trackId);
    displayResults();
});
