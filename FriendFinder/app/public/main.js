$('#submit-survey').on('click', function () {
    // array to hold survey answer scores
    var surveyAnswers = [];
    //array to hold total difference in survey answers
    var totalAnswerDiffArr = [];
    // grabs current url location for ajax request
    var currentURL = window.location.origin
    event.preventDefault();
    //stores all survey answers in survey answers array
    for (var x = 1; x < 11; x++) {
        var surveyAns = $("#q" + x).val()
        surveyAnswers.push(surveyAns)
    }
    console.log(surveyAnswers)
    // grabs object from
    $.ajax({ url: currentURL + '/api/friends', method: 'GET' }).then(
        function (friends) {
            var ansDiffArr = []
    //compares survey results to avenger scores
            for (var x = 0; x < friends.length; x++) {
                for (y = 0; y < surveyAnswers.length; y++) {
                    ansDiffArr.push(Math.abs(surveyAnswers[y] - friends[x].scores[y]))
                }

                function add(a, b) { return a + b }
                var totalAnswerDiff = ansDiffArr.reduce(add, 0)
                totalAnswerDiffArr.push(totalAnswerDiff)
                ansDiffArr = [];
            }
            console.log(totalAnswerDiffArr)
            // finds lowest score
            var lowestScoreIndex = totalAnswerDiffArr.reduce((iMin,x,i,arr)=> x < arr[iMin] ? i : iMin, 0) 
            
            $('#avenger-name').text(friends[lowestScoreIndex].name)
            $('#image-container').attr('src',friends[lowestScoreIndex].photo)
        }

    )
   
});
$('#play-again').on('click', function(){
    
    for (var x = 1; x < 11; x++) {
        $('#q'+ x).prop('selectedIndex',0)
       
    }

})