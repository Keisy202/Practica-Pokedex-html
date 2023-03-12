const apiKey = "TU_CLAVE_DE_API";

function search() {
  const query = document.getElementById("search-bar").value;
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${query}&type=video&maxResults=12`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const results = data.items;
      const resultsContainer = document.getElementById("results-container");
      resultsContainer.innerHTML = "";
      results.forEach(result => {
        const videoId = result.id.videoId;
        const title = result.snippet.title;
        const thumbnail = result.snippet.thumbnails.medium.url;
        const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
        const video = `
          <div class="video">
            <a href="${videoLink}" target="_blank">
              <img src="${thumbnail}">
              <p>${title}</p>
            </a>
          </div>
        `;
        resultsContainer.insertAdjacentHTML("beforeend", video);
      });
    });
}

document.getElementById("search-button").addEventListener("click", search);

