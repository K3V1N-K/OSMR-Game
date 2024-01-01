
function startScreen() {
  var base1 = PIXI.Texture.from(osmrBaseAssets.bg_mysterious)

  for (var i = GV_app.stage.children.length - 1; i >= 0; i--) {	GV_app.stage.removeChild(GV_app.stage.children[i]);};

  //show text
  const txt = new PIXI.Text('Tap to start', new PIXI.TextStyle({
      fontFamily: "gamefont",
      fontSize: 32,
      fill: "#ffffff",
      fontWeight: "bold"
  }));
  txt.anchor.set(0.5, 0.5);
  txt.position.set(GV_app.screen.width/2 ,GV_app.screen.height/2 );

  //show bg
  var bg = new PIXI.Sprite(base1);
  var bgScaleWidth = GV_app.screen.width / 1024;
  bg.anchor.set(0,0.5);
  bg.scale.set(bgScaleWidth, bgScaleWidth);
  bg.position.set(0, GV_app.screen.height/2)
  bg.eventMode = 'static';
  bg.on('pointerdown', function(){
    //on click
    GF_TitleScreen();
    console.log("hit home");
  });

  GV_app.stage.addChild(bg);
  GV_app.stage.addChild(txt);

  console.log("ho")
}
