const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// Create a canvas object
const canvas = createCanvas(500, 500);
const ctx = canvas.getContext('2d');

// Load the image
loadImage('./pattern-1.png').then((image) => {
  // Draw the image onto the canvas
  ctx.drawImage(image, 0, 0);

  // Get the pixel data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  // Access individual pixel values
  const pixelIndex = (y, x) => (y * imageData.width + x) * 4;
  const x = 100;
  const y = 200;
    
  // Create a matrix to store the pixel values
  let matrix = '';

  // Iterate over each pixel
  for (let y = 0; y < canvas.height; y++) {
    let row = '';
    for (let x = 0; x < canvas.width; x++) {
      const pixelIndex = (y * canvas.width + x) * 4;
      const red = pixels[pixelIndex];
      const green = pixels[pixelIndex + 1];
      const blue = pixels[pixelIndex + 2];
      const alpha = pixels[pixelIndex + 3];

      // Store the pixel values in the matrix
      row+= `${red} ${green} ${blue} ${alpha}`;
      row+=' '

    }
    matrix+'\n\n\n';
    matrix+=`${row}`;
}
// console.log(row);

  // Print the matrix
//   console.log(matrix);

// Convert the matrix to a string representation
const matrixString = (matrix);

// Save the matrix to a .patt file
const filename = 'image.patt';
fs.writeFile(filename, matrixString, (err) => {
  if (err) {
    console.error('Error writing .patt file:', err);
  } else {
    console.log(`Matrix saved as ${filename}`);
  }
});

});
