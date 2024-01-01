
function OB_MapBttn(pHeight, pWidth, alert) {

  var btn = PIXI.Texture.from(osmrBaseAssets.bttn_pinkCir)
  var ico = PIXI.Texture.from(osmrBaseAssets.ico_map)

  //Button
  var BTNSIZE = 164;
  var bg = new PIXI.Sprite(btn);
  bg.anchor.set(0.5,0.5);
  var scale = (ScreenScale/6) / BTNSIZE;
  bg.scale.set(scale,scale);
  bg.position.set(GV_app.screen.width*pHeight - BTNSIZE*scale/2, BTNSIZE*scale/2 + ScreenScale*pWidth);


  //Map Icon
  var ICOSIZE = 512;
  var map = new PIXI.Sprite(ico);
  map.anchor.set(0.5,0.75);
  var scale = (ScreenScale/6) / ICOSIZE / 2.75;
  map.scale.set(scale,scale);
  map.position.set(bg.x, bg.y);

  //Text
  const txt = new PIXI.Text('Map', new PIXI.TextStyle({
      fill: "#ffffff",
      fontWeight: "bold"
  }));
  txt.anchor.set(0.5, -0.6);
  var scale = (ScreenScale/6) / 250;
  txt.scale.set(scale,scale);
  txt.position.set(bg.x, bg.y);


  bg.eventMode = 'static';
  bg.on('pointerdown', function(){
    //on click
    console.log("hit map");
    GF_MapScreen()
  });

  GV_app.stage.addChild(bg);
  GV_app.stage.addChild(map);
  GV_app.stage.addChild(txt);


}
