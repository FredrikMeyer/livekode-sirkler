import { randomNormal } from '/web_modules/d3-random.js'

const { PI } = Math

const W = 1500
const H = 1500

const CX = W / 2
const CY = H / 2

const radius = W / 2 - 100

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = W
canvas.height = H

function randomPointOnCircle(cx, cy, r, meanAngle) {
    const theta = randomNormal(meanAngle, 0.35 * PI)()
    return [
        CX + r * Math.cos(theta),
        CY + r * Math.sin(theta)
    ]
}

function drawRandomLineOnCircle(cx, cy, r, meanAngle) {
    const [a, b] = randomPointOnCircle(cx, cy, r, meanAngle)
    const [x, y] = randomPointOnCircle(cx, cy, r, meanAngle)

    ctx.moveTo(a, b)
    ctx.lineTo(x, y)
    ctx.stroke()
}

function drawLines() {
    ctx.lineWidth = 0.05
    ctx.strokeStyle = `rgb(255, 255, 255, 0.1)`
    for(let i = 0; i < 1000; i++) {
        drawRandomLineOnCircle(CX, CY, radius, 0)
        drawRandomLineOnCircle(CX, CY, radius, PI / 3)
    }
}

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, W, H)

drawLines()
