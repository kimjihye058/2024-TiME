document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const info = document.getElementById('info');
    const toggleX = document.getElementById('toggle-x');

    // 햄버거 아이콘 클릭 시 메뉴 열기/닫기
    navToggle.addEventListener('click', function() {
        info.classList.toggle('show-menu');
    });

    // X 아이콘 클릭 시 메뉴 닫기
    toggleX.addEventListener('click', function() {
        info.classList.remove('show-menu');
    });
});
