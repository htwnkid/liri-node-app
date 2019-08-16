# Liri Bot

Applicatio Purpose:

Liri Bot is a command line driven Web Application that provides the User with the ability to perform command searches for Concerts, Movies, and Songs.

The commands available in this appication are: concert-this, spotify-this-song, movie-this, and do-what-it-says. 



concert-this - This command when issued, will provide the User with concert information about their favorite Bands.

            node liri.js concert-this <artist/band name here>

            This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

            Name of the venue

            Venue location

            Date of the Event (use moment to format this as "MM/DD/YYYY")


spotify-this-song - This command will provide the user with the ability to search the  Spotify API  

            node liri.js spotify-this-song '<song name here>'

            This will show the following information about the song in your terminal/bash window

            Artist(s)

            The song's name

            A preview link of the song from Spotify

            The album that the song is from

            If no song is provided then your program will default to "The Sign" by Ace of Base.


movie-this - This command will search the OMDB API and return information about any movie name entered on the command line


            node liri.js movie-this '<movie name here>'

            This will output the following information to your terminal/bash window:

            * Title of the movie.
            * Year the movie came out.
            * IMDB Rating of the movie.
            * Rotten Tomatoes Rating of the movie.
            * Country where the movie was produced.
            * Language of the movie.
            * Plot of the movie.
            * Actors in the movie.


do-what-it-says - This command will read the random.txt file, and retrieve a specified song title, and look it up on the Spotify API.

            It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.