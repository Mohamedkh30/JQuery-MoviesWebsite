$(document).ready(function(){
    let id=window.location.href.split("=")[1];
    
    $.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7").done((data) => {
        let movie=data.results.filter(movie => movie.id==id)[0];
        $("#moviesDiv").append(`
        <img class="detailsImg" src="${"https://image.tmdb.org/t/p/w500" + movie.poster_path}" alt="Move" />
        <div class="detailsDiv">
            <h3 class="detailsText">${movie.original_title}</h3>
            <p class="detailsText">${movie.overview}</p>
        </div>

        `);
    });

});