function Battles_MakeDisk(Chara, DiskIdx, dname) {

  var container = new PIXI.Container();
  container.name = dname;
  container.chara = Chara;
  container.diskIdx = DiskIdx;
  container.battleAct = "atk";
  container.Type = Chara.Disks[DiskIdx];
  //get Data from chara
  var Elem;
  var CFill;
  var Type;
  var charaSprite;

  Elem = Chara.CurrentElement;
  CFill = Chara.ConnectFill;
  Type = Chara.Disks[DiskIdx];

  console.log(Type)
  charaSprite = new PIXI.Sprite(PIXI.Texture.from(Chara.Mini_CirIco))




  //background
  var bgTex;
  if(Type == "blast_v" || Type == "blast_h") bgTex = PIXI.Texture.from(osmrBaseAssets.blast_disk);
  else if(Type == "charge") bgTex = PIXI.Texture.from(osmrBaseAssets.charge_disk);
  else if(Type == "accele") bgTex = PIXI.Texture.from(osmrBaseAssets.accel_disk);
  var bgSprite = new PIXI.Sprite(bgTex);
  bgSprite.anchor.set(0.5,0.5);
  container.addChild(bgSprite);

  //sprite
  charaSprite.anchor.set(0.5,0.5);
  container.addChild(charaSprite);



  //elements
  var eleIco;
  if(Elem == "void") eleIco = PIXI.Texture.from(osmrBaseAssets.void_element);
  else if(Elem == "dark") eleIco = PIXI.Texture.from(osmrBaseAssets.dark_element);
  else if(Elem == "fire") eleIco = PIXI.Texture.from(osmrBaseAssets.fire_element);
  else if(Elem == "water") eleIco = PIXI.Texture.from(osmrBaseAssets.water_element);
  else if(Elem == "grass") eleIco = PIXI.Texture.from(osmrBaseAssets.grass_element);
  else if(Elem == "light") eleIco = PIXI.Texture.from(osmrBaseAssets.light_element);
  else if(Elem == "all") eleIco = PIXI.Texture.from(osmrBaseAssets.all_element);
  var eleSprite = new PIXI.Sprite(eleIco);
  eleSprite.anchor.set(0.5,0.5);
  eleSprite.scale.set(0.18,0.18)
  eleSprite.position.set(-27,20);
  container.addChild(eleSprite);

  //Magia fill
  var uiSheet = PIXI.Texture.from(osmrBaseAssets.battle_ui);
  var cnctMask;
  if(CFill == 0) cnctMask = new PIXI.Rectangle(828, 856, 37, 58);
  else if(CFill == 1) cnctMask = new PIXI.Rectangle(876, 802, 37, 58);
  else if(CFill == 2) cnctMask = new PIXI.Rectangle(901, 420, 37, 58);
  else if(CFill == 3) cnctMask = new PIXI.Rectangle(909, 560, 37, 58);
  else(console.log("no mask"))
  var cnctTex = new PIXI.Texture(uiSheet, cnctMask);
  var cnctSprite = new PIXI.Sprite(cnctTex);
  cnctSprite.anchor.set(0.5,0.5);
  cnctSprite.position.set(-40,-25);
  container.addChild(cnctSprite);

  var textTex;
  if(Type == "blast_h") textTex = PIXI.Texture.from(osmrBaseAssets.blastH_text);
  else if(Type == "blast_v") textTex = PIXI.Texture.from(osmrBaseAssets.blastV_text);
  else if(Type == "accele") textTex = PIXI.Texture.from(osmrBaseAssets.accele_text);
  else if(Type == "charge") textTex = PIXI.Texture.from(osmrBaseAssets.charge_text);
  var textSprite = new PIXI.Sprite(textTex);
  textSprite.anchor.set(0.5,0.5);
  textSprite.position.set(0,44);
  container.addChild(textSprite);

  container.eventMode = 'static';
  container.on('pointerdown', function() {
  });

  container.on('pointerup', function() {
    Battles_SelectDisk(dname);
  });

  return container;

}





//OB_MakeDisk("iroha_mini", "blast", "light", null)
