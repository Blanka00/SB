let hearts = document.querySelectorAll('.heart');
let usedHearts = 0;

document.getElementById('use-heart').addEventListener('click', function() {
    if (usedHearts < hearts.length) {
        hearts[usedHearts].innerHTML = '💔'; // Az adott szív összetörik
        usedHearts++;
    } else {
        alert('Már minden alkalmat felhasználtál!');
    }
});
