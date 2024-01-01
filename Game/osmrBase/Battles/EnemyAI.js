function Battle_DoEnemyAI() {


  for(var i = 0; i < GV_OnFieldEnemy[GV_CurrentWave].length; i++) {
    console.log(GV_OnFieldEnemy[GV_CurrentWave][i].CurrentHp)
    if(GV_OnFieldEnemy[GV_CurrentWave][i].CurrentHp > 0) {
      console.log("yes")
      var targetchara;

      do {
        targetchara = GV_OnFeildChara[getRandomInt(GV_OnFeildChara.length)]
      } while (targetchara.CurrentHp <= 0);

      Battles_Act_DealDmg(GV_OnFieldEnemy[GV_CurrentWave][i], targetchara)

    }



  }

}
