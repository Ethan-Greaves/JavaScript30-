const keys = document.querySelectorAll<HTMLDivElement>('.keys div');
const audioFiles = document.querySelectorAll<HTMLAudioElement>('audio');

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
