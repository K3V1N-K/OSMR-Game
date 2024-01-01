function OB_DialogBox() {

  var container = new PIXI.Container();

  //==== Speach Bubble =========================================================
  const sheet = PIXI.Texture.from(osmrBaseAssets.dialog_boexes, {width: 2008, height: 1251});
  var mask_speachLeft_name = new PIXI.Rectangle(961, 208, 844, 198);
  var mask_speachLeft_anon = new PIXI.Rectangle(1, 211, 844, 198);
  var mask_speachRight_name = new PIXI.Rectangle(849, 410, 844, 198);
  var mask_speachRight_anon = new PIXI.Rectangle(1, 413, 844, 198);
  var mask_speachCent_name = new PIXI.Rectangle(849, 612, 844, 198);
  var mask_speachCent_anon = new PIXI.Rectangle(1, 615, 844, 198);
  var mask_exclaim = new PIXI.Rectangle(1, 1, 956, 206);
  var mask_speachOffScreen = new PIXI.Rectangle(1, 817, 762, 153);
  var mask_exposition = new PIXI.Rectangle(961, 1, 844, 203);

  var tex;

  tex = new PIXI.Texture(sheet, mask_speachLeft_name); //Select only the desired speach bubble
  var speachLeft_name = new PIXI.Sprite(tex); //turn it into a sprite
  speachLeft_name.name = "speachLeft_name"
  speachLeft_name.alpha = 0;
  speachLeft_name.anchor.set(0.5,1)
  container.addChild(speachLeft_name); //add to dialog

  tex = new PIXI.Texture(sheet, mask_speachLeft_anon);
  var speachLeft_anon = new PIXI.Sprite(tex);
  speachLeft_anon.name = "speachLeft_anon"
  speachLeft_anon.alpha = 0;
  speachLeft_anon.anchor.set(.50,1)
  container.addChild(speachLeft_anon);

  tex = new PIXI.Texture(sheet, mask_speachRight_name);
  var speachRight_name = new PIXI.Sprite(tex);
  speachRight_name.name = "speachRight_name"
  speachRight_name.alpha = 0;
  speachRight_name.anchor.set(.50,1)
  container.addChild(speachRight_name);

  tex = new PIXI.Texture(sheet, mask_speachRight_anon);
  var speachRight_anon = new PIXI.Sprite(tex);
  speachRight_anon.name = "speachRight_anon"
  speachRight_anon.alpha = 0;
  speachRight_anon.anchor.set(.50,1)
  container.addChild(speachRight_anon);

  tex = new PIXI.Texture(sheet, mask_speachCent_name);
  var speachCent_name = new PIXI.Sprite(tex);
  speachCent_name.name = "speachCent_name"
  speachCent_name.alpha = 0;
  speachCent_name.anchor.set(.50,1)
  container.addChild(speachCent_name);

  tex = new PIXI.Texture(sheet, mask_speachCent_anon);
  var speachCent_anon = new PIXI.Sprite(tex);
  speachCent_anon.name = "speachCent_anon"
  speachCent_anon.alpha = 0;
  speachCent_anon.anchor.set(.50,1)
  container.addChild(speachCent_anon);

  tex = new PIXI.Texture(sheet, mask_exclaim);
  var excaim = new PIXI.Sprite(tex);
  excaim.name = "shout"
  excaim.alpha = 0;
  excaim.anchor.set(.50,1)
  container.addChild(excaim);

  tex = new PIXI.Texture(sheet, mask_speachOffScreen);
  var speachOffScreen = new PIXI.Sprite(tex);
  speachOffScreen.name = "speachOffScreen"
  speachOffScreen.alpha = 0;
  speachOffScreen.anchor.set(.50,1)
  speachOffScreen.scale.set(1.15,1)
  speachOffScreen.position.set(-25,0)
  container.addChild(speachOffScreen);

  tex = new PIXI.Texture(sheet, mask_exposition);
  var exposition = new PIXI.Sprite(tex);
  exposition.name = "exposition"
  exposition.alpha = 0;
  exposition.anchor.set(.50,1)
  container.addChild(exposition);


  //==== Speach Text ===========================================================
  const mainTxt = new PIXI.Text("", new PIXI.TextStyle({
    fontFamily: "gamefont",
    fontSize: 30,
    fill:"#505050"
  }));
  mainTxt.anchor.set(0,.5)
  //mainTxt.scale.set(ScreenScale/768, ScreenScale/768)
  mainTxt.position.set(-375, -110);
  mainTxt.name = "mainTxt"
  container.addChild(mainTxt);


  const nameTxtLeft = new PIXI.Text("", new PIXI.TextStyle({
    fontFamily: "gamefont",
    fontSize: 24,
    fill:"#ffffff"
  }));
  nameTxtLeft.anchor.set(0,.5)
  //nameTxtLeft.scale.set(ScreenScale/768, ScreenScale/768)
  nameTxtLeft.position.set(-322, -156);
  nameTxtLeft.name = "nameTxtLeft"
  container.addChild(nameTxtLeft);


  const nameTxtCent = new PIXI.Text("", new PIXI.TextStyle({
    fontFamily: "gamefont",
    fontSize: 24,
    fill:"#ffffff"
  }));
  nameTxtCent.anchor.set(0,.5)
  //nameTxtCent.scale.set(ScreenScale/768, ScreenScale/768)
  nameTxtCent.position.set(25, -156);
  nameTxtCent.name = "nameTxtCent"
  container.addChild(nameTxtCent);

  const nameTxtRight = new PIXI.Text("", new PIXI.TextStyle({
    fontFamily: "gamefont",
    fontSize: 24,
    fill:"#ffffff"
  }));
  nameTxtRight.anchor.set(1,.5)
  //nameTxtRight.scale.set(ScreenScale/768, ScreenScale/768)
  nameTxtRight.position.set(322, -156);
  nameTxtRight.name = "nameTxtRight"
  container.addChild(nameTxtRight);


  container.scale.set(ScreenScale/768*1.06, ScreenScale/768*1.06)
  container.eventMode = 'static';
  return container;
}
