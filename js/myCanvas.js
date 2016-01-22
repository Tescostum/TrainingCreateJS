/* global createjs */
(function() {
  "use strict";
  window.addEventListener("load",
    function(event) {
      init();
    }
  );
  
  var circle;
  var stage;

  function init() {
    stage = new createjs.Stage("myCanvas");
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    
    drawCircle();
    setLeftButtons();
    setRightButtons();
  }
  
  function drawCircle() {
    circle = new createjs.Shape();

    console.log("Yeah!");
    circle.graphics
      .beginFill("DeepSkyBlue")
      .drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;

    stage.addChild(circle);
    stage.update();
  }
  
  function setLeftButtons() {
      var button = document.getElementById("leftButton");
      button.addEventListener("click", clickLeftButton);
  }
  
  function setRightButtons() {
      var button = document.getElementById("rightButton");
      button.addEventListener("click", clickRightButton);
  }
  
  function clickLeftButton(event) {
      createjs.Tween.get(circle, { loop: false })
        .to({ x: circle.x - 120 }, 500, createjs.Ease.getPowInOut(4));
  }
  
  function clickRightButton(event) {
      createjs.Tween.get(circle, { loop: false })
        .to({ x: circle.x + 120 }, 500, createjs.Ease.getPowInOut(4));
  }
})();