
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

  function modelLoaded(){
    console.log('model is loaded');
  }

  function check() {
    Img = document.getElementById("captured_image")
    classifier.classify(Img, gotResult)
  }

  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label
      accuracy = results[0].confidence*100
      document.getElementById("result_object_accuracy").innerHTML = accuracy.toFixed(3)
    
    }
  }

