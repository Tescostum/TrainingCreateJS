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
  
  var resizeWait = 120;
  var resizeQueue;

  function init() {
    stage = new createjs.Stage("myCanvas");
    
    resizeCanvas();
    setResizeCanvasEvent();
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    
    drawCircle();
    setLeftButtons();
    setRightButtons();
  }
  
  function setResizeCanvasEvent() {
    // キューをストック
    resizeQueue = null;
    
    window.addEventListener( 'resize', function(event) {
      // イベント発生の都度、キューをキャンセル 
      clearTimeout( resizeQueue );
    
      // waitで指定したミリ秒後に所定の処理を実行
      // 解除できるようにresizeQueueに登録
      resizeQueue = setTimeout(resizeCanvas, resizeWait);
    }, false );
  }
  
  function resizeCanvas() {
      var s = document.getElementById("canvasSection");
      var w = s.clientWidth;
      stage.canvas.width = w;
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