document.querySelectorAll('.card').forEach(card => {
    // Change color on hover
    card.addEventListener('mouseover', function() {
        card.style.backgroundColor = '#333333';
    });

    card.addEventListener('mouseout', function() {
        switch (card.classList[1]) {
            case 'boxing':
                card.style.backgroundColor = '#f8c471';
                break;
            case 'stretching':
                card.style.backgroundColor = '#5d6d7e';
                break;
            case 'bodybuilding':
                card.style.backgroundColor = '#e5e8e8';
                break;
            case 'running':
                card.style.backgroundColor = '#5dade2';
                break;
            default:
                card.style.backgroundColor = '#282828';
        }
    });

    // Display alert on click
    card.addEventListener('click', function() {
        alert(`You clicked on ${card.querySelector('h2').textContent}`);
    });
});
