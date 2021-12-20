function setup() {
    canvas = createCanvas(500,400);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}

function clear() {
    background("white");
}

function draw() {
    strokeWeight(10);
    stroke("red");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResults);
}

function gotResults(error, result) {
    if (error) {
        console.error("error");
    }
    console.log(result);
    document.getElementById("label").innerHTML = "label " + result[0].label;

    document.getElementById("confidence").innerHTML = "confidence " + Math.round(result[0].confidence * 100) + "%";

    utterthis = new SpeechSynthesisUtterance(result[0].label);
    synth.speak(utterthis);
}