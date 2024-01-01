
function Battles_MakeFieldSprites(Chara, mirrored) {
  var container = new PIXI.Container();

  //Sprite
  var charaSprite = new PIXI.Sprite(PIXI.Texture.from(Chara.Mini_Ico));
  if(mirrored)charaSprite.scale.set(-1,1)
  charaSprite.anchor.set(0.5,1)
  container.addChild(charaSprite)

  var ifs = 0;

  //HP bar bg
  var baseSheet = PIXI.Texture.from(osmrBaseAssets.battle_ui);
  var hpMask = new PIXI.Rectangle(1, 943, 176, 61);
  var hpTex = new PIXI.Texture(baseSheet, hpMask); //Select only the desired speach bubble
  var hpSprite = new PIXI.Sprite(hpTex); //turn it into a sprite
  hpSprite.anchor.set(0.5,1);
  hpSprite.position.set(0+ifs,-250)
  container.addChild(hpSprite); //add to dialog

  //HP bar baar
  hbBarMask = new PIXI.Rectangle(345, 991, 100, 14);
  var hpBarTex = new PIXI.Texture(baseSheet, hbBarMask); //Select only the desired speach bubble
  hpBarSprite = new PIXI.Sprite(hpBarTex); //turn it into a sprite
  hpBarSprite.position.set(-26+ifs,-290)
  container.addChild(hpBarSprite); //add to dialog

  var hpDeplete = new PIXI.Graphics();
  hpDeplete.name = "hpdGauge"
  hpDeplete.beginFill(0x62505d); //#62505d
  hpDeplete.drawRect(0, 0, 100, 14);
  hpDeplete.width = 0; //set to 0 for 100% hp, set to -50 for 50% hp
  hpDeplete.position.set(-26+100+ifs,-290);
  container.addChild(hpDeplete);


  //Element in bar
  var eleIco;
  var Elem = Chara.CurrentElement;
  if(Elem == "void") eleIco = PIXI.Texture.from(osmrBaseAssets.void_element);
  else if(Elem == "dark") eleIco = PIXI.Texture.from(osmrBaseAssets.dark_element);
  else if(Elem == "fire") eleIco = PIXI.Texture.from(osmrBaseAssets.fire_element);
  else if(Elem == "water") eleIco = PIXI.Texture.from(osmrBaseAssets.water_element);
  else if(Elem == "grass") eleIco = PIXI.Texture.from(osmrBaseAssets.grass_element);
  else if(Elem == "light") eleIco = PIXI.Texture.from(osmrBaseAssets.light_element);
  else if(Elem == "all") eleIco = PIXI.Texture.from(osmrBaseAssets.all_element);
  var eleSprite = new PIXI.Sprite(eleIco);
  eleSprite.anchor.set(0.5,0.5);
  eleSprite.scale.set(0.31,0.31)
  eleSprite.position.set(-57+ifs,-281);
  container.addChild(eleSprite);


  container.position.set(700,555)
  container.scale.set(.52*ScreenScale/768,.52*ScreenScale/768)

  if(mirrored) {
    container.eventMode = 'static';
    container.on('pointerdown', function() {
      GV_SelectedAttackPos = Chara.FieldPos;
      alert("Selected Target Position: " + GV_SelectedAttackPos)
    });
  }


  Chara.Mini_Sprite = container;

  return container;

}

//Battles_MakeFieldSprites(GV_CharaData[0])
