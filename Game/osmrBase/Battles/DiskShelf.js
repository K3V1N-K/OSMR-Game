


function Battles_UpdateDiskShelf() {

  //Make disks

  //add all avaliable disks to a list using i,j pairs (character index, disk index)
  var diskCatalog = [];
  for(var i = 0; i < GV_OnFeildChara.length; i++) {
    for(var j = 0; j < GV_OnFeildChara[i].Disks.length; j++) {
      diskCatalog.push([i,j]);
    }
  }

  //shuffle the list
  shuffle(diskCatalog);

  disk1 = Battles_MakeDisk(GV_OnFeildChara[diskCatalog[0][0]], diskCatalog[0][1], "disk1")
  disk2 = Battles_MakeDisk(GV_OnFeildChara[diskCatalog[1][0]], diskCatalog[1][1], "disk2")
  disk3 = Battles_MakeDisk(GV_OnFeildChara[diskCatalog[2][0]], diskCatalog[2][1], "disk3")
  disk4 = Battles_MakeDisk(GV_OnFeildChara[diskCatalog[3][0]], diskCatalog[3][1], "disk4")
  disk5 = Battles_MakeDisk(GV_OnFeildChara[diskCatalog[4][0]], diskCatalog[4][1], "disk5")


  //draw disks
  if(GV_app.stage.getChildByName("disk1") != null) {
      GV_app.stage.removeChild(GV_app.stage.getChildByName("disk1"))
      GV_app.stage.removeChild(GV_app.stage.getChildByName("disk2"))
      GV_app.stage.removeChild(GV_app.stage.getChildByName("disk3"))
      GV_app.stage.removeChild(GV_app.stage.getChildByName("disk4"))
      GV_app.stage.removeChild(GV_app.stage.getChildByName("disk5"))
  }

  disk3.position.set(GV_app.screen.width/2, GV_app.screen.height - 90*ScreenScale/768);
  disk2.position.set(GV_app.screen.width/2 - 130*ScreenScale/768, GV_app.screen.height - 90*ScreenScale/768);
  disk1.position.set(GV_app.screen.width/2 - 260*ScreenScale/768, GV_app.screen.height - 90*ScreenScale/768);
  disk4.position.set(GV_app.screen.width/2 + 130*ScreenScale/768, GV_app.screen.height - 90*ScreenScale/768);
  disk5.position.set(GV_app.screen.width/2 + 260*ScreenScale/768, GV_app.screen.height - 90*ScreenScale/768);

  disk1.scale.set(ScreenScale/768, ScreenScale/768);
  disk2.scale.set(ScreenScale/768, ScreenScale/768);
  disk3.scale.set(ScreenScale/768, ScreenScale/768);
  disk4.scale.set(ScreenScale/768, ScreenScale/768);
  disk5.scale.set(ScreenScale/768, ScreenScale/768);

  GV_app.stage.addChild(disk1);
  GV_app.stage.addChild(disk2);
  GV_app.stage.addChild(disk3);
  GV_app.stage.addChild(disk4);
  GV_app.stage.addChild(disk5);


}
