document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const info = document.getElementById('info');
    const toggleX = document.getElementById('toggle-x');
    const nav = document.querySelector('.nav');
    
    // 햄버거 아이콘 클릭 시 메뉴 열기/닫기
    navToggle.addEventListener('click', function() {
        info.classList.toggle('show-menu');
        nav.classList.toggle('show-menu'); // nav 요소에 show-menu 클래스 추가/제거

        // 메뉴가 열렸을 때만 색상을 변경
        if (info.classList.contains('show-menu')) {
            for(let i = 0; i < 2; i++) {
                document.getElementsByClassName('nav-info')[i].style.color = '#000';
            }
        } else {
            // 메뉴가 닫힐 때 원래 색상으로 변경 (예시: '#fff')
            for(let i = 0; i < 2; i++) {
                document.getElementsByClassName('nav-info')[i].style.color = '#fff';
            }
        }
    });

    // X 아이콘 클릭 시 메뉴 닫기
    toggleX.addEventListener('click', function() {
        info.classList.remove('show-menu');
        nav.classList.remove('show-menu'); // nav 요소에서 show-menu 클래스 제거

        // 메뉴가 닫힐 때 원래 색상으로 변경 (예시: '#fff')
        for(let i = 0; i < 2; i++) {
            document.getElementsByClassName('nav-info')[i].style.color = '#fff';
        }
    });
});
