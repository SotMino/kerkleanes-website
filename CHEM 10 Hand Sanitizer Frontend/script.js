//Footer Word Change
const words = [" Clean", " Protected", " Comfortable", " Fresh", " Safe"];
let word_index = 0;

function changeWord() {
    const wordElement = document.getElementById("changing-word");
    wordElement.style.opacity = 0;
    setTimeout(() => {
        word_index = (word_index + 1) % words.length;
        wordElement.textContent = words[word_index];
        wordElement.style.opacity = 1;
    }, 500);
}

setInterval(changeWord, 2000);