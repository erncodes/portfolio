
const devIcons = document.querySelectorAll(".dev-icons");
const header = document.querySelectorAll(".big-header-info");

const headerInfoObserver = new IntersectionObserver( headertext =>{
    header.forEach(entry => {
        entry.classList.toggle("show", entry.isIntersecting);
    })
});
header.forEach(item =>{
    headerInfoObserver.observe(item);
})

//Dev Icons Observer
const iconsObserver = new IntersectionObserver( devIcon =>{
    devIcon.forEach(entry =>{
        entry.target.classList.toggle("animate",entry.isIntersecting)
    })
})
devIcons.forEach(devIcon => {
    iconsObserver.observe(devIcon);
})

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.text');
    const messages = [
        "Welcome to my developer den.",
        "Code whisperer by day, bug hunter by night.",
    ];

    let index = 0;

    function typeMessage(message) {
        let charIndex = 0;
        textElement.textContent = '';

        function type() {
            if (charIndex < message.length) {
                textElement.textContent += message.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Typing speed
            } else {
                setTimeout(() => {
                    eraseMessage(message);
                }, 1000); // Pause before erasing
            }
        }
        type();
    }

    function eraseMessage(message) {
        let charIndex = message.length;

        function erase() {
            if (charIndex > 0) {
                textElement.textContent = message.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50); // Erasing speed
            } else {
                setTimeout(() => {
                    index = (index + 1) % messages.length; // Loop through messages
                    typeMessage(messages[index]);
                }, 500); // Pause before next message
            }
        }
        erase();
    }

    typeMessage(messages[index]);
});