//load fonts
var fontA = new FontFaceObserver('gamefont');

fontA.load().then(function () {
  setTimeout(function(){startScreen()}, 1000);
});
