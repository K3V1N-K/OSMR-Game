//Game Function: Title Screen
//Purpose: Shows the title Screen
//Dependencies: None


var model;

function GF_TitleScreen() {
  //Clear Pixi
  clearPixi();
  GV_app.ticker.stop(); // Pause render to avoid popins
  //Clear Stacks
  GV_SceneData = [];

  //Set Background
  var base1 = PIXI.Texture.from(osmrBaseAssets.bg_introCityscape)
  var base2 = PIXI.Texture.from(osmrBaseAssets.bg_introBackground)

  //--- Background ---
  var bg = new PIXI.Sprite(base2);
  var bgScaleWidth = GV_app.screen.width / 500;
  bg.anchor.set(0,0.5);
  bg.scale.set(bgScaleWidth, GV_app.screen.height / 500);
  bg.position.set(-1400*bgScaleWidth  , GV_app.screen.height/2 );

  //--- Skyline ---
  var skyline = new PIXI.Sprite(base1);
  var scale =  GV_app.screen.width / 1083 ; //Scale factor so that the buildings are screen width
  skyline.scale.set(scale,scale);
  skyline.position.set(0  , (-1204*scale + GV_app.screen.height) ); //shift image down to base of building and move down screen height so base of building is at bottom

  GV_app.stage.addChild(bg);
  GV_app.stage.addChild(skyline);


  //Live2d chara
  var modelSize = 1024;
  model = PIXI.live2d.Live2DModel.fromSync("magica/image_native/live2d/100100/model.json");
  model.name = "iro"
  model.once('load', () => {
    model.scale.set(ScreenScale*.5/modelSize, ScreenScale*.5/modelSize)
    model.anchor.set(.5,0);
    model.position.set(GV_app.screen.width/2, 0)
    GV_app.stage.addChild(model)

    model.motion("motion",4);
  });



  //Add buttons
  OB_MapBttn(0.99, 0.02, false);
  OB_MsgBttn(0.99, 0.20, false);
  OB_ItemBttn(0.99, 0.38, false);
  OB_TeamBttn(0.99, 0.56, false);
  OB_NoteBttn(0.99, 0.74, false);

  //GV_app.ticker.start(); // Pause resume

    GV_app.ticker.start(); // Pause resume



}
