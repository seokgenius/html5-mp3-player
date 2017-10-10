(function () {

    // Playlist array
    var files = [
        "./files/Kalimba/mp3/Kalimba.mp3",
        "./files/Maid with the Flaxen Hair/mp3/Maid with the Flaxen Hair.mp3",
        "./files/Sleep Away/mp3/Sleep Away.mp3"
    ];

    // Current index of the files array
    var current = 0;

    // Get the audio element
    var playlistPlayer = document.querySelector("#playlist audio");

    // function that will be call at the end of the previous
    function next() {
        // Check for last media in the playlist
        if (current === files.length - 1) {
            current = 0;
        } else {
            current++;
        }

        // Change the audio element source
        playlistPlayer.src = files[current];
    }

    // Check if the player is in the DOM
    if (playlistPlayer === null) {
        throw "Playlist Player does not exists ...";
    } else {
        // Start the player
        playlistPlayer.src = files[current];

        // Listen for the playback ended event, to play the next media
        playlistPlayer.addEventListener('ended', next, false)
    }

})();