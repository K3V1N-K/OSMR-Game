var GV_MapMakers = [];
var GV_SceneData = [];
var FlagName = [];
var FlagData = [];

var ScenerioTrigger = [];
var ScenerioScript = [];


var CharaMetadata = [];

var GV_activeTeam = [];
var GV_OnFeildChara = [];
var GV_OnFieldEnemy = [[]];
var GV_CurrentWave = 0;
var GV_CharaData = [];
var GV_SelectedDisks = [];
var GV_SelectedAttackPos = 0;

//For configs such as toggles
var GlobKey = [];
var GlobValue = [];
var GV_currentMap = {name:"kamihama city", tex:"game/osmrBase/Maps/kamihama.png"};
var GV_lang = "en";

//For Loading
//increment counter for every loading action
//increment target for eveny finished Loading
//All is laoded when counter == target
var loadCounter = 0;
var loadTarget  = 0;

//TODO: make theese part of glob table
var ScreenScale = GV_app.screen.height; //Given in pixels, describes virtual vertical (up-down) resolution
var MAPHEIGHT = 1024;
var MAPWIDTH = 768;



//==============================================================================
function addMarker(ID, MapName, CoordX, CoordY, FrameType, Icon ,Text, OnClickFn) {
  var temp = {sID:ID, sMapName:MapName, sCoordX:CoordX, sCoordY:CoordY, sframeType:FrameType, sicon:Icon, stext:Text, sonClickFn:OnClickFn}
  GV_MapMakers.push(temp)
}
addMarker("demo_01", "kamihama city", 0.5, 0.5, "gold", "ddd" , "Demo", function(){console.log("im clicked")})

function removeMaker(ID) {

  for(var i = 0; i < GV_MapMakers.length; i++) {
    if(GV_MapMakers[i].sID == ID) GV_MapMakers.splice(i, 1);
  }

}


//==============================================================================
function checkScenerios() {

  for(var i = 0; i < GV_Scenarios.length; i++) {
    GV_Scenarios[i]();
  }

}
//==============================================================================
function setGlob(key, value) {

  for(var i = 0; i < GlobKey.length; i++) {
    if(GlobKey[i] == key) {
      GlobValue[i] = value;
      return 1;
    }
  }

  GlobKey.push(key);
  GlobValue.push(value);

  return 0;

}

function getGlob(key) {

  for(var i = 0; i < GlobKey.length; i++) {
    if(GlobKey[i] == key) {
      return GlobValue[i];
    }
  }

  alert("Key value not found: " + key);
}

function GlobExist(key) {

  for(var i = 0; i < GlobKey.length; i++) {
    if(GlobKey[i] == key) {
      return true;
    }
  }

  return false;
}
