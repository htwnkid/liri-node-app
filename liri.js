require("dotenv").config();
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");
var fs = require("fs");


//Capture the Command Line Arguments

var cmdLnCmd = process.argv[2];                             //Script Command  i.e movie-this, do-what-it=says, etc
var cmdLnArg1 = process.argv[3];                            //Movie Name

switch (cmdLnCmd) {

   case 'movie-this':

         //axios
         //   .get("https://api.spotify.com")
         //   .then(function(response) {
         // If the axios was successful...
         // Then log the body from the site!
         //    console.log(response.data);
         // });

         console.log("cmdLnArg1 := " + cmdLnArg1);

         if (cmdLnArg1 === undefined) {

            newstr = "mr+nobody"; 

            console.log("I got inside newstr kevin");

         } else {

            var re = /\ /g;
            var str = cmdLnArg1;
            var newstr = str.replace(re, '+');
            
         }

         console.log("newstr = " + newstr);

         console.log("The Command Entered was: " + cmdLnCmd);
         console.log("The Argument Entered was: " + cmdLnArg1);

         axios.get("http://www.omdbapi.com/?t=" + newstr + "=&y=&plot=short&apikey=trilogy").then(

         function(response) {
               console.log("The Title of the Movie is: " + response.data.Title);
               console.log("Year the movie came out is: " + response.data.Year);
               console.log("IMDB Rating of the movie is: " + response.data.imdbRating);
               console.log("Rotten Tomatoes Rating of the movie is: " + response.data.imdbRating);
               console.log("Country whee the movie was produced: " + response.data.Country);
               console.log("Language of the movie: " + response.data.Language);
               console.log("Plot of the movie is: " + response.data.Plot);
               console.log("Actors in the movie are: " + response.data.Actors);
            });

      
   case 'concert-this':

              //axios
              //   .get("https://api.spotify.com")
              //   .then(function(response) {
              // If the axios was successful...
              // Then log the body from the site!
              //    console.log(response.data);
              // });
               
            console.log("cmdLnArg1 := " + cmdLnArg1);
               
            if (cmdLnArg1 === undefined) {
               
                  newstr = "mr+nobody"; 
               
                  console.log("I got inside newstr kevin");
               
            } else {
               
                  //var re = /\ /g;
                  //var str = cmdLnArg1;
                  //var newstr = str.replace(re, '+');
                           
              
               
                  //console.log("newstr = " + newstr);
               
                  //console.log("The Command Entered was: " + cmdLnCmd);
                  //console.log("The Argument Entered was: " + cmdLnArg1);
               
                  //axios.get("https://rest.bandsintown.com/artists/" + newstr + "?app_id=codingbootcamp").then(

                  axios.get("https://rest.bandsintown.com/artists/+maroon+5"+"?app_id=codingbootcamp").then(


                  function(response) {

                        console.log("Response Data := " + response);
                        
                        //console.log("Name of the venue: " + response.data.name);
                        //console.log("Venue location: " + response.data.Year);
                        //console.log("Date of the Event: " + response.data.imdbRating);

                  }

            


            )} 

   
   case 'spotify-this-song':

                  cmdLnCmd = process.argv[2];                             //Script Command  i.e movie-this, do-what-it=says, etc
                  cmdLnArg1 = process.argv[3];                            //Song Name
         
                  if (cmdLnArg1 === undefined) {

                        newstr = "the+sign"; 
                                           
                     } else {
            
                        var re = /\ /g;
                        var str = cmdLnArg1;
                        var newstr = str.replace(re, '+');
                        
                     }
         
         
                  //Creating a new spotify object
         
                  var spotify = new Spotify(keys.spotify);
         
                  spotify.search({ type: 'track', query: newstr }, function(err,data) {
         
                  if(err) {
         
                       return console.log('Error occurred: ' + err);
         
                  }
         
                  console.log(data);
         
                  for (i in items[0].Objects) {
         
                      console.log(tracks.Objects[0]);
         
                  }
         
                });
                         
         
                         
         
            

   case 'do-what-it-says':

         fs.readFile("random.txt", "utf8", function(error, data) {

         // If the code experiences any errors it will log the error to the console.

         if (error) {

             return console.log(error);

         }

         console.log("Data Read from Random.txt file: " + data);

         var str = data;

         var wordparts = str.split(',');

         console.log("The first part is: "+ wordparts[0]);

         console.log("The first part is: "+ wordparts[1]);

         //Creating a new spotify object

         var spotify = new Spotify(keys.spotify);

         spotify.search({ type: 'track', query: wordparts[1] }, function(err,data) {

         if(err) {

              return console.log('Error occurred: ' + err);

         }

         console.log(data);

         for (i in items[0].Objects) {

             console.log(tracks.Objects[0]);

         }

       });
                

                

   });

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

//var cmdLnCmd = process.argv[2];                             //Script Command  i.e movie-this, do-what-it=says, etc
//var cmdLnArg1 = process.argv[3];                           //Movie Title







