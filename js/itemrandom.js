document.addEventListener('DOMContentLoaded', function () {
    const sectionMenus = document.querySelectorAll('.section-menu');
    const accessoriesSection = document.querySelector('.accessories');
    const allItemSections = document.querySelectorAll('.item-section-container');

    sectionMenus.forEach(function(menu) {
        menu.addEventListener('click', function () {
            // 모든 section-menu에서 active 클래스 제거
            sectionMenus.forEach(function(item) {
                item.classList.remove('active');
            });

            // 클릭된 menu에 active 클래스 추가
            this.classList.add('active');

            // 모든 item-section-container 숨기기
            allItemSections.forEach(function(section) {
                section.style.display = 'none';
            });

            // 악세사리 메뉴를 클릭했을 때 accessories 섹션 보이기
            if (this.querySelector('span').textContent === '악세사리') {
                accessoriesSection.style.display = 'grid';
            } else {
                // 악세사리 메뉴가 아닌 경우 다른 섹션을 보이도록 처리
                const index = Array.from(sectionMenus).indexOf(this);
                allItemSections[index].style.display = 'grid';
            }
        });
    });
});