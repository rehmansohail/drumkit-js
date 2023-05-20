window.addEventListener('keydown',function(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio)return; //rewinds to the start
    audio.currentTime=0; // allows multiple smashing of buttons
    audio.play();
    console.log(key);
    key.classList.add('playing');

});

function removeTransition(e){
    if(e.propertyName !=='transform')return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));