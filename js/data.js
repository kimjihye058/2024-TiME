// 데이터를 HTML에 표시하는 함수
const showData = (data, targetClass) => {
    const targetSection = document.getElementsByClassName(targetClass)[0];
    let divString = "";

    data.forEach((element) => {
        // rank에 따른 글자 색 설정
        const textColor = element.rank === "special" ? "color: #265BAC;" : "";

        divString += `
            <div class="item-section">
                <img src="../img/pixil-frame-0 (2) 1.png" alt="">
                <div class="item-info">
                    <img src="../img/${element.link}/${element.item}" alt="">
                    <span class="item-name">${element.name}</span>
                    <span class="basic" style="${textColor}">${element.rank}</span>
                </div>
            </div>\n`;
    });

    targetSection.innerHTML = divString;

    // item-section을 모두 선택하여 클릭 이벤트 리스너를 추가합니다.
    const itemSections = targetSection.querySelectorAll('.item-section');
    let lastClickedImg = null;
    let originalSrc = '';

    itemSections.forEach(function (section) {
        section.addEventListener('click', function () {
            const imgElement = section.querySelector('img');

            // 이전 클릭된 이미지 복원
            if (lastClickedImg && lastClickedImg !== imgElement) {
                lastClickedImg.src = originalSrc;
            }

            // 현재 클릭된 이미지 변경
            originalSrc = imgElement.src;
            imgElement.src = '../img/pixil-frame-0 (2) 7.png';

            // 현재 이미지를 lastClickedImg로 설정
            lastClickedImg = imgElement;
        });
    });
};


// 데이터 가져오기 및 표시
const getData = (url, targetClass) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => showData(data, targetClass))
        .catch((error) => console.log(error));
};

getData('../js/clothes.json', 'clothes');

// 예시: item.json 데이터를 accessories 섹션에 표시
getData('../js/item.json', 'accessories');
