// /* ===
// ml5 Example
// Real time Object Detection using YOLO and p5.js
// === */

// let video;
// let yolo;
// let status;
// let objects = [];

// function setup() {
//   createCanvas(320, 240);
//   video = createCapture(VIDEO);
//   video.size(320, 240);
// console.log("capture")

//   yolo = ml5.YOLO(video, startDetecting);


//   video.hide();
//   $("#defaultCanvas0").hide()
//   status = select('#status');
//   console.log("status")
// }

// function draw() {
//   console.log("draw")
//   image(video, 0, 0, width, height);
//   for (let i = 0; i < objects.length; i++) {
//     noStroke();
//     fill(0, 255, 0);
//     text(objects[i].label, objects[i].x * width, objects[i].y * height - 5);
//     noFill();
//     strokeWeight(4);
//     stroke(0, 255, 0);
//     rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);
//   }
// }

// function startDetecting() {
//   console.log("detect")
//   status.html('Model loaded!');
//   detect();
//   console.log("loaded")
// }

// function detect() {
//   yolo.detect(function(err, results) {
//     objects = results;
//     detect();
//   });
// }

// function show() {
//   $("#defaultCanvas0").show()
// }
// function hide() {
//   $("#defaultCanvas0").hide()
// }
  
// const video = document.getElementById('video')

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//   faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//   faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//   faceapi.nets.faceExpressionNet.loadFromUri('/models')
// ]).then(startVideo)
// console.log('start')

// function startVideo() {
//   navigator.getUserMedia(
//     { video: {} },
//     stream => video.srcObject = stream,
//     err => console.error(err)
//   )
// }

// video.addEventListener('play', () => {
//   const canvas = faceapi.createCanvasFromMedia(video)
//   document.body.append(canvas)
//   const displaySize = { width: video.width, height: video.height }
//   faceapi.matchDimensions(canvas, displaySize)
//   setInterval(async () => {
//     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
//     const resizedDetections = faceapi.resizeResults(detections, displaySize)
//     // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
//     faceapi.draw.drawDetections(canvas, resizedDetections)
// //     faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
// //     faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
// //   }, 100)
// })

// startVideo()