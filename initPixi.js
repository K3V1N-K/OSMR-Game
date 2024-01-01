

//Alert if pixi dosnt load
try {
  console.log("Running PIXI " + PIXI.VERSION);
} catch (e) {
  alert("PIXI failed to load");
}

//Alert if WebGL is not supported
if(PIXI.utils.isWebGLSupported() == false) {
  alert("WebGL is not supported");
}

//Create Pixi window
const GV_app = new PIXI.Application({
  resizeTo: window,
	autoResize: true,
  resolution: devicePixelRatio
});
document.body.appendChild(GV_app.view);


//For live2d mouth movments
let RV_mouthValue = 0;
GV_app.ticker.add(() => {
  // mimic the interpolation value, 0-1
  mouthValue = Math.sin(performance.now() / 80) / 2 + 0.5;
});



clearPixi();
