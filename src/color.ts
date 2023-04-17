// Function to generate random RGB color
export function getRandomColor() {
	let r = Math.floor(Math.random() * 256)
	let g = Math.floor(Math.random() * 256)
	let b = Math.floor(Math.random() * 256)
	return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

// Function to convert RGB color to HEX color
export function rgbToHex(rgb: string) {
	let components = rgb.match(/\d+/g)
	let r = parseInt(components[0], 10)
	let g = parseInt(components[1], 10)
	let b = parseInt(components[2], 10)
	let hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
	return hex
}

// Function to convert RGB color to RGBA color
export function rgbToRgba(rgb: string, opacity: string | number) {
	let components = rgb.match(/\d+/g)
	let r = parseInt(components[0], 10)
	let g = parseInt(components[1], 10)
	let b = parseInt(components[2], 10)
	return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')'
}

// Example usage
let color = getRandomColor()
console.log(color) // outputs "rgb(123, 45, 67)"
console.log(rgbToHex(color)) // outputs "#7b2d43"
console.log(rgbToRgba(color, 0.5)) // outputs "rgba(123, 45, 67, 0.5)"
