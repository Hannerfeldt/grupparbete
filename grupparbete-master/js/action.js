$(document).ready(function() {
    
    let actionlist = ["tt0110413", "tt0060196", "tt0468569", "tt5463162", "tt1074638", "tt0090605", "tt0172495"];
    
    let Product = function(t,u,y,v,d,a) {
        this.title = t;
        this.imgurl = u;
        this.year = y;
        this.trailerurl = v;
        this.description = d;
        this.vote = a;
        this.price = "";
        this.genre = [];
    }
    
    let actionobjects = [];

    for ( let i = 0; i < actionlist.length; i++){
        let a = $.ajax("https://api.themoviedb.org/3/find/"+actionlist[i] +"?api_key=990c8bcf3ed6fe9927c44ba174b1574d&language=en-US&external_source=imdb_id", {
            method:'GET',
            async: true,
        });


        a.done(function(data) {
            console.log(data.movie_results[0]);
            
            let movieresult = data.movie_results[0];

            let product = new Product(movieresult.title, movieresult.poster_path, movieresult.release_date, "", movieresult.overview, movieresult.vote_average);
              
            if ( product.vote < 7.2) {
                product.price = 79;
            }
            else if ( 7.2 < product.vote && product.vote < 8.0) {
                product.price = 99;
            }
            else {
                product.price = 129;
            }
            let imgcontainer = $('<div>');
            imgcontainer.attr("class", "imgcontainer")
                        .appendTo($('#product-container'));

            let myImage = $('<img/>');
            myImage.attr("src", "http://image.tmdb.org/t/p/w500/" + product.imgurl)
                    .appendTo(imgcontainer);
            let para = $('<p>');
            para.html(product.title + " " + product.price + " kr")
                .appendTo(imgcontainer);
        });
    }
});