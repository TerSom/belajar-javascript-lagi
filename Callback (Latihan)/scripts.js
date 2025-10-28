// const searchButton = document.querySelector(".search-button");
// const movieContainer = document.querySelector(".movie-container");
// const modalBody = document.querySelector(".modal-body");

// searchButton.addEventListener("click", function () {
//   const keyword = document.querySelector(".input-keyword").value;
//   fetch("https://www.omdbapi.com/?apikey=4395c2e7&s=" + keyword)
//     .then((res) => res.json())
//     .then((res) => {
//       const movie = res.Search;
//       let cards = ``;
//       movie.forEach((m) => {
//         cards += showCards(m);
//       });
//       movieContainer.innerHTML = cards;

//       // ketiika tombol detail di click
//       const modalDetailButton = document.querySelectorAll(
//         ".modal-detail-button"
//       );
//       modalDetailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           fetch("https://www.omdbapi.com/?apikey=4395c2e7&i=" + imdbid)
//             .then((res) => res.json())
//             .then((m) => {
//               const movieDetail = ShowMovieDetail(m);
//               modalBody.innerHTML = movieDetail;
//             })
//             .catch((err) => console.error(err));
//         });
//       });
//     })
//     .catch((err) => console.error(err));
// });

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movie = await getMovie(inputKeyword.value);
    updateUI(movie);
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: err,
    });
  }
});

function getMovie(keyword) {
  return fetch("https://www.omdbapi.com/?apikey=4395c2e7&s=" + keyword)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((res) => {
      if (res.Response === "False") {
        throw new Error(res.Error);
      }
      return res.Search;
    });
}

function updateUI(movie) {
  let cards = ``;
  movie.forEach((movie) => (cards += showCards(movie)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// event binding
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    try {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
    } catch (err) {
      alert(err);
    }
  }
});

function getMovieDetail(imdbid) {
  return fetch("https://www.omdbapi.com/?apikey=4395c2e7&i=" + imdbid)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((res) => {
      if (res.Response === "False") {
        throw new Error(res.Error);
      }
      return res;
    });
}

function updateUIDetail(m) {
  const movieDetail = ShowMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(m) {
  return `<div class="col-md-4 my-5">
                    <div class="card">
                        <img src="${m.Poster}" class="card-img-top" />
                        <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                            ${m.Year}
                        </h6>
                        <button type="button" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Movie Detail</button>
                        </div>
                    </div>
                    </div>
                </div>`;
}

function ShowMovieDetail(m) {
  return `<div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-3">
                                            <img src="${m.Poster}" class="img-fluid" alt="">
                                            </div>
                                            <div class="col-md">
                                            <ul class="list-group">
                                                <li class="list-group-item"><h4>${m.Title}</h4></li>
                                                <li class="list-group-item"><strong>Director : ${m.Director}</strong></li>
                                                <li class="list-group-item"><strong>Actors : ${m.Actors}</strong></li>
                                                <li class="list-group-item"><strong>Genre : ${m.Genre}</strong></li>
                                                <li class="list-group-item"><strong>Awards : ${m.Awards}</strong></li>
                                                <li class="list-group-item"><strong>Country : ${m.Country}</strong></li>
                                                <li class="list-group-item"><strong>Plot : ${m.Plot}</strong></li>
                                            </ul>
                                            </div>
                                        </div>
                                        </div>`;
}
