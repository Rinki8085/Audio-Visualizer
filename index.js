window.onload = function() {
  
  var file = document.getElementById("thefile3");
  var audio = document.getElementById("audio3");
  var playbtn = document.getElementById("audioplaybtn");
  
  playbtn.onclick = function() {
    //var files = file.files;
  //var xaudo = document.getElementById("audio3").src;

  //console.log('files---'+URL.createObjectURL(files[0]));
  console.log('audio---'+audio.files);
  //audio.crossOrigin = 'anonymous';
    //audio.src = xaudo;
   //audio.src = URL.createObjectURL(files[0]);
    //document.getElementById("thefile3").style.display = "none";
    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
  console.log('src---'+src);
    var analyser = context.createAnalyser();
console.log('analyser---'+analyser);
    var canvas = document.getElementById("canvas3");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
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

    audio.play();
    renderFrame();
  };
};window.onload = function() {
  
  var file = document.getElementById("thefile3");
  var audio = document.getElementById("audio3");
  var playbtn = document.getElementById("audioplaybtn");
  
  playbtn.onclick = function() {
    //var files = file.files;
  //var xaudo = document.getElementById("audio3").src;

  //console.log('files---'+URL.createObjectURL(files[0]));
  console.log('audio---'+audio.files);
  //audio.crossOrigin = 'anonymous';
    //audio.src = xaudo;
   //audio.src = URL.createObjectURL(files[0]);
    //document.getElementById("thefile3").style.display = "none";
    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
  console.log('src---'+src);
    var analyser = context.createAnalyser();
console.log('analyser---'+analyser);
    var canvas = document.getElementById("canvas3");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
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

    audio.play();
    renderFrame();
  };
};window.onload = function() {
  
    var file = document.getElementById("thefile3");
    var audio = document.getElementById("audio3");
    var playbtn = document.getElementById("audioplaybtn");
    
    playbtn.onclick = function() {
      //var files = file.files;
	  //var xaudo = document.getElementById("audio3").src;

	  //console.log('files---'+URL.createObjectURL(files[0]));
	  console.log('audio---'+audio.files);
	  //audio.crossOrigin = 'anonymous';
      //audio.src = xaudo;
	   //audio.src = URL.createObjectURL(files[0]);
      //document.getElementById("thefile3").style.display = "none";
      audio.load();
      audio.play();
      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);
	  console.log('src---'+src);
      var analyser = context.createAnalyser();
  console.log('analyser---'+analyser);
      var canvas = document.getElementById("canvas3");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");
  
      src.connect(analyser);
      analyser.connect(context.destination);
  
      analyser.fftSize = 256;
  
      var bufferLength = analyser.frequencyBinCount;
  
      var dataArray = new Uint8Array(bufferLength);
  
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;
  
      var barWidth = (WIDTH / bufferLength) * 2.5;
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
  
      audio.play();
      renderFrame();
    };
  };window.onload = function() {
  
    var file = document.getElementById("thefile3");
    var audio = document.getElementById("audio3");
    var playbtn = document.getElementById("audioplaybtn");
    
    playbtn.onclick = function() {
      //var files = file.files;
	  //var xaudo = document.getElementById("audio3").src;

	  //console.log('files---'+URL.createObjectURL(files[0]));
	  console.log('audio---'+audio.files);
	  //audio.crossOrigin = 'anonymous';
      //audio.src = xaudo;
	   //audio.src = URL.createObjectURL(files[0]);
      //document.getElementById("thefile3").style.display = "none";
      audio.load();
      audio.play();
      var context = new AudioContext();
      var src = context.createMediaElementSource(audio);
	  console.log('src---'+src);
      var analyser = context.createAnalyser();
  console.log('analyser---'+analyser);
      var canvas = document.getElementById("canvas3");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext("2d");
  
      src.connect(analyser);
      analyser.connect(context.destination);
  
      analyser.fftSize = 256;
  
      var bufferLength = analyser.frequencyBinCount;
  
      var dataArray = new Uint8Array(bufferLength);
  
      var WIDTH = canvas.width;
      var HEIGHT = canvas.height;
  
      var barWidth = (WIDTH / bufferLength) * 2.5;
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
  
      audio.play();
      renderFrame();
    };
  };