//var envvar = require("./dotenv").config();
var spotify = require("Node-Spotify-API");
var axios = require("Axios");
var moment = require("Moment");
var keys = require("./keys.js");

//Capture the Command Line Arguments

var cmdLnCmd = process.argv[2];                             //Script Command  i.e movie-this, do-what-it=says, etc
var cmdLnArg1 = process.argv[3];

switch (cmdLnCmd) {

   case 'movie-this':

         //axios
         //   .get("https://api.spotify.com")
         //   .then(function(response) {
         // If the axios was successful...
         // Then log the body from the site!
         //    console.log(response.data);
         // });

         //var re = /\ /g;
         //var str = cmdLnArg1;
         //var newstr = str.replace(re, '+');


         //console.log("newstr = " + newstr);



         console.log("The Command Entered was: " + cmdLnCmd);
         console.log("The Argument Entered was: " + cmdLnArg1);

         //if (newstr.length === null) {

         //    newstr = "mr.+nobody"

         //} else

         //}

         //############# For Testing Purpose Only Remove   ###############################################

         axios.get("http://www.omdbapi.com/?t=mr/\.+nobody=&y=&plot=short&apikey=trilogy").then(
         function(response) {
            console.log("The Title of the Movie is: " + response.data.Title);
            console.log("Year the movie came out is: " + response.data.Year);
            console.log("IMDB Rating of the movie is: " + response.data.imdbRating);
            //console.log("Rotten Tomatoes Rating of the movie is: " + response.data.imdbRating);
            console.log("Country whee the movie was produced: " + response.data.Country);
            console.log("Language of the movie: " + response.data.Language);
            console.log("Plot of the movie is: " + response.data.Plot);
            console.log("Actors in the movie are: " + response.data.Actors);
         });





   case 'concert-this':
   case 'spotify-this-song':
   case 'do-what-it-says':

}


//axios
//   .get("https://api.spotify.com")
//   .then(function(response) {
    // If the axios was successful...
    // Then log the body from the site!
//    console.log(response.data);
 // });

//Creating a new spotify object
//var spotify = new Spotify(keys.spotify);

//Capture the Command Line Arguments

var cmdLnCmd = process.argv[2];                             //Script Command  i.e movie-this, do-what-it=says, etc
var cmdLnArg1 = process.argv[3];                           //Movie Title







