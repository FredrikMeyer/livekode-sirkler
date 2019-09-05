import { randomNormal } from '/web_modules/d3-random.js'

const { PI } = Math

// Width and height
const W = 600
const H = 600

// Center
const [ CX, CY ] = [ W / 2, H / 2]
const radius = 200

// Initialize canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = W
canvas.height = H

// Forklar ide!

ctx.fillStyle = 'black'
ctx.strokeStyle = 'white'
ctx.fillRect(0, 0, W, H)

// Function to make random points on a circles
function randomPointOnCircle(meanAngle) {
}

/* console.log(randomPointOnCircle(0)) */

// Function to draw a random line on a circle

function drawRandomLineOnCircle(meanAngle) {
}

/* drawRandomLineOnCircle(0) */


// Draw many lines

function drawLines() {
}

drawLines()


