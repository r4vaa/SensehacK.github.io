var urlLastFm =
    `https://ws.audioscrobbler.com/2.0/
?method=user.getrecenttracks
&user=sensehack
&limit=8
&api_key=4ba03f783090e2ff9ec08e2a63be196b
&format=json`;

var url2 =
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=sensehack&limit=5&api_key=4ba03f783090e2ff9ec08e2a63be196b&format=json";

fetch(urlLastFm)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonResponse) {
        console.log(jsonResponse)
        console.log("type of jsonresponse")
        console.log(typeof (jsonResponse))
        console.log("printing try artists")
        console.log(jsonResponse.recenttracks.track[0].artist)
        // console.log(jsonResponse.key)

        console.log("Finally was able to access the json data")
        console.log("Thanks to Debashis")


        //Accessing 8 json elements overall
        for (var i = 0; i < 8; i++) {

            // Getting accessing artists from Last FM
            var track = jsonResponse.recenttracks.track[i]
            console.log("printing url 2 data ")
            console.log(track)

            // Getting accessing artists from Last FM
            var artistName = track.artist['#text']
            console.log("accessing artists")
            console.log(artistName)

            // Getting accessing artistSongName from Last FM
            var artistSongName = track.name
            console.log("accessing artistSongName")
            console.log(artistSongName)


            // Getting image[3] for highest quality to showcase
            var artistNameSongArr = track.image[3]
            console.log("accessing artistNameSongImage")
            var artistNameSongImage = artistNameSongArr['#text']
            console.log(artistNameSongImage)
            console.log(i + 1)


            // Getting nowPlaying from Last FM
            var nowPlayingB = (track['@attr']) ? true : false
            console.log("accessing Getting nowPlaying")
            console.log(nowPlayingB)
            // Now playing logic for element hide
            if (nowPlayingB) {
                document.getElementById("lastFMScrobbling").innerHTML =
                    "Scrobbling now";
            } else {
                document.getElementById("lastFMScrobbling").hidden = true;
            }

            // Setting variable for dynamic ID generation 
            // Setting the ID with artistName + (i + 1) Because I named them wrong at starting
            var artistSongNameArr = "albumSong" + (i + 1)
            // Setting the ID with artistName + (i + 1) Because I named them wrong at starting
            var artistNameArr = "albumArtist" + (i + 1)
            // Setting the ID with albumSongImage + (i + 1) Because I named them wrong at starting
            var artistSongNameImageArr = "albumSongImage" + (i + 1)
            //Debug prints regarding numbering system. Turns out my 8 elements logic < 7 for i = 0 was missing out for element 8th in JSON response.
            console.log(artistSongNameArr)
            console.log(artistNameArr)
            console.log(artistSongNameImageArr)

            //Debug Prints Logs
            console.log("var artistSongNameImageArr = artistNameSongImage + i ")
            console.log(artistSongNameImageArr)

            // Setting songs meta data on HTML by document by get Element ID
            document.getElementById(artistNameArr).innerHTML = artistName
            document.getElementById(artistSongNameArr).innerHTML = artistSongName


            // Getting nowPlaying from Last FM
            var artistArtworkSongB = (artistNameSongImage) ? true : false

            // Now Image boxes with Last Fm  Music Scrobble Images or don't set images artwork.
            if (artistArtworkSongB) {
                console.log("artistArtworkSongB artwork found")
                console.log(artistArtworkSongB)
                document.getElementById(artistSongNameImageArr).src =
                    artistNameSongImage;
            } else {
                console.log("No artistArtworkSongB artwork found")
            }

        }



        // Setting once out of loop.
        document.getElementById("artistNameP1").innerHTML = artistName
        document.getElementById("artistSongNameP1").innerHTML = artistSongName
        document.getElementById("artistNameSongImage").src = artistNameSongImage;
    });