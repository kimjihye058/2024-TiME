document.addEventListener('DOMContentLoaded', (event) => {
    const inputWrappers = document.querySelectorAll('.input-wrapper');

    inputWrappers.forEach(wrapper => {
        const input = wrapper.querySelector('input');
        const inputShow = wrapper.querySelector('.input-show');
        const inputNone = wrapper.querySelector('.input-none');

        input.addEventListener('focus', () => {
            inputShow.style.display = 'block';
            inputNone.style.display = 'none';
        });

        input.addEventListener('blur', () => {
            inputShow.style.display = 'none';
            inputNone.style.display = 'block';
        });
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막음
    
    // 여기에서 로그인 로직을 추가할 수 있습니다.
    // 예를 들어, 아이디와 비밀번호를 확인하는 작업

    // 메인 페이지로 리다이렉트
    window.location.href = '../html/stopwatch.html'; // 원하는 메인 페이지 경로로 변경
});
