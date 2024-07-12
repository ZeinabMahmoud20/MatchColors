const colorPicker = document.getElementById('colorPicker');
const shapes = document.querySelectorAll('.shape');
const checkScoreButton = document.getElementById('checkScore');
const scoreDisplay = document.getElementById('scoreDisplay');
const staticShapes = document.querySelectorAll('.static-shape');

// Event listener to change shape color based on color picker value
shapes.forEach(shape => {
    shape.addEventListener('click', () => {
        const color = colorPicker.value;
        if (shape.classList.contains('triangle-up')) {
            shape.style.borderBottomColor = color;
        } else if (shape.classList.contains('triangle-down')) {
            shape.style.borderTopColor = color;
        } else if (shape.classList.contains('triangle-left')) {
            shape.style.borderRightColor = color;
        } else if (shape.classList.contains('triangle-right')) {
            shape.style.borderLeftColor = color;
        } else {
            shape.style.backgroundColor = color;
        }
    });
});

// Function to compare colors
function compareColors(shape, staticShape) {
    const shapeColor = getComputedStyle(shape).getPropertyValue('background-color');
    const staticShapeColor = getComputedStyle(staticShape).getPropertyValue('background-color');

    return shapeColor === staticShapeColor;
}

// Event listener to check score
checkScoreButton.addEventListener('click', () => {
    let score = 0;

    shapes.forEach((shape, index) => {
        const staticShape = staticShapes[index];
        
        if (compareColors(shape, staticShape)) {
            score++;
        }
    });

    scoreDisplay.textContent = `Score: ${score}`;
});
