//Game Function: Title Screen
//Purpose: Shows the title Screen
//Dependencies: None

var cursorPostTempY = 0;
function GF_MapScreen() {
  //Clear Pixi
  clearPixi();
  GV_app.ticker.stop(); // Pause render to avoid popins

  //Clear Stacks
  GV_FlagStack = [];


  //====== Map Section ========
  var mapContainer = new PIXI.Container();
  var map = PIXI.Texture.from("game/osmrBase/Maps/kamihama.png");

  var bg = new PIXI.Sprite(map);
  var bgScaleWidth = GV_app.screen.width / MAPHEIGHT;
  bg.scale.set(bgScaleWidth, bgScaleWidth);
  bg.position.set(0,0);
  bg.eventMode = "static";
  bg.cursor = 'pointer';

  mapContainer.addChild(bg);

  function repositionToCursor(e) {
    var yDelta = e.y - cursorPostTempY;

    if(mapContainer.position.y + yDelta < 0 && mapContainer.position.y+MAPHEIGHT + yDelta > GV_app.screen.height) mapContainer.position.y +=yDelta;


    cursorPostTempY = e.y;
  }

  bg.on('pointerdown', function (e) {
    cursorPostTempY = e.y
    bg.on('pointermove', repositionToCursor);
  });

  bg.on('pointerup', function () {

    bg.off('pointermove', repositionToCursor);

  });

  //markers
  mapContainer.addChild( OB_MapMarker(0.3*MAPHEIGHT*bgScaleWidth,0.5*MAPWIDTH*bgScaleWidth, "Demo Pt.1", "gold", "magica/image_native/card/image/card_10012_f.png", "magica/image_native/bg/story/bg_adv_13031.jpg", function() {ScenerioScript[0]()} ));

  GV_app.stage.addChild(mapContainer);
  console.log(mapContainer.width)

  //====== Marker Section ========
  for(var i = 0; i < GV_MapMakers.length; i++) {
    if(GV_MapMakers[i].sMapName == GV_currentMap.name) {

    }
  }



  //====== UI Section ========
  OB_HomeBttn(0.99, 0.02, false);

  var bttnSpacing = 166 * (ScreenScale * 0.05 ) / 34 /GV_app.screen.width;
  var leftTab = 1-bttnSpacing*4.7;
  OB_Toggle(leftTab, 0.01, "Map_Borders_Tog", "Borders", 1.5);
  OB_Toggle(leftTab+bttnSpacing, 0.01, "Map_POI_Tog", "POI", 1.5);
  OB_Toggle(leftTab+bttnSpacing*2, 0.01, "Map_Witch_Tog", "Witches", 1.5);
  OB_Toggle(leftTab+bttnSpacing*3, 0.01, "Map_Quest_Tog", "Quests", 1.5);

  GV_app.ticker.start(); // Pause resume
}
