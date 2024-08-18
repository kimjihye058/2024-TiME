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

document.addEventListener('DOMContentLoaded', function () {
    // 모든 item-section 요소를 선택합니다.
    const itemSections = document.querySelectorAll('.item-section');
    
    // 마지막으로 클릭된 이미지의 정보를 저장할 변수를 선언합니다.
    let lastClickedImg = null;
    let originalSrc = ''; // 이전 이미지의 원래 src를 저장

    // 각 item-section에 대해 클릭 이벤트 리스너를 추가합니다.
    itemSections.forEach(function (section) {
        section.addEventListener('click', function () {
            // 클릭된 item-section 내부의 img 요소를 선택합니다.
            const imgElement = section.querySelector('img');

            // 이전에 클릭된 이미지가 있으면 원래 이미지로 복원합니다.
            if (lastClickedImg && lastClickedImg !== imgElement) {
                lastClickedImg.src = originalSrc;
            }

            // 현재 클릭된 이미지의 src를 저장합니다.
            originalSrc = imgElement.src;

            // 이미지를 새로운 이미지로 변경합니다.
            imgElement.src = '../img/pixil-frame-0 (2) 7.png';

            // 현재 이미지를 lastClickedImg로 설정합니다.
            lastClickedImg = imgElement;
        });
    });
});