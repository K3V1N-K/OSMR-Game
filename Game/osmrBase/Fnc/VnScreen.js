var TD_GF_VN_ModelList = [];

function GF_VN_InitScene(bgs, chars, startFn) {
  clearPixi();
  GV_app.ticker.stop(); // Pause render to avoid popins

  GV_SceneData = [];
  /*
  var arr = [
    { CharaID:"a", Height:110, Path:"magica/image_native/live2d/100100/model.json", Res:1024 },
    { CharaID:"b", Height:190, Path:"magica/image_native/live2d/100200/model.json", Res:1024 },
    { CharaID:"c", Height:150, Path:"magica/image_native/live2d/100300/model.json", Res:1024 },
    { CharaID:"d", Height:90, Path:"magica/image_native/live2d/100400/model.json", Res:1024 },
  ]

  var bgs = [
    { BgID:"a", Path:"magica/image_native/bg/story/bg_adv_11011.jpg", hRes:1024 },
    { BgID:"b", Path:"magica/image_native/bg/story/bg_adv_11012.jpg", hRes:1024 },
    { BgID:"c", Path:"magica/image_native/bg/story/bg_adv_11013.jpg", hRes:1024 }
  ]*/

  GV_SceneData.push(bgs);
  GV_SceneData.push(chars);

  //Load Backgrounds
  var bg;
  for(var i = 0; i < GV_SceneData[0].length; i++) {
    bg = new PIXI.Sprite(PIXI.Texture.from(GV_SceneData[0][i].Path));
    bg.name = GV_SceneData[0][i].BgID
    bg.scale.set(GV_app.screen.width / GV_SceneData[0][i].hRes, GV_app.screen.width / GV_SceneData[0][i].hRes);
    bg.anchor.set(0.5,0.5);
    bg.position.set(GV_app.screen.width/2, GV_app.screen.height/2);
    bg.alpha = 0;
    GV_app.stage.addChild(bg)
  }

  //load live2d
  loadL2D().then(function() {
    //load UI

    //DialogBox
    var dia = OB_DialogBox();
    dia.position.set(GV_app.screen.width/2, GV_app.screen.height*.95)
    dia.name = "dialogBoxObj"
    GV_SceneData.push(dia);
    GV_app.stage.addChild(dia);

    //Centered Text
    const extext = new PIXI.Text("", new PIXI.TextStyle({
      fontFamily: "gamefont",
      fontSize: 32,
      fill:"#ffffff"
    }));
    extext.anchor.set(0.5,0.5)
    extext.scale.set(ScreenScale/768, ScreenScale/768)
    extext.position.set(GV_app.screen.width/2, GV_app.screen.height/2);
    extext.name = "expText"
    GV_app.stage.addChild(extext)

    GV_app.ticker.start(); // Pause resume

    startFn();
  });
}

var a = 1;

var tal = 1;

async function loadL2D() {

  for(var i = 0; i < GV_SceneData[1].length; i++) {
    let model = await PIXI.live2d.Live2DModel.from(GV_SceneData[1][i].Path, { motionPreload: "ALL" });
    model.scale.set(ScreenScale/768 * GV_SceneData[1][i].Height / 156 / 3 * (1024/GV_SceneData[1][i].Res), ScreenScale/768 * GV_SceneData[1][i].Height / 156 / 3 * (1024/GV_SceneData[1][i].Res))
    model.anchor.set(.5,1);
    model.alpha = 0;
    model.name = GV_SceneData[1][i].CharaID;
    model.position.set(GV_app.screen.width/2, GV_app.screen.height*1.45)
    model.talking = 0;
    //mouth movments


    model.internalModel.motionManager.update = (function() {
      var cached_function = model.internalModel.motionManager.update;

      return function() {
          // your code
          var result = cached_function.apply(this, arguments); // use .apply() to call it

          //console.log(model.taking)

          model.internalModel.coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', mouthValue*model.talking);
          //console.log(model.name)

          // more of your code

          return result;
      };
    })();

    //model.internalModel.motionManager.update = function() {
      //model.defUp.call(model.internalModel.motionManager);
      //model.internalModel.coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', mouthValue);
    //}



    GV_app.stage.addChild(model)
    console.log("ok")

    TD_GF_VN_ModelList.push(model);

    GV_app.stage.getChildByName(GV_SceneData[1][i].CharaID).model = model
  }
}

//==============================================================================
//                          Shorthand Functions
//==============================================================================

function GF_VN_ShowChara(CharaID) {
  GV_app.stage.getChildByName(CharaID).alpha = 100;
}

function GF_VN_HideChara(CharaID) {
  GV_app.stage.getChildByName(CharaID).alpha = 0;
}

function GF_VN_SetBackground(BgID) {
  for(var i = 0; i < GV_SceneData[0].length; i++) {
    GV_app.stage.getChildByName(GV_SceneData[0][i].BgID).alpha = 0;
  }
  GV_app.stage.getChildByName(BgID).alpha = 100;
}

function GF_VN_MoveChara(CharaID, Location) {
  var actloc = 0;
  if(Location == "left") {
    actloc = GV_app.screen.width/2 - ScreenScale/768*350
  }
  if(Location == "right") {
    actloc = GV_app.screen.width/2 + ScreenScale/768*350
  }
  if(Location == "center") {
    actloc = GV_app.screen.width/2
  }

  GV_app.stage.getChildByName(CharaID).x = actloc;
}

function GF_VN_PlayDialog(CharaID, Text, DialogBoxType, NameLeft, NameCenter, NameRight, Vioce, VDuration) {
  GV_SceneData[2].removeAllListeners();

  //hide dialog boxes
  for (var i = 0; i < 9; i++) {
    GV_SceneData[2].children[i].alpha = 0;
  }

  //set text
  GV_SceneData[2].getChildByName(DialogBoxType).alpha = 100
  GV_SceneData[2].getChildByName("mainTxt").text = Text;
  GV_SceneData[2].getChildByName("nameTxtLeft").text = NameLeft;
  GV_SceneData[2].getChildByName("nameTxtCent").text = NameCenter;
  GV_SceneData[2].getChildByName("nameTxtRight").text = NameRight;

  if(CharaID == "none" ) {
    //TODO
  }
  else if(CharaID == "all" ) {
    //TODO
  }
  else {
    //code that does mouth movements
    GV_app.stage.getChildByName(CharaID).talking = 1;

    //end mount movments after VDuration sec
    setTimeout(function(){
      GV_app.stage.getChildByName(CharaID).talking = 0;
    }, 1000*VDuration);
  }



}

function GF_VN_PlayMotion(CharaID, motionNum) {

  GV_app.stage.getChildByName(CharaID).motion("motion", motionNum, 3)
}

function GF_VN_PlayExpression(CharaID, expNum) {
  GV_app.stage.getChildByName(CharaID).expression(expNum)
}

function GF_VN_ClearScreen() {


  //hide dialog boxes
  GV_SceneData[2].removeAllListeners();
  for (var i = 0; i < 9; i++) {
    GV_SceneData[2].children[i].alpha = 0;
  }

  //hide backgrounds
  for(var i = 0; i < GV_SceneData[0].length; i++) {
    GV_app.stage.getChildByName(GV_SceneData[0][i].BgID).alpha = 0;
  }

  //hide chara
  for(var i = 0; i < GV_SceneData[1].length; i++) {
    GV_app.stage.getChildByName(GV_SceneData[1][i].CharaID).alpha = 0;
  }

  GV_SceneData[2].getChildByName("nameTxtLeft").text = "";
  GV_SceneData[2].getChildByName("nameTxtCent").text = "";
  GV_SceneData[2].getChildByName("nameTxtRight").text = "";
  GV_SceneData[2].getChildByName("mainTxt").text = "";
}

function GF_VN_Exposition(expText, nextFn) {
  GF_VN_ClearScreen();

  GV_app.stage.getChildByName("expText").text = expText;
  GV_app.stage.getChildByName("loadingScreenText").text = "";


  setTimeout(function(){
    GV_app.stage.eventMode = 'static';
    GV_app.stage.on('pointerdown', function(){
      GV_app.stage.eventMode = 'passive';
      GV_app.stage.getChildByName("expText").text = "";
      GV_app.stage.getChildByName("loadingScreenText").text = "Loading . . . ";
      GV_app.stage.removeAllListeners();
      nextFn();
    });
  }, 500);

}

function GF_VN_QueueNext(nextFn) {
  GV_SceneData[2].removeAllListeners();
  GV_SceneData[2].on('pointerdown', nextFn);

}
