var tg;
var sg
function Battles_Act_DealDmg(sourceChara, targetChara) {
  sg = sourceChara
  console.log(sourceChara.ID + " is dealing damage to " + targetChara.ID)

  targetChara.CurrentHp -= sourceChara.BaseAtk;
  targetChara.Mini_Sprite.getChildByName("hpdGauge").width = -100 + 100 * (targetChara.CurrentHp/targetChara.MaxHp);

  tg = targetChara;

  if(targetChara.CurrentHp <= 0) {
    targetChara.CurrentHp = 0;
    targetChara.Mini_Sprite.alpha = .5;
  }

}
