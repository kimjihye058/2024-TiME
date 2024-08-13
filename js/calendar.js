document.addEventListener('DOMContentLoaded', function() {
    const currentMonth = document.getElementById('currentMonth');
    const calendarDates = document.getElementById('calendarDates');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const ymd = document.getElementById('y-m-d');
    const mealText = document.getElementById('meal-text');
    const xbuttton = document.getElementById('x-button');

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let selectedDate = null;

    const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    function renderCalendar() {
        calendarDates.innerHTML = '';
        currentMonth.innerText = `${year}년 ${month + 1}월`;

        let firstDay = new Date(year, month, 1).getDay();
        let lastDate = new Date(year, month + 1, 0).getDate();

        // 빈 칸 추가
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('date');
            calendarDates.appendChild(emptyCell);
        }

        // 날짜 셀 추가
        for (let i = 1; i <= lastDate; i++) {
            const dateCell = document.createElement('div');
            dateCell.classList.add('date');

            // 20.5와 같은 작은 숫자 생성 (여기서는 무작위로 예시 생성)
            const smallNumber = (Math.random() * 30).toFixed(1); // 0 ~ 30 사이의 소수점 1자리 숫자 생성

            // 큰 날짜 숫자와 작은 숫자 추가
            dateCell.innerHTML = `<div>${i}</div><div class="small-number">${smallNumber}</div>`;

            // 날짜 클릭 이벤트 추가
            dateCell.addEventListener('click', function() {
                if (selectedDate) {
                    selectedDate.classList.remove('selected');
                }
                dateCell.classList.add('selected');
                selectedDate = dateCell;

                const clickedDate = new Date(year, month, i);
                const dayOfWeek = daysOfWeek[clickedDate.getDay()];

                ymd.innerText = `${year}년 ${month + 1}월 ${i}일 ${dayOfWeek}`;
                mealText.classList.remove('hidden');
                xbuttton.style.display = "block";
            });

            calendarDates.appendChild(dateCell);
        }
    }

    prevBtn.addEventListener('click', () => {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        renderCalendar();
        mealText.classList.add('hidden'); // 이전/다음 클릭 시 숨기기
    });

    nextBtn.addEventListener('click', () => {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        renderCalendar();
        mealText.classList.add('hidden'); // 이전/다음 클릭 시 숨기기
    });

    renderCalendar();
});
