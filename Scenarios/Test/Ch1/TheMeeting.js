ScenerioTrigger.push(function() {

  if(1==1) {
    return true;
  }

});
ScenerioScript.push( function() {

  var expo_01 = function() {
    GF_VN_Exposition("Somewhere in Kamihama...", dialog_01);
  }

  var dialog_01 = function() {
    GF_VN_SetBackground("park");

    GF_VN_ShowChara("iroha1");
    GF_VN_MoveChara("iroha1", "center");
    GF_VN_PlayMotion("iroha1", 5);
    GF_VN_PlayExpression("iroha1", 2);
    GF_VN_PlayDialog("iroha1", "Oh no, it seems I have wondered into Kamihama", "speachCent_name", "", "iroiro", "", "", 0);

    GF_VN_QueueNext(dialog_02);
  }

  var dialog_02 = function() {
    GF_VN_PlayDialog("none", "Hey you!", "speachOffScreen", "", "", "", "", 0);
    GF_VN_QueueNext(dialog_03);
  }

  var dialog_03 = function() {
    GF_VN_PlayMotion("iroha1", 6);
    GF_VN_PlayExpression("iroha1", 5);
    GF_VN_PlayDialog("iroha1", "Eeep!", "speachCent_name", "", "iroiro", "", "", 1);

    GF_VN_QueueNext(dialog_04);
  }

  var dialog_04 = function() {
    GF_VN_MoveChara("iroha1", "right");

    GF_VN_ShowChara("yachiyo");
    GF_VN_MoveChara("yachiyo", "left");
    GF_VN_PlayMotion("yachiyo", 3);
    GF_VN_PlayDialog("yachiyo", "Where do you think you're going?", "speachLeft_name", "Yachiyo", "", "", "", 2);

    GF_VN_QueueNext(dialog_05);

  }

  var dialog_05 = function() {
    GF_VN_PlayDialog("yachiyo", "Outside magical gurl forbidended.", "speachLeft_name", "Yachiyo", "", "", "", 2);

    GF_VN_QueueNext(dialog_06);
  }

  var dialog_06 = function() {

    GF_VN_PlayDialog("yachiyo", "I'm taking you into custody!", "speachLeft_name", "Yachiyo", "", "", "", 2);

    GF_VN_QueueNext(dialog_07);
  }

  var dialog_07 = function() {
    GF_VN_Exposition("Later that day...", dialog_08)
  }

  var dialog_08 = function() {
    GF_VN_SetBackground("house");

    GF_VN_ShowChara("yachiyo");
    GF_VN_ShowChara("iroha1");

    GF_VN_PlayExpression("yachiyo", 0);
    GF_VN_PlayExpression("iroha1", 5);

    GF_VN_PlayMotion("yachiyo", 1);
    GF_VN_PlayMotion("iroha1", 2);

    GF_VN_PlayDialog("none", "...", "exposition", "", "", "", "", 0);

    GF_VN_QueueNext(dialog_09);
  }

  var dialog_09 = function() {

    GF_VN_PlayDialog("iroha1", "Um... Yachiyo... Why are we at your house?", "speachRight_name", "", "", "Iroro", "", 2);
    GF_VN_QueueNext(dialog_10);
  }

  var dialog_10 = function() {

    GF_VN_PlayDialog("yachiyo", "Oh no! Its the wings of majesus!", "speachLeft_name", "Yachiyo", "", "", "", 2);
    GF_VN_QueueNext(dialog_11);
  }

  var dialog_11 = function() {

    GF_VN_HideChara("yachiyo");
    GF_VN_HideChara("iroha1");

    GF_VN_ShowChara("wingm_black1");
    GF_VN_ShowChara("wingm_black2");
    GF_VN_ShowChara("wingm_white");

    GF_VN_MoveChara("wingm_black1", "left");
    GF_VN_MoveChara("wingm_black2", "right");
    GF_VN_MoveChara("wingm_white", "center");

    GF_VN_PlayMotion("wingm_black1", 5);
    GF_VN_PlayDialog("wingm_black1", "Caw Caaw!!!", "shout", "", "", "", "", 1);

    GF_VN_QueueNext(dialog_12);
  }

  var dialog_12 = function() {
    GF_VN_PlayMotion("wingm_white", 5);
    GF_VN_PlayDialog("wingm_white", "Hoot Hoot!!!", "shout", "", "", "", "", 1);

    GF_VN_QueueNext(dialog_13);
  }

  var dialog_13 = function() {
    GF_VN_HideChara("wingm_black1");
    GF_VN_HideChara("wingm_black2");
    GF_VN_HideChara("wingm_white");

    GF_VN_ShowChara("yachiyo_battle");
    GF_VN_MoveChara("yachiyo_battle", "left");
    GF_VN_PlayExpression("yachiyo_battle", 3);

    GF_VN_ShowChara("iroha1");

    GF_VN_PlayDialog("yachiyo_battle", "Must Battle", "speachLeft_name", "Yachiachoo", "", "", "", 1);

    GF_VN_QueueNext(dialog_14);
  }

  var dialog_14 = function() {
    GF_VN_PlayMotion("iroha1", 6);
    GF_VN_PlayDialog("iroha1", "Ehhhh?!", "speachRight_name", "", "", "Iroro", "", 1);

    GF_VN_QueueNext(battle_01);
  }

  var battle_01 = function () {
    GF_AddEnemy("BlackFeather_mini", 5);
    GF_AddEnemy("BlackFeather_mini", 4);
    GF_AddEnemy("BlackFeather_mini", 0);

    GF_MakeBattle("magica/image_native/bg/story/bg_adv_11024.jpg", 1024, null);
  }

  GF_VN_InitScene(
    [ //Backgrounds
      { BgID:"house", Path:"magica/image_native/bg/story/bg_adv_11022.jpg", hRes:1024 },
      { BgID:"park", Path:"magica/image_native/bg/story/bg_adv_11041.jpg", hRes:1024 },
      { BgID:"shop", Path:"magica/image_native/bg/story/bg_adv_13031.jpg", hRes:1024 }
    ],
    [ //Characters
      { CharaID:"iroha1", Height:156, Path:"magica/image_native/live2d/100102/model.json", Res:1024 },
      { CharaID:"yachiyo", Height:165, Path:"magica/image_native/live2d/100201/model.json", Res:1024 },
      { CharaID:"yachiyo_battle", Height:165, Path:"magica/image_native/live2d/100200/model.json", Res:1024 },
      { CharaID:"wingm_black1", Height:160, Path:"magica/image_native/live2d/715000/model.json", Res:1024 },
      { CharaID:"wingm_black2", Height:160, Path:"magica/image_native/live2d/715000/model.json", Res:1024 },
      { CharaID:"wingm_white", Height:160, Path:"magica/image_native/live2d/715101/model.json", Res:1024 }
    ],
    //First Dialog
    expo_01
  )


});
