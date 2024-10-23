document.addEventListener("DOMContentLoaded", function () {
  const materialSwiper = new Swiper(".swMaterial", {
    slidesPerView: 5,
  }); // 한 번에 보여질 슬라이드 수

  // 각 카테고리 버튼 및 관련 상품 영역
  const categoryButtons = document.querySelectorAll(".swMaterial .swiper-slide a");
  const materialGoodsSections = document.querySelectorAll(".material-goods");
  const showMoreButton = document.getElementById("showMoreButton"); // 더 보기 버튼

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
      adjustGoodsVisibility(); // 카테고리가 변경될 때마다 굿즈 가시성 재조정
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
  // 더 보기 버튼 클릭 시 히든 클래스 토글
  showMoreButton.addEventListener("click", function () {
    if (window.innerWidth <= 480) {
      const hiddenItems = document.querySelectorAll(".hidden"); // .hidden 클래스를 가진 모든 요소 선택
      hiddenItems.forEach(function (item) {
        // 현재 요소의 display 속성에 따라 보이게 하거나 숨기기
        if (item.style.display === "none" || item.style.display === "") {
          item.style.display = "block"; // 보이게 설정
        } else {
          item.style.display = "none"; // 숨기기 설정
        }
      });
    }
  });
  // 윈도우 크기 변경 시 .hidden 클래스 활성화
  // window.addEventListener("resize", function () {
  //   if (window.innerWidth > 481) {
  //     const hiddenItems = document.querySelectorAll(".hidden");
  //     hiddenItems.forEach(function (item) {
  //       item.style.display = "block"; // 숨기기
  //     });
  //   }
  // });





});
