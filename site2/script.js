function createBubbles() {
    const bubblesContainer = document.getElementById('bubbles')
    const bubbleCount = 15

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div')
        bubble.className = 'bubble'

        const size = Math.random() * 80 + 20
        bubble.style.width = `${size}px`
        bubble.style.height = `${size}px`

        bubble.style.left = `${Math.random() * 100}%`
        bubble.style.animationDelay = `${Math.random() * 8}s`

        bubblesContainer.appendChild(bubble)
    }
}
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let currentSlide = 0
const slideCount = slides.length

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount
    updateSlider()
})

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideCount
    updateSlider()
})

createBubbles()