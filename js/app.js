var data = {
  'A': { name: 'Clap', sound: 'sounds/clap.wav'},
  'S': { name: 'Hihat', sound: 'sounds/hihat.wav'},
  'D': { name: 'Kick', sound: 'sounds/kick.wav'},
  'F': { name: 'Openhat', sound: 'sounds/openhat.wav'},
  'G': { name: 'Boom', sound: 'sounds/boom.wav'},
  'H': { name: 'Ride', sound: 'sounds/ride.wav'},
  'J': { name: 'Snare', sound: 'sounds/snare.wav'},
  'K': { name: 'Tom', sound: 'sounds/tom.wav'},
  'L': { name: 'Tink', sound: 'sounds/tink.wav'},
};

var drumkit = document.getElementById('drumkit');

function construct() {
  for (var key in data) {
    var drumEl = document.createElement('div');
    drumEl.classList.add('drum');
    
    var h2 = document.createElement('h2');
    h2.textContent = key;
    
    var span = document.createElement('span');
    span.textContent = data[key].name;
    
    drumEl.appendChild(h2);
    drumEl.appendChild(span);
    drumkit.appendChild(drumEl);
    
    data[key].el = drumEl;
    drumEl.addEventListener('click', function(event) {
      var key = event.currentTarget.querySelector('h2').textContent;
      playDrum(key);
    });
  }
};

function playDrum(key) {
  var audio = new Audio();
  audio.src = data[key].sound;
  audio.play();
  
  data[key].el.style.webkitAnimation ='drum-animation 0.3s';
  data[key].el.style.animation = 'drum-animation 0.3s';
  
  data[key].el.addEventListener('webkitAnimationEnd', removeAnimation);
  data[key].el.addEventListener('webkitAnimationEnd', removeAnimation);
};

function removeAnimation(event) {
  event.currentTarget.style.webkitAnimation = 'none';
  event.currentTarget.style.animation = 'none';
}

function handleKeyEvents(event) {
  playDrum(event.key.toUpperCase());
}


construct();
window.addEventListener('keydown', handleKeyEvents);