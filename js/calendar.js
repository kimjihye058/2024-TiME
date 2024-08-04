document.addEventListener('DOMContentLoaded', function() {
  const currentMonth = document.getElementById('currentMonth');
  const calendarDates = document.getElementById('calendarDates');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();

  function renderCalendar() {
      calendarDates.innerHTML = '';
      currentMonth.innerText = `${year}년 ${month + 1}월`;

      let firstDay = new Date(year, month, 1).getDay();  // 첫 번째 날의 요일 (0: 일요일, 6: 토요일)
      let lastDate = new Date(year, month + 1, 0).getDate();  // 해당 월의 마지막 날짜

      // 첫 번째 날 이전의 빈 칸 채우기
      for (let i = 0; i < firstDay; i++) {
          const emptyCell = document.createElement('div');
          emptyCell.classList.add('date');  // 빈 칸에도 클래스 추가
          calendarDates.appendChild(emptyCell);
      }

      // 날짜 채우기
      for (let i = 1; i <= lastDate; i++) {
          const dateCell = document.createElement('div');
          dateCell.classList.add('date');
          dateCell.innerText = i;
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
  });

  nextBtn.addEventListener('click', () => {
      month++;
      if (month > 11) {
          month = 0;
          year++;
      }
      renderCalendar();
  });

  renderCalendar();
});
