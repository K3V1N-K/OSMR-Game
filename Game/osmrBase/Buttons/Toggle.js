
function OB_Toggle(pHeight, pWidth, name, text, lenScale) {
  if(GlobExist(name) == false) setGlob(name, true);

  var SIZE = 0.045; //percent of screen height, size of the drawn Button, bigger = bigger button
  var SETLEN = lenScale;

  var bleft;
  var bcen;
  var bright;
  var indicator;
  var txt;
  if(getGlob(name) == true) {
    bleft = PIXI.Texture.from(osmrBaseAssets.bttn_toggleOn_l)
    bcen = PIXI.Texture.from(osmrBaseAssets.bttn_toggleOn_c)
    bright = PIXI.Texture.from(osmrBaseAssets.bttn_toggleOn_r)
    indicator = PIXI.Texture.from(osmrBaseAssets.ico_toggleOn)
    txt = new PIXI.Text(text, new PIXI.TextStyle({
        //fill: "#80461b",
        fill: "#f12452",
        fontWeight: "bold"
    }));
  }
  else {
    bleft = PIXI.Texture.from(osmrBaseAssets.bttn_toggleOff_l)
    bcen = PIXI.Texture.from(osmrBaseAssets.bttn_toggleOff_c)
    bright = PIXI.Texture.from(osmrBaseAssets.bttn_toggleOff_r)
    indicator = PIXI.Texture.from(osmrBaseAssets.ico_toggleOff)
    txt = new PIXI.Text(text, new PIXI.TextStyle({
        fill: "#b88544",
        fontWeight: "bold"
    }));
  }

  //Button
  var IMGHEIGHGT = 34;
  var IMGWIDTH = 10;
  var CENTWIDTH = 102;

  var bl = new PIXI.Sprite(bleft);
  var scale = (ScreenScale * SIZE ) / IMGHEIGHGT;
  bl.scale.set(scale,scale);
  bl.position.set(GV_app.screen.width*pHeight - IMGHEIGHGT*scale/2, IMGHEIGHGT*scale/2 + ScreenScale*pWidth);

  var bc = new PIXI.Sprite(bcen);
  bc.scale.set(scale*SETLEN,scale);
  bc.position.set(GV_app.screen.width*pHeight - IMGHEIGHGT*scale/2 + IMGWIDTH*scale, IMGHEIGHGT*scale/2 + ScreenScale*pWidth);

  var br = new PIXI.Sprite(bright);
  br.scale.set(scale,scale);
  br.position.set(GV_app.screen.width*pHeight - IMGHEIGHGT*scale/2 + IMGWIDTH*scale + CENTWIDTH*SETLEN*scale, IMGHEIGHGT*scale/2 + ScreenScale*pWidth);

  var ind = new PIXI.Sprite(indicator);
  ind.anchor.set(1, 0.5);
  ind.scale.set(scale,scale);
  ind.position.set(br.x+IMGWIDTH*scale, br.y);


  //Text
  txt.anchor.set(0.5, 0.0);
  var tscale = scale/1.25;
  txt.scale.set(tscale,tscale);
  txt.position.set(bc.x + CENTWIDTH*SETLEN*scale/2, bc.y);


  bc.eventMode = 'static';
  bc.on('pointerdown', function(e){
    setGlob(name, !getGlob(name));
    GF_MapScreen();
  });

  GV_app.stage.addChild(bl);
  GV_app.stage.addChild(bc);
  GV_app.stage.addChild(br);
  GV_app.stage.addChild(txt);
  GV_app.stage.addChild(ind);


}
