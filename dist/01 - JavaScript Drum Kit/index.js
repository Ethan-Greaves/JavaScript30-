"use strict";
const keys = document.querySelectorAll('.keys div');
function playSound(keyCode) {
    if (!keyCode)
        return;
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!key || !audio)
        return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
        key.classList.remove('playing');
    }, 150);
}
keys.forEach((key) => {
    key.addEventListener('click', () => playSound(key.dataset.key));
});
window.addEventListener('keydown', (event) => {
    playSound(String(event.keyCode));
});
//# sourceMappingURL=index.js.map