const music =
    document.getElementById("music");


const musicButton =
    document.getElementById("musicButton");


const musicStatus =
    document.getElementById("musicStatus");



musicButton.addEventListener(
    "click",
    async function () {


        if (music.paused) {


            try {


                await music.play();


                musicButton.textContent =
                    "Pause Music";


                musicStatus.textContent =
                    "🎵 Playing Count on Me";


            }

            catch (error) {


                musicStatus.textContent =
                    "Tap the button again to play the music.";


            }


        }

        else {


            music.pause();


            musicButton.textContent =
                "Play Music";


            musicStatus.textContent =
                "Count on Me — Music Paused";


        }


    }
);