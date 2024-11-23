export function getRandomColor() {
    const rColor = randomIntFromInterval(0, 255);
    const gColor = randomIntFromInterval(0, 255);
    const bColor = randomIntFromInterval(0, 255);

    document.body.style = `background-color:rgb(${rColor}, ${gColor}, ${bColor})`;
}
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}