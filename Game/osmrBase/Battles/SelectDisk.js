
function Battles_unSelectDisk(diskName) {
  var disk = GV_app.stage.getChildByName(diskName)

  GV_SelectedDisks.splice(GV_SelectedDisks.indexOf(diskName), 1);


  console.log("Disk Unselected: ", disk.name);

  disk.alpha = 1;
  disk.removeAllListeners();
  disk.on('pointerup', function() {
    Battles_SelectDisk(diskName);
  });
}


function Battles_SelectDisk(diskName) {
  var disk = GV_app.stage.getChildByName(diskName)

  GV_SelectedDisks.push(diskName)

  console.log("Disk Selcted: ", disk.name);

  disk.alpha = 0.5;
  disk.removeAllListeners();
  disk.on('pointerup', function() {
    Battles_unSelectDisk(diskName);
  });


  if(GV_SelectedDisks.length >= 3) {
    //console.log("Todo: attack");
    Battle_CommencePlayerAttack();
  }


}
