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
