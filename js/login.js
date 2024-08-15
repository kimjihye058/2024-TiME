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
    window.location.href = '../html/stopwatch.html'; // 원하는 메인 페이지 경로로 변경
});
