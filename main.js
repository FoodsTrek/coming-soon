const text = document.querySelector('.text');

const textAnimation = () => {
    text.textContent += '.'
    if(text.textContent.slice(-4) === "...."){
        text.textContent = "Coming Soon"
    }
}

setInterval(() => {
    textAnimation()
}, 1000)