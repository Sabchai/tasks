

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementsByClassName('toggle-button');
    const cards = document.getElementsByClassName('card');

    
    const button = buttons[0];
    const card = cards[0];

    button.addEventListener('click', () => {
        if (card.style.opacity === '0') {
            card.style.opacity = '1';
            button.textContent = 'Cacher';
        } else {
            card.style.opacity = '0';
            button.textContent = 'Afficher';
        }
    });
});

