const typingElements = document.querySelectorAll(".typing-animation");
const cursorSpan = document.querySelector(".cursor");
function typeWriter(element, heading) {
    let text = "";
    let typingIdx = 0;
    function type() {
        if (typingIdx < heading.length) {
            text += heading.charAt(typingIdx);
            element.innerText = text;
            typingIdx++;
            setTimeout(type, 100);
        } else {
            // Typing animation complete, wait for 10 seconds and restart
            setTimeout(() => {
                text = "";
                typingIdx = 0;
                type();
            }, 10000);
        }
    }
    type();
}
typingElements.forEach((element) => {
    typeWriter(element, element.getAttribute("data-heading"));
});