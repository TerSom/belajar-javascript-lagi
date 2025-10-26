$('.search-button').on('click', function() {
    $.ajax({
      url: "https://www.omdbapi.com/?apikey=4395c2e7&s=" + $(".input-keyword").val(),
      success: (results) => {
        const movie = results.Search;
        let cards = ``;
        movie.forEach((m) => {
          cards += showCards(m);
        });
        $(".movie-container").html(cards);
    
        // ketika tombol detail di clcik
        $(".modal-detail-button").on("click", function () {
          $.ajax({
            url: `https://www.omdbapi.com/?apikey=4395c2e7&i=${$(this).data(
              "imdbid"
            )}`,
            success: (m) => {
              const movieDetail = ShowMovieDetail(m);
              $(".modal-body").html(movieDetail);
            },
            error: (e) => {
              console.log(e.responseText);
            },
          });
        });
      },
      error: (e) => {
        console.log(e.responseText);
      },
    });
})



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
