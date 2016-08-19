/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
/**
*filename: app.js
*
@author Nidhi Thakkar
@date 19/08/2016
*
*student id:300872151
*website  :http://assignment2comp125.azurewebsites.net/
@description This is the main java script file for the website.
*/
(function () {
    "use strict";
    var canvas;
    var stage;
    var Threadly;
    var mynumber = Math.floor((Math.random() * 10) + 1);
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
        
    }
    function gameLoop() {
        stage.update(); // refresh the stage container
    }
    function main() {
      
        Threadly = new objects.Label("Threadly!", "20px Consolas", "#000000", 125, 50, true);
        var info = new objects.Label("Threadly is a simple ", "18px Consolas", "#000000", 125, 75, true);
        var info1 = new objects.Label("HTML javascript Web app.", "16px Consolas", "#000000", 125, 100, true);
        var info2 = new objects.Label("It tweets your thoughts", "15px Consolas", "#000000", 125, 125, true);
       
         stage.addChild(Threadly);
         stage.addChild(info);
         stage.addChild(info1);
         stage.addChild(info2);
         
        var ball = new createjs.Shape();
	ball.graphics.setStrokeStyle(5, 'round', 'round');
	
	ball.graphics.beginFill("#FF0000").drawCircle(0, 0, 20);
	ball.graphics.endStroke();
	ball.graphics.endFill();
	ball.graphics.moveTo(0, 0);
	ball.graphics.lineTo(0, 50);

	ball.graphics.endStroke();
	ball.x = 20;
	ball.y = -80;
    var tween = createjs.Tween.get(ball, {loop: true})
            .to({x: ball.x, y: canvas.height - 20, rotation: 360}, 2000, createjs.Ease.bounceOut)
            .wait(1000)
            .to({x: canvas.width - 20, rotation: 360}, 2500, createjs.Ease.bounceOut).call(handleComplete)
            .to({scaleX: 2, scaleY: 2, x: canvas.width - 200, y: canvas.height - 200}, 2500, createjs.Ease.bounceOut)
			.wait(1000)
			.to({scaleX: 1, scaleY: 1, x: 200, rotation: -360, y: canvas.height - 200}, 2500, createjs.Ease.bounceOut)
            .to({x: ball.x, y: canvas.height - 20, rotation: 360}, 2000, createjs.Ease.bounceOut)
            .wait(1000)
        
     var tween1 = createjs.Tween.get(Threadly, {loop: true})

            .to({x: Threadly.x, y: canvas.height - -10, rotation: 0},5000,createjs.Ease.fadeOut).wait(1000).call(handleComplete);     
     
     
            createjs.Tween.get(info, {loop: true})

            .to({x: info.x, y: canvas.height - -10, rotation: 0},5000,createjs.Ease.fadeOut).wait(1000).call(handleComplete);     
            
             createjs.Tween.get(info1, {loop: true})

            .to({x: info.x, y: canvas.height - -10, rotation: 0},5000,createjs.Ease.fadeOut).wait(1000).call(handleComplete);     
     
             createjs.Tween.get(info2, {loop: true})

            .to({x: info.x, y: canvas.height - -10, rotation: 0},5000,createjs.Ease.fadeOut).wait(1000).call(handleComplete);     
         
            stage.addChild(ball);
        createjs.Ticker.addEventListener("tick", stage);
    }
  
    function handleComplete(tween) {
       

    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();