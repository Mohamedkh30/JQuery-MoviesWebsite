$(document).ready(function(){
    
    $.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7").done((data) => {
        data.results.forEach((movie)=>{
            $("#moviesDiv").append(
            `<div class="cardDiv">
                <a href="./DetailsPage.html?id=${movie.id}">
                    <img src="${"https://image.tmdb.org/t/p/w500" + movie.poster_path}" alt="">
                    ${movie.original_title}
                </a>
            </div>`);
        });
    });


});
