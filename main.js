function start_classification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PjtRzS8yb/model.json", modelLoaded) ;
}    

function modelLoaded(){
    classifier.classify( gotResults ) ;
}

function gotResults(error , results){
if(error){
  console.error(error) ;  
}
else{
  console.log(results) ;  
}
}