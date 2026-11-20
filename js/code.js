let container = document.querySelector("#tracklist-container");

fetch("js/songs.json")
  .then(response => response.json())
  .then(songs => {
    songs.forEach(song => {
      container.innerHTML += `
        <div class="col-md-4">
          <div class="card bg-black text-light border-secondary h-100">
            <img src="${song.image}" class="card-img-top img-fluid" alt="${song.title}">
            <div class="card-body">
              <h2 class="card-title h4 text-uppercase fw-bold">${song.title}</h2>
              <p class="card-text">${song.description}</p>
            </div>
            <div class="card-footer">
              <a href="${song.destination}" target="_blank" class="btn btn-outline-danger">
                Learn more
              </a>
            </div>
          </div>
        </div>
      `;
    });
  });

const forms = document.querySelectorAll(".needs-validation");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});