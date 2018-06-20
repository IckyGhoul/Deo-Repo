var friendArray = require('../data/friends.js')

// route to return all friends
module.exports = function(app){
    app.get('/api/friends',function(req,res){
        res.json(friendArray)
    });
    
    app.post('/survey',function(req,res){
        var surveyAnswers = req.body
        console.log(surveyAnswers)
    })
}

