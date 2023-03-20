const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        card.style.backgroundColor = '#' + randomColor;
    });
});