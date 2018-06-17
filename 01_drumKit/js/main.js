const keys = document.querySelectorAll('.key');

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; //rewinds
    audio.play();
    //console.log(key)
    key.classList.add('playing');
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound); 