function hideOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    let audio = document.getElementById('audio');
    audio.play();
}
