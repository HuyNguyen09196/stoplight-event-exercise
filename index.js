(function() {
  'use strict';


var stopButton = document.querySelector("#stopButton");
var stopLight = document.querySelector("#stopLight")
var slowButton = document.querySelector("#slowButton");
var slowLight = document.querySelector("#slowLight")
var goButton = document.querySelector("#goButton");
var goLight = document.querySelector("#goLight")
 // Stop Light   
stopButton.addEventListener("click", function(){
  if(stopLight.classList.contains("stop")){
    stopLight.classList.remove("stop")
    console.log("Stop light bulb off")
  }else{
  stopLight.classList.add("stop");
  console.log( "Stop light bulb on")
  }
})

stopButton.addEventListener("mouseenter", function(){
  console.log("Entered Stop Light button")
})
stopButton.addEventListener("mouseleave", function(){
  console.log("Left Stop Light button")
})

// Slow light
slowButton.addEventListener("click", function(){
  if(slowLight.classList.contains("slow")){
    slowLight.classList.remove("slow")
    console.log("Slow light bulb off")
  }else{
  slowLight.classList.add("slow");
  console.log("Slow light bulb on")
  }
})

slowButton.addEventListener("mouseenter", function(){
  console.log("Entered Slow Light button")
})
slowButton.addEventListener("mouseleave", function(){
  console.log("Left Slow Light button")
})


// Go Light
goButton.addEventListener("click", function(){
  if(goLight.classList.contains("go")){
    goLight.classList.remove("go")
    console.log("Go light bulb off")
  }else{
  goLight.classList.add("go");
  console.log("Go light bulb on")
  }
})

goButton.addEventListener("mouseenter", function(){
  console.log("Entered Stop Go button")
})
goButton.addEventListener("mouseleave", function(){
  console.log("Left Stop Go button")
})


  // YOUR CODE HERE
})();




// stopButton.addEventListener("mouseenter", function(){
//   console.log("Entered Stop Light button")
// })
// stopButton.addEventListener("mouseleave", function(){
//   console.log("Left Stop Light button")
// })
// slowButton.addEventListener("mouseenter", function(){
//   console.log("Entered Slow Light button")
// })
// slowButton.addEventListener("mouseleave", function(){
//   console.log("Left Slow Light button")
// })
// goButton.addEventListener("mouseenter", function(){
//   console.log("Entered Stop Go button")
// })
// goButton.addEventListener("mouseleave", function(){
//   console.log("Left Stop Go button")
// })
console.log(document.getElementById('traffic-light').getElementsByClassName('bulb'))