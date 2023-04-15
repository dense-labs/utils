// Function to generate random RGB color
export function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function to convert RGB color to HEX color
export function rgbToHex(rgb: string) {
    var components = rgb.match(/\d+/g);
    var r = parseInt(components[0], 10);
    var g = parseInt(components[1], 10);
    var b = parseInt(components[2], 10);
    var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex;
}

// Function to convert RGB color to RGBA color
export function rgbToRgba(rgb: string, opacity: string | number) {
    var components = rgb.match(/\d+/g);
    var r = parseInt(components[0], 10);
    var g = parseInt(components[1], 10);
    var b = parseInt(components[2], 10);
    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
}

// Example usage
var color = getRandomColor();
console.log(color);            // outputs "rgb(123, 45, 67)"
console.log(rgbToHex(color));  // outputs "#7b2d43"
console.log(rgbToRgba(color, 0.5));  // outputs "rgba(123, 45, 67, 0.5)"
