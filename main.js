function setup() {
    canvas=createCanvas(300,200);
    canvas.position(550,350);
    video= createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/H-qs0uAWv/model.json',modelLoaded);
}
function draw() {
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}
function modelLoaded() {
    console.log("Model Loaded!");
}
function gotResult(error,results) {
if (error) {
    console.log(error);
} else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}