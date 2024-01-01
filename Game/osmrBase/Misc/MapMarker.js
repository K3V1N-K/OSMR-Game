function OB_MapMarker(x, y, text, frameType, image, background, onClick) {
  var container = new PIXI.Container();
  //container.anchor.set(0.5,1);

  // Frame selection
  var frameImg;
  if(frameType == "silver") frameImg = PIXI.Texture.from(osmrBaseAssets.markerFrame_silver);
  else if(frameType == "gold") frameImg = PIXI.Texture.from(osmrBaseAssets.markerFrame_gold);
  else if(frameType == "purple") frameImg = PIXI.Texture.from(osmrBaseAssets.markerFrame_purple);
  var frame = new PIXI.Sprite(frameImg);
  container.addChild(frame)

  //mask
  let circlem = new PIXI.Graphics();
  circlem.lineStyle(0);
  circlem.beginFill(0x66ffcc, 1);
  circlem.drawCircle(256, 160, 128);
  circlem.endFill();
  container.addChild(circlem);

  //Background of image inside frame
  var ICOHEIGHT = 755;
  //var bg = PIXI.Texture.from("magica/resource/download/asset/master/resource/image_native/card/frame/bg_water.png");
  //var bg = PIXI.Texture.from("magica/resource/download/asset/master/resource/image_native/bg/story/bg_adv_13031.jpg");
  var bg = PIXI.Texture.from(background);
  var icobg = new PIXI.Sprite(bg);
  icobg.anchor.set(0.5,0.5);
  icobg.position.set(258,165)
  icobg.scale.set(124*2/ICOHEIGHT,124*2/ICOHEIGHT)
  container.addChild(icobg)
  const blurFilter1 = new PIXI.BlurFilter (0.75,4,PIXI.Filter.defaultResolution,5);
  //console.log(blurFilter1)
  icobg.filters = [blurFilter1]

  icobg.mask = circlem



  //Image inside frame
  var ICOHEIGHT = 200;
  //var icoTex = PIXI.Texture.from("magica/resource/download/asset/master/resource/image_native/card/image/card_10012_f.png");
  var icoTex = PIXI.Texture.from(image)
  var ico = new PIXI.Sprite(icoTex);
  ico.anchor.set(0.5,0.5);
  ico.position.set(258,165)
  ico.scale.set(124*2/ICOHEIGHT,124*2/ICOHEIGHT)
  container.addChild(ico)
  ico.mask = circlem



  //Text
  txt = new PIXI.Text(text, new PIXI.TextStyle({
      dropShadow: true,
      fill: "#b88544",
      stroke: "#ffffff",
      dropShadowColor: "#ffffff",
      fontWeight: "bold",
      dropShadowDistance: 0,
      dropShadowBlur: 5,
      stroke: "#ffffff",
      strokeThickness: 5

  }));
  txt.anchor.set(0.5, 0.0);
  var tscale = (ScreenScale*0.0025)
  txt.scale.set(tscale,tscale);
  txt.position.set(258,300);
  container.addChild(txt)

  //-=======
  container.scale.set((ScreenScale/4) / 512,(ScreenScale/4) / 512)
  container.pivot.set(256,512)
  container.position.set(x, y)

  container.eventMode = 'static';
  container.on('pointerdown', onClick);

  return container;
}
