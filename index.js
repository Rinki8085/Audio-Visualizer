
// window.onload = function(){
//   var file = document.getElementById("button");
//   var audio = document.getElementById("audio");



//   // file.onclick = function() {
//   //   console.log("File clicked")
//   //   var files = this.files;
//   //   console.log("files")
//   //   audio.src = './audio.mp3';
//   //   document.getElementById("thefile").style.display = "none";
//   //   document.getElementById("btn1").style.display = "block";
//   //   audio.load();
//   //   audio.play();
//   //   var context = new AudioContext();
//   //   var src = context.createMediaElementSource(audio);
//   //   var analyser = context.createAnalyser();
//   //   console.log(analyser)
//   //   var canvas = document.getElementById("canvas");
//   //   canvas.width = window.innerWidth;
//   //   canvas.height = window.innerHeight;
//   //   var ctx = canvas.getContext("2d");

//   //   src.connect(analyser);
//   //   analyser.connect(context.destination);

//   //   analyser.fftSize = 256;

//   //   var bufferLength = analyser.frequencyBinCount;

//   //   var dataArray = new Uint8Array(bufferLength);

//   //   var WIDTH = canvas.width;
//   //   var HEIGHT = canvas.height;
//   //   console.log(WIDTH, HEIGHT)
//   //   var barWidth = (WIDTH / bufferLength) * 2.5;
//   //   var barHeight;
//   //   var x = 0;

//   //   function renderFrame() {
//   //     requestAnimationFrame(renderFrame);
//   //     x = 0;
//   //     analyser.getByteFrequencyData(dataArray);
//   //     ctx.fillStyle = "#2f104b";
//   //     ctx.fillRect(0, 0, WIDTH, HEIGHT);

//   //     for (var i = 0; i < bufferLength; i++) {
//   //       barHeight = dataArray[i];
//   //       var r = barHeight + (25 * (i/bufferLength));
//   //       var g = 250 * (i/bufferLength);
//   //       var b = 50;
//   //       ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
//   //       ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
//   //       x += barWidth + 1;
//   //     }
//   //   }

//   //   audio.play();
//   //   renderFrame();
//   // };


// }

var audio = document.getElementById("audio1");
var fileBtn = document.getElementById("bttn");

fileBtn.addEventListener("click", function() {

  if (audio.paused === true) {
    audio.load();
    audio.play();
    
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();
    // console.log(analyser);
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    console.log(ctx)
    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = (WIDTH / bufferLength) * 2.5;
    // console.log(barWidth);
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);
      
      x = 0;
      analyser.getByteFrequencyData(dataArray);
      ctx.fillStyle = "#2f104b";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        x += barWidth + 1;

      }
    }

    // audio.play();
    renderFrame();
  } else {
    audio.pause();
  }

    
})

const swiper = new Swiper('.swiper-container', {

  effect:"slide",
  speed:1000,
  loop: true,
  autoPlay:true,
  spaceBetween: 0,
  grabCursor:true
});