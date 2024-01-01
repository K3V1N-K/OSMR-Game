//==============================================================================
// Main Characters
//==============================================================================
GV_CharaData.push({
  ID: "iroha_mini",

  Mini_Ico:"magica/image_native/mini/image/mini_100100_s.png",
  Mini_CirIco:"magica/image_native/mini/image/mini_100100_d.png",
  Mini_Sprite: null,
  BattleIDX: null,
  FieldPos: null,

  Playable: true,
  Unlocked: true,

  CurrentElement: "light",
  BaseElement: "light",

  CurrentHp:10000,
  MaxHp: 10000,
  BaseHp: 10000,

  BaseAtk: 2500,
  BaseDef: 1000,

  FieldPos: 0,


  Buffs: [],
  Disks: [
    "accele",
    "accele",
    "blast_h",
    "blast_h",
    "charge"
  ],

  ConnectFill: 0,
  MagiaFill: 0,

  onConnect: function(target) {

  }
})

GV_CharaData.push({
  ID: "yachiyo_mini",

  Mini_Ico:"magica/image_native/mini/image/mini_100201_s.png",
  Mini_CirIco:"magica/image_native/mini/image/mini_100201_d.png",
  Mini_Sprite: null,
  BattleIDX: null,
  FieldPos: null,

  Playable: true,
  Unlocked: true,

  CurrentElement: "water",
  BaseElement: "water",

  CurrentHp:10000,
  MaxHp: 10000,
  BaseHp: 10000,

  BaseAtk: 2500,
  BaseDef: 1000,

  FieldPos: 0,


  Buffs: [],
  Disks: [
    "accele",
    "blast_h",
    "blast_h",
    "blast_h",
    "charge"
  ],

  ConnectFill: 0,
  MagiaFill: 0,

  onConnect: function(target) {

  }
})

//==============================================================================
// Enemies
//==============================================================================
GV_CharaData.push({
  ID: "BlackFeather_mini",

  Mini_Ico:"magica/image_native/mini/image/mini_390000_s.png",
  Mini_Sprite: null,
  BattleIDX: null,
  FieldPos: null,

  Playable: false,
  Unlocked: false,

  CurrentElement: "dark",
  BaseElement: "dark",

  CurrentHp:10000,
  MaxHp: 10000,
  BaseHp: 10000,

  BaseAtk: 2500,
  BaseDef: 1000,

  Buffs: [],
  Disks: [
    "accele",
    "blast_h",
    "blast_h",
    "blast_h",
    "charge"
  ],

  ConnectFill: 0,
  MagiaFill: 0,

  onConnect: function(target) {

  }
})
