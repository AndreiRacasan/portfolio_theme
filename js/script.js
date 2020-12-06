let type = document.getElementById('typewriter');

let typewriter = new Typewriter(type, {
  autostart: true,
  delay: 100,
});

typewriter
  .pauseFor(500)
  .typeString('Your text here...')
  .start()

document.getElementById('current-year').innerHTML = new Date().getFullYear();
