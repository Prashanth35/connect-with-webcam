sap.ui.controller("connectwithwebcam.VIEW2", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf connectwithwebcam.VIEW2
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf connectwithwebcam.VIEW2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf connectwithwebcam.VIEW2
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf connectwithwebcam.VIEW2
*/
//	onExit: function() {
//
//	}
	// Grab elements, create settings, etc.
	 
	  addEventListener:("load", function() {
	      var camera = document.getElementById("camera");
	      var play = document.getElementById("play");
	      var pause = document.getElementById("pause");
	      var stop = document.getElementById("stop");
	      var constraints = {audio:true, video:true};

	      function success(stream) {
	        camera.src = stream;
	        camera.play();
	        disableButtons(true, false, false);
	      }

	      function failure(error) {
	        alert(JSON.stringify(error));
	      }

	      function disableButtons(disPlay, disPause, disStop) {
	        play.disabled = disPlay;
	        pause.disabled = disPause;
	        stop.disabled = disStop;
	      }

	      disableButtons(true, true, true);

	      if (navigator.getUserMedia)
	        navigator.getUserMedia(constraints, success, failure);
	      else
	        alert("Your browser does not support getUserMedia()");

	      play.addEventListener("click", function() {
	        disableButtons(true, false, false);
	        camera.play();
	      }, false);

	      pause.addEventListener("click", function() {
	        disableButtons(false, true, false);
	        camera.pause();
	      }, false);

	      stop.addEventListener("click", function() {
	        disableButtons(true, true, true);
	        camera.pause();
	        camera.src = "";
	      }, false);
	    }, false);
});