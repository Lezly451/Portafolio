let app = document.getElementById('typewriter');   //es para conectar HTML 
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web, programación orientada a objetos, investigación y divulgación científica.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
