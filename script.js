// Arrays of poetic lines
const lines = {
    line1: [
        "The sun sets over the distant hills,",
        "In the silence, the memories linger,",
        "Whispers of the wind dance through the trees,",
        "Stars twinkle like diamonds in the night.",
    ],
    line2: [
        "The moonlight bathes the world in silver,",
        "A river of dreams flows through my heart,",
        "Time stands still in this tranquil moment,",
        "Nature's symphony plays a gentle tune.",
    ],
    line3: [
        "And I stand upon the shore of dreams,",
        "Lost in thoughts of what could be,",
        "In the garden of hope, flowers bloom,",
        "With every heartbeat, I feel alive.",
    ],
    line4: [
        "Life's a canvas, and love's the paint,",
        "Every moment, a brushstroke of time,",
        "Together, we create a masterpiece,",
        "In this beautiful dance of existence.",
    ],
};

function getRandomLine(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePoem() {
    const poem = `
        <p>${getRandomLine(lines.line1)}</p>
        <p>${getRandomLine(lines.line2)}</p>
        <p>${getRandomLine(lines.line3)}</p>
        <p>${getRandomLine(lines.line4)}</p>
    `;
    document.getElementById('poem').innerHTML = poem;
}

document.getElementById('generate').addEventListener('click', generatePoem);