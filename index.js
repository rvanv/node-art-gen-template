const fs = require("fs");
const { createCanvas, loadImage } = require ("canvas")
const canvas = createCanvas(1000, 1000);
const ctx = canvas.getContext("2d");
const { layers, width, height } = require("./input/config.js");
const edition = 27;

const saveLayer = (_canvas) => {
    fs.writeFileSync("./newImage.png", _canvas.toBuffer("image/png"));
    console.log("img created")
};

const drawLayer = async (_layer, _edition) => {
    let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
    const image = await loadImage(`${_layer.location}${element.fileName}`);
    ctx.drawImage(
        image, _layer.position.x, _layer.position.y, _layer.size.width, _layer.size.height
    );
    saveLayer(canvas);
};
for (let i = 1; i <= edition; i++) {
    layers.forEach(layer => {
        drawLayer(layer, i);
    });
    console.log("creating edition: ", + i);
};
