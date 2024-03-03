
const imageTextBC = document.querySelector("#image-text-bc");
var maxBC = 3;
var actualBC = 1;

const imageTextStarda = document.querySelector("#image-text-starda");
var maxStarda = 3;
var actualStarda = 1;


setInterval(async () => {
    actualBC++;
    if (actualBC > maxBC) {
        actualBC = 1;
    }
    imageTextBC.style.opacity = 0
    await sleep(450)
    imageTextBC.src = `/assets/jogar_bctxt${actualBC}.png`
    imageTextBC.style.opacity = 1
}, 6000);

setInterval(async () => {
    actualStarda++;
    if (actualStarda > maxStarda) {
        actualStarda = 1;
    }
    imageTextStarda.style.opacity = 0
    await sleep(450)
    imageTextStarda.src = `/assets/jogar_bctxt${actualStarda}.png`
    imageTextStarda.style.opacity = 1
}, 6000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}