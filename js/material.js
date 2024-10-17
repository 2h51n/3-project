document.addEventListener("DOMContentLoaded", function () {
  // 각 카테고리 버튼 및 관련 상품 영역
  const categoryButtons = document.querySelectorAll(".swiper-slide a");
  const materialGoodsSections = document.querySelectorAll(".material-goods");

  // 모든 카테고리 상품 숨기기 함수
  function hideAllCategories() {
    materialGoodsSections.forEach(function (section) {
      section.style.display = "none";
    });
  }

  // 모든 아이콘 비활성화 함수
  function deactivateAllIcons() {
    categoryButtons.forEach(function (button) {
      button.style.opacity = "0.53"; // 비활성화 스타일
    });
  }

  // 모든 아이콘 활성화 함수
  function activateIcon(button) {
    button.style.opacity = "1"; // 활성화 스타일
  }

  // 클릭한 카테고리 상품만 표시하는 함수
  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // 모든 카테고리 상품을 먼저 숨기기
      hideAllCategories();
      deactivateAllIcons(); // 모든 아이콘 비활성화

      // 클릭한 아이콘의 alt 속성에 따른 카테고리 표시
      const category = button.querySelector("img").alt.toLowerCase(); // alt 값을 소문자로 변환하여 일치시킴

      // 해당하는 카테고리 상품만 표시
      const selectedCategory = document.querySelector(`.material-goods.${category}`);
      if (selectedCategory) {
        selectedCategory.style.display = "flex"; // flex 또는 block으로 변경 가능
        activateIcon(button); // 클릭한 아이콘 활성화
      }
    });
  });

  // 페이지 로드 시 기본으로 무작위 카테고리 및 해당 아이콘 표시
  hideAllCategories();
  deactivateAllIcons(); // 모든 아이콘 비활성화
  const randomIndex = Math.floor(Math.random() * materialGoodsSections.length); // 무작위 인덱스 선택
  const randomCategory = materialGoodsSections[randomIndex]; // 무작위 카테고리 선택
  if (randomCategory) {
    randomCategory.style.display = "flex"; // 무작위 카테고리 표시

    // 선택된 카테고리에 해당하는 아이콘 활성화
    const categoryAlt = randomCategory.classList[1]; // 두 번째 클래스(예: 'plastic') 가져오기
    const relatedButton = Array.from(categoryButtons).find((button) => button.querySelector("img").alt.toLowerCase() === categoryAlt);

    if (relatedButton) {
      activateIcon(relatedButton); // 무작위 카테고리와 관련된 아이콘 활성화
    }
  }
  const moreLink = document.getElementById("hidden");

  moreLink.addEventListener("click", function (event) {
    event.preventDefault(); // 링크 기본 동작 방지
  });
});
