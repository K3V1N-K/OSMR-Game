

function GF_AddEnemy(miniID, fieldLoc) {

  var chara;
  for(var i = 0; i < GV_CharaData.length; i++) {
    if(GV_CharaData[i].ID == miniID) {
      chara = {...GV_CharaData[i]}
    }
  }

  chara.FieldPos = fieldLoc;
  chara.BattleIdx = GV_OnFieldEnemy[GV_CurrentWave].length;

  GV_CurrentWave = 0;
  GV_OnFieldEnemy[GV_CurrentWave].push(chara);

}
