<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drawing App</title>
    <style>
        canvas {
            border: 1px solid black;
            display: block;
            margin: 20px 0;
        }
    </style>
    <div>
        <label>
            <input type="radio" name="tool" value="brush" checked> Brush
        </label>
    
            <input type="radio" name="tool" value="pencil"> Pencil
        </label>
    </div>
    <label for="color">Select Color:</label>
        <input type="color" id="lavender" value="#36287">
    </div>

    <button id="clearCanvas">Clear Canvas</button>

    <canvas id="drawingCanvas" width="400" height="300"></canvas>
</head>
</body>
<script>
canvas.addEventListener('mousedown', () => {
            drawing = true;
            ctx.beginPath();
        });

        canvas.addEventListener('mouseup', () => {
            drawing = false;
            ctx.closePath();
        });

        </script>

        </body>
        </html>
