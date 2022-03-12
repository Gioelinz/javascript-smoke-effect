const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const letters = document.querySelectorAll('span');

for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    letter.addEventListener("mouseover", function () {
        letter.classList.add('active');

        setTimeout(() => {
            letter.classList.remove('active');
        }, 5000);
    })
}