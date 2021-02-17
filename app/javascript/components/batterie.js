const loadBatterieSound = () => {
  window.addEventListener('keydown', function(event) {
    console.log('yes');
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
  });

export { loadBatterieSound }




