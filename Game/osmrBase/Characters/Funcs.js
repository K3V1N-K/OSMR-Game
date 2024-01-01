function CF_healStaic(targetChar, ammount){
  targetChar.CurrentHp += ammount;
  if(targetChar.CurrentHp > targetChar.MaxHp) targetChar.CurrentHp = targetChar.MaxHp;
}
