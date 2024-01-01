var currentWave = 0;

function GF_MakeBattle(Background, BgRes, ReturnFn) {

  GF_TeamScreen();

  clearPixi();

  //Set Stage
  GV_app.ticker.stop();

  var bg = new PIXI.Sprite(PIXI.Texture.from(Background));
  bg.scale.set(GV_app.screen.width / BgRes, GV_app.screen.width / BgRes);
  bg.anchor.set(0.5,0.5);
  bg.position.set(GV_app.screen.width/2, GV_app.screen.height/2);
  GV_app.stage.addChild(bg)

  //battle grid right
  var gridTex = PIXI.Texture.from(osmrBaseAssets.battle_grid)
  var gridMask = new PIXI.Rectangle(4, 0, 572, 252);
  var gridTexMsked = new PIXI.Texture(gridTex, gridMask);
  var gridSpriteRight = new PIXI.Sprite(gridTexMsked);
  gridSpriteRight.scale.set(ScreenScale/768, ScreenScale/768)
  gridSpriteRight.anchor.set(0,.1)
  gridSpriteRight.position.set(GV_app.screen.width/2, GV_app.screen.height/2)
  GV_app.stage.addChild(gridSpriteRight)

  //battle grid left
  var gridSpriteLeft = new PIXI.Sprite(gridTexMsked);

  gridSpriteLeft.scale.set(-1*ScreenScale/768, ScreenScale/768)
  gridSpriteLeft.position.set(GV_app.screen.width/2, GV_app.screen.height/2)
  gridSpriteLeft.anchor.set(0,.1)
  GV_app.stage.addChild(gridSpriteLeft)


  //draw Player Team
  var drawOrder = [2,1,0,5,4,3,8,7,6]
  var k = 0;
  for(var i = 0; i < 9; i++) {
    for(var k = 0; k < GV_OnFeildChara.length; k++) {
      if(GV_OnFeildChara[k].FieldPos == drawOrder[i]) {
        var c = Battles_MakeFieldSprites(GV_OnFeildChara[k], false)

        if(GV_OnFeildChara[k].FieldPos == 0) c.position.set(GV_app.screen.width/2+90*ScreenScale/768, GV_app.screen.height/2+55*ScreenScale/768);
        else if(GV_OnFeildChara[k].FieldPos == 1) c.position.set(GV_app.screen.width/2+240*ScreenScale/768, GV_app.screen.height/2+55*ScreenScale/768);
        else if(GV_OnFeildChara[k].FieldPos == 2) c.position.set(GV_app.screen.width/2+385*ScreenScale/768, GV_app.screen.height/2+55*ScreenScale/768);
        else if(GV_OnFeildChara[k].FieldPos == 3) c.position.set(GV_app.screen.width/2+135*ScreenScale/768, GV_app.screen.height/2+110*ScreenScale/768);
        else if(GV_OnFeildChara[k].FieldPos == 4) c.position.set(GV_app.screen.width/2+280*ScreenScale/768, GV_app.screen.height/2+110*ScreenScale/768);
        else if(GV_OnFeildChara[k].FieldPos == 5) c.position.set(GV_app.screen.width/2+425*ScreenScale/768, GV_app.screen.height/2+110*ScreenScale/768);
        else if(GV_OnFeildChara[k].FieldPos == 6) c.position.set(GV_app.screen.width/2+175*ScreenScale/768, GV_app.screen.height/2+165*ScreenScale/768);
        else if(GV_OnFeildChara[k].FieldPos == 7) c.position.set(GV_app.screen.width/2+325*ScreenScale/768, GV_app.screen.height/2+165*ScreenScale/768);
        else if(GV_OnFeildChara[k].FieldPos == 8) c.position.set(GV_app.screen.width/2+470*ScreenScale/768, GV_app.screen.height/2+165*ScreenScale/768);
        GV_app.stage.addChild(c);
      }
    }
  }

  //draw Enemy Team
  var enemyContainer = new PIXI.Container();;
  var drawOrder = [2,1,0,5,4,3,8,7,6]
  var k = 0;
  for(var i = 0; i < 9; i++) {
    for(var j = 0; j < GV_OnFieldEnemy.length; j++) {
      for(var k = 0; k < GV_OnFieldEnemy[j].length; k++) {
        if(GV_OnFieldEnemy[j][k].FieldPos == drawOrder[i]) {
          var c = Battles_MakeFieldSprites(GV_OnFieldEnemy[j][k], true)

          if(GV_OnFieldEnemy[j][k].FieldPos == 0) c.position.set(GV_app.screen.width/2-90*ScreenScale/768, GV_app.screen.height/2+55*ScreenScale/768);
          else if(GV_OnFieldEnemy[j][k].FieldPos == 1) c.position.set(GV_app.screen.width/2-240*ScreenScale/768, GV_app.screen.height/2+55*ScreenScale/768);
          else if(GV_OnFieldEnemy[j][k].FieldPos == 2) c.position.set(GV_app.screen.width/2-385*ScreenScale/768, GV_app.screen.height/2+55*ScreenScale/768);
          else if(GV_OnFieldEnemy[j][k].FieldPos == 3) c.position.set(GV_app.screen.width/2-135*ScreenScale/768, GV_app.screen.height/2+110*ScreenScale/768);
          else if(GV_OnFieldEnemy[j][k].FieldPos == 4) c.position.set(GV_app.screen.width/2-280*ScreenScale/768, GV_app.screen.height/2+110*ScreenScale/768);
          else if(GV_OnFieldEnemy[j][k].FieldPos == 5) c.position.set(GV_app.screen.width/2-425*ScreenScale/768, GV_app.screen.height/2+110*ScreenScale/768);
          else if(GV_OnFieldEnemy[j][k].FieldPos == 6) c.position.set(GV_app.screen.width/2-175*ScreenScale/768, GV_app.screen.height/2+165*ScreenScale/768);
          else if(GV_OnFieldEnemy[j][k].FieldPos == 7) c.position.set(GV_app.screen.width/2-325*ScreenScale/768, GV_app.screen.height/2+165*ScreenScale/768);
          else if(GV_OnFieldEnemy[j][k].FieldPos == 8) c.position.set(GV_app.screen.width/2-470*ScreenScale/768, GV_app.screen.height/2+165*ScreenScale/768);
          enemyContainer.addChild(c);
        }
      }
    }
  }

  //enemyContainer.scale.set(-1,1)
  //enemyContainer.position.set(GV_app.screen.width,0)
  GV_app.stage.addChild(enemyContainer)

  //draw UI
  //GF_TeamScreen() // remove this when implemented
  Battles_UpdateDiskShelf()




  GV_app.ticker.start();

}

var mocBattle = function() {
  GF_AddEnemy("BlackFeather_mini", 5);
  GF_AddEnemy("BlackFeather_mini", 4);
  GF_AddEnemy("BlackFeather_mini", 0);

  GF_MakeBattle("magica/image_native/bg/story/bg_adv_11024.jpg", 1024, null);
}
