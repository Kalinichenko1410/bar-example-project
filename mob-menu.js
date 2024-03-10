// 
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-btnn');
    const menuContainer = document.querySelector('.mob-menu-container');
    const closeButton = document.querySelector('.mob-menu-button');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    menuButton.addEventListener('click', function() {
        menuContainer.classList.add('open');
    });

    closeButton.addEventListener('click', function() {
        menuContainer.classList.remove('open');
    });

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menuContainer.classList.remove('open');
        });
    });
});
// butn reserv
document.addEventListener('DOMContentLoaded', function() {
    const reservationButton = document.getElementById('reserv-button');
    const phoneNumber = '+111111111111'; 

    reservationButton.addEventListener('click', function() {
        window.location.href = 'tel:' + phoneNumber;
    });
});