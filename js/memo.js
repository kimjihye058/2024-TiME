 document.addEventListener("DOMContentLoaded", function() {
        const memoTextarea = document.getElementById('memo');
        const savedMemo = localStorage.getItem('memo');

        if (savedMemo) {
            memoTextarea.value = savedMemo;
        }

        // textarea의 내용이 변경될 때마다 localStorage에 저장
        memoTextarea.addEventListener('input', function() {
            localStorage.setItem('memo', memoTextarea.value);
        });
    });
