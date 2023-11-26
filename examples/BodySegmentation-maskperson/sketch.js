// Copyright (c) 2020-2023 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
BodyPix
=== */

let bodyPix;
let video;
let segmentation;
let t = 0;

let options = {
  maskType: "parts",
};

function preload() {
  bodyPix = ml5.bodySegmentation("BodyPix", options);
}

function setup() {
  createCanvas(640, 480);
  colorMode(HSB, 100);
  // Create the video
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  bodyPix.detectStart(video, gotResults);
}

function draw() {
  t += 0.5;
  if (t > 100) {
    t = 0;
  }
  background(t, 100, 80);

  if (segmentation) {
    video.mask(segmentation);
    image(video, 0, 0);
  }
}
// callback function for body segmentation
function gotResults(result) {
  segmentation = result.mask;
}
