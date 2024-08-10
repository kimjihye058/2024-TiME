document.addEventListener('DOMContentLoaded', function() {
    const currentMonth = document.getElementById('currentMonth');
    const calendarDates = document.getElementById('calendarDates');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const ymd = document.getElementById('y-m-d');
    const mealText = document.getElementById('meal-text');

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

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('date');
            calendarDates.appendChild(emptyCell);
        }

        for (let i = 1; i <= lastDate; i++) {
            const dateCell = document.createElement('div');
            dateCell.classList.add('date');
            dateCell.innerText = i;

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
