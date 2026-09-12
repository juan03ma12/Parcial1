document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.hero-card');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const role = button.getAttribute('data-role');
            cards.forEach(card => {
                if (role === 'all' || card.dataset.role === role) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});