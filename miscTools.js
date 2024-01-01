function loadScript(path) {

  let script = document.createElement('script');
  script.setAttribute("src", path);
  document.body.appendChild(script);

}

function clearPixi() {

  for (var i = GV_app.stage.children.length - 1; i >= 0; i--) {	GV_app.stage.removeChild(GV_app.stage.children[i]);};

  //show loading text
  const loadingtext = new PIXI.Text('Loading . . .', new PIXI.TextStyle({
      fontFamily: "gamefont",
      fontSize: 32,
      fill: "#ffffff",
      fontWeight: "bold"
  }));
  loadingtext.name = "loadingScreenText"
  loadingtext.anchor.set(0.5, 0.5);
  loadingtext.position.set(GV_app.screen.width/2 ,GV_app.screen.height/2 );
  GV_app.stage.addChild(loadingtext);

}

///between 0 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
