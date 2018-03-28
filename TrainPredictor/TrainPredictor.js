// Initialize Firebase
var config = {
    apiKey: "AIzaSyDK7gSPFJYDzwp31ZuGEgv0xoEyjrwHWlA",
    authDomain: "trainprediction.firebaseapp.com",
    databaseURL: "https://trainprediction.firebaseio.com",
    projectId: "trainprediction",
    storageBucket: "",
    messagingSenderId: "210532123376"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //initial values
  var trainName;
  var destination;
  var frequency;
  var firstTrain;
  var nextTrain;
  var minutesAway;
  var firstTimeConverted;
  var currentTime;
  var timeDifference;
  var timeRemainder;

  $('#add-train').on('click',function(){
      event.preventDefault();
      console.log('hello lovely')

// grabs values from input boxes
      trainName = $('#name-input').val()
      destination= $('#destination-input').val()
      frequency = $('#frequency-input').val()
      firstTrain = $('#first-train-input').val()


// converts first train time to object moment.js can read
     firstTimeConverted = moment(firstTrain,"hh:mm").subtract(1,"years")
     console.log(firstTimeConverted)
     // tests current time
     currentTime = moment();
     // logs current time in a converted format
     console.log("current Time: " + moment(currentTime).format("hh:mm"))
     // calculates difference between current moment and 'firstTimeConverted' in minutes
     timeDifference = moment().diff(moment(firstTimeConverted),"minutes");
     console.log('Difference in Time: ' + timeDifference)
     //calculates remainder of timeDifference and frequency of trains
     timeRemainder = timeDifference % frequency
     console.log(timeRemainder)
     // calculates how many minutes until next train
     minutesAway = frequency - timeRemainder
     console.log('Train is ' + minutesAway + ' minutes away!')
     // adds number of minutes until next train to current moment to calculate arrival time
     nextTrain = moment().add(minutesAway,'minutes')
     console.log(nextTrain)
     //converts nexts train's arrival time to a readable format
     convertedNextTrain = moment(nextTrain).format('hh:mm')
     console.log(convertedNextTrain)
     
    // push data to firebase
    database.ref().push({
      trainName: trainName,
      destination:destination,
      frequency: frequency,
      nextTrain: convertedNextTrain,
      minutesAway: minutesAway

    })
      
      
  })
  // pull data from firebase on to table

  database.ref().on('child_added',function(snapshot){
console.log('hello my only one')
$('#table-body').append('<tr><td>' + snapshot.val().trainName +'</td><td>' + snapshot.val().destination + '</td><td>' + snapshot.val().frequency + '</td><td>' + snapshot.val().nextTrain + '</td><td>' + snapshot.val().minutesAway + '</td></tr>')
  })