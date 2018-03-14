// an array to store submitted anime
var animes = [];

// function to display buttons on screen
function generateButtons() {
    //empties gif-display div
    $('#button-display').empty()
    //loops through array of submitted anime
    for (var x = 0; x < animes.length; x++) {
        var a = $('<button>')
        a.addClass('anime-button');
        a.attr('data-name', animes[x]);
        a.text(animes[x]);
        $('#button-display').append(a)

    }
}

// when submit button is clicked, pushes value of input box to animes array (continuous)
$('#add-anime').on('click', function (event) {
    event.preventDefault();
    console.log('test1')
    // takes input from anime-input-box and stores it in a variable
    // .val() gets value  .trim() cuts whitespace
    var show = $('#anime-input-box').val().trim();
    // pushes value to animes array 
    animes.push(show);
    $('#anime-input-box').val('')
    // calls generateButtons function to dispay buttons on screen
    generateButtons();
});


function grabGif() {
    console.log('test2')
    var screen = $(this).attr('data-name')
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        screen + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response)
        var results = response.data
        $('#gif-display').empty();
        for (var x = 0; x < results.length; x++) {
            var showDiv = $('<div class ="col-lg-6">')
            var showGif = $('<img class ="size">')
            // showGif.data('hello lovely')
            showGif.attr('src', results[x].images.fixed_height.url)
            var showRate = $('<h2>' + "Rating: " + results[x].rating + '</h2>')
            showDiv.prepend(showRate)
            showDiv.append(showGif)
            $('#gif-display').prepend(showDiv)
            function pauseGif() {
                $('img').on('click', function () {
                    console.log(this)
                    console.log(this.src)
                    //console.log(this.data)
                    
                    
                    
                    
                })
            }
            
            pauseGif();
        }


    })
   
}



$(document).on("click", ".anime-button", grabGif);

