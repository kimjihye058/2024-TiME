document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const info = document.getElementById('info');

    navToggle.addEventListener('click', function() {
        info.classList.toggle('show-menu');
    });

    
});
