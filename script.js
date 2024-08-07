document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('music-popup');
    const mainContent = document.getElementById('main-content');
    const playMusicBtn = document.getElementById('play-music-btn');
    const myAudio = document.getElementById('myAudio');

    playMusicBtn.addEventListener('click', function() {
        myAudio.currentTime = 6; // Start from the 6th second
        myAudio.play();
        popup.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });
});

function toggleMusic() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
function openGoogleMaps() {
            window.open('https://www.google.com/maps', '_blank');
        }
        
        
        document.addEventListener("DOMContentLoaded", function() {
    // Existing code...

    // Countdown logic
    const countdownDate = new Date("Sep 11, 2024 00:00:00").getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "Հարսանիքը սկսվել է";
        }
    }, 1000);
});