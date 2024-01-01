function Battle_EnemyExistAt(Wave, Position) {
  for(var a = 0; a < GV_OnFieldEnemy[Wave].length; a++) {
    if(GV_OnFieldEnemy[GV_CurrentWave][a].FieldPos == Position) return (GV_OnFieldEnemy[GV_CurrentWave][a].CurrentHp > 0);
  }

  return false;
}

function Battle_GetEnemyAt(Wave, Position) {
  var enemy;

  for(var a = 0; a < GV_OnFieldEnemy[Wave].length; a++) {
    if(GV_OnFieldEnemy[GV_CurrentWave][a].FieldPos == Position) enemy = GV_OnFieldEnemy[GV_CurrentWave][a];
  }

  return enemy;
}


function Battle_CommencePlayerAttack() {

  console.log("player attacking")

  for(var i = 0; i < 3; i++) {
    var disk = GV_app.stage.getChildByName(GV_SelectedDisks[i])


    if(disk.battleAct == "con-") {
      //TODO
    }
    else {
      //Check if there is an enemy at desired attack position
      //If not change pos to one with an enemy
      if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos) == false) {
        if(Battle_EnemyExistAt(GV_CurrentWave, 0)) GV_SelectedAttackPos = 0;
        else if(Battle_EnemyExistAt(GV_CurrentWave, 3)) GV_SelectedAttackPos = 3;
        else if(Battle_EnemyExistAt(GV_CurrentWave, 6)) GV_SelectedAttackPos = 6;
        else if(Battle_EnemyExistAt(GV_CurrentWave, 1)) GV_SelectedAttackPos = 1;
        else if(Battle_EnemyExistAt(GV_CurrentWave, 4)) GV_SelectedAttackPos = 4;
        else if(Battle_EnemyExistAt(GV_CurrentWave, 7)) GV_SelectedAttackPos = 7;
        else if(Battle_EnemyExistAt(GV_CurrentWave, 2)) GV_SelectedAttackPos = 2;
        else if(Battle_EnemyExistAt(GV_CurrentWave, 5)) GV_SelectedAttackPos = 5;
        else if(Battle_EnemyExistAt(GV_CurrentWave, 8)) GV_SelectedAttackPos = 8;

      }
      var enemy = Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos);

      //Add Connect
      if(disk.chara.ConnectFill < 3) {
        disk.chara.ConnectFill++;
      }

      if(disk.Type == "blast_v") {
        if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos+3)) Battles_Act_DealDmg(disk.chara, Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos+3))
        if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos+6)) Battles_Act_DealDmg(disk.chara, Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos+6))
        if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos-3)) Battles_Act_DealDmg(disk.chara, Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos-3))
        if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos-6)) Battles_Act_DealDmg(disk.chara, Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos-6))
      }
      else if(disk.Type == "blast_h") {
        if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos+1)) Battles_Act_DealDmg(disk.chara, Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos+1))
        if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos+2)) Battles_Act_DealDmg(disk.chara, Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos+2))
        if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos-1)) Battles_Act_DealDmg(disk.chara, Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos-1))
        if(Battle_EnemyExistAt(GV_CurrentWave, GV_SelectedAttackPos-2)) Battles_Act_DealDmg(disk.chara, Battle_GetEnemyAt(GV_CurrentWave, GV_SelectedAttackPos-2))
      }

      Battles_Act_DealDmg(disk.chara, enemy)
    }

  }

  //Check Win condition
  var win = true;
  for(var a = 0; a < GV_OnFieldEnemy.length; a++) {
    for(var b = 0; b < GV_OnFieldEnemy[a].length; b++) {
      if(GV_OnFieldEnemy[a][b].CurrentHp > 0) win = false;
    }
  }

  if(win == true) {
    alert("win")
  }
  else {
    //DO AI
    console.log("doing AI turn");
    Battle_DoEnemyAI();

    console.log("Redrawing disk");
    GV_SelectedDisks = [];
    Battles_UpdateDiskShelf();
  }


}
