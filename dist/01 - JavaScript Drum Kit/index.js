"use strict";
const keys = document.querySelectorAll('.keys div');
const audioFiles = document.querySelectorAll('audio');
keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        audioFiles.forEach((file) => {
            if (file.dataset.key === key.dataset.key) {
                key.classList.add('playing');
                file.currentTime = 0;
                file.play();
                setTimeout(() => {
                    key.classList.remove('playing');
                }, 150);
            }
        });
    });
});
//# sourceMappingURL=index.js.map