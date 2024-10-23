$(document).ready(function () {
  const materialSwiper = new Swiper(".swMaterial", {
    slidesPerView: 5,
  }); // 한 번에 보여질 슬라이드 수

  const depthCategoryButtons = $(".depth-top a"); // depth-top 카테고리 버튼
  const depthBottomCategoryButtons = $(".depth-bottom a"); // depth-bottom 카테고리 버튼
  const swiperCategoryButtons = $(".swMaterial .swiper-slide a"); // swiper-slide 카테고리 버튼
  const materialGoodsSections = $(".material-goods");
  const sideBottomButtons = $(".side-bottom-menu li a"); // 사이드 바텀 카테고리 버튼
  const showMoreButton = $("#showMoreButton"); // 더 보기 버튼

  // 모든 카테고리 상품 숨기기 함수
  function hideAllCategories() {
    materialGoodsSections.hide();
  }

  // 모든 아이콘 비활성화 함수
  function deactivateAllIcons() {
    depthCategoryButtons.css("opacity", "0.53"); // 비활성화 스타일
    depthBottomCategoryButtons.css("opacity", "0.53"); // 비활성화 스타일
    swiperCategoryButtons.css("opacity", "0.53"); // 비활성화 스타일
    swiperCategoryButtons.find("img").css("filter", "none"); // 이미지 색상 필터 초기화
    sideBottomButtons.css("opacity", "0.53"); // 비활성화 스타일
  }

  // 모든 아이콘 활성화 함수
  function activateIcon(button) {
    button.css("opacity", "1"); // 활성화 스타일
  }

  // 클릭한 카테고리 상품만 표시하는 함수
  function displayCategory(category) {
    hideAllCategories();
    deactivateAllIcons(); // 모든 아이콘 비활성화

    // 해당하는 카테고리 상품만 표시
    const selectedCategory = $(`.material-goods.${category}`);
    if (selectedCategory.length) {
      selectedCategory.show(); // flex 또는 block으로 변경 가능
      const relatedButton = depthCategoryButtons.filter(`[data-category="${category}"]`);
      if (relatedButton.length) {
        activateIcon(relatedButton); // 클릭한 아이콘 활성화
      }
      const relatedBottomButton = depthBottomCategoryButtons.filter(`[data-category="${category}"]`);
      if (relatedBottomButton.length) {
        activateIcon(relatedBottomButton); // 사이드 바텀 아이콘 활성화
      }
      const relatedSwiperButton = swiperCategoryButtons.filter(function () {
        return $(this).find("img").attr("alt").toLowerCase() === category;
      });
      if (relatedSwiperButton.length) {
        activateIcon(relatedSwiperButton); // Swiper 아이콘 활성화
      }
      const relatedSideBottomButton = sideBottomButtons.filter(`[data-category="${category}"]`);
      if (relatedSideBottomButton.length) {
        activateIcon(relatedSideBottomButton); // 사이드 바텀 아이콘 활성화
      }
    }
  }

  // depth-top 카테고리 버튼 클릭 이벤트 리스너
  depthCategoryButtons.on("click", function (e) {
    e.preventDefault();
    const category = $(this).data("category");
    displayCategory(category); // 해당 카테고리 보여주기
  });

  // depth-bottom 카테고리 버튼 클릭 이벤트 리스너
  depthBottomCategoryButtons.on("click", function (e) {
    e.preventDefault();
    const category = $(this).data("category");
    displayCategory(category); // 해당 카테고리 보여주기
  });

  // swiper-slide 카테고리 버튼 클릭 이벤트 리스너
  swiperCategoryButtons.on("click", function (e) {
    e.preventDefault();
    const category = $(this).find("img").attr("alt").toLowerCase(); // alt 값을 소문자로 변환하여 일치시킴
    displayCategory(category); // 해당 카테고리 보여주기
  });

  // 사이드 바텀 버튼 클릭 이벤트 리스너 추가
  sideBottomButtons.on("click", function (e) {
    e.preventDefault();
    const category = $(this).data("category");
    displayCategory(category); // 해당 카테고리 보여주기
  });

  // 페이지 로드 시 기본으로 무작위 카테고리 및 해당 아이콘 표시
  hideAllCategories();
  deactivateAllIcons(); // 모든 아이콘 비활성화
  const randomIndex = Math.floor(Math.random() * materialGoodsSections.length); // 무작위 인덱스 선택
  const randomCategory = materialGoodsSections.eq(randomIndex); // 무작위 카테고리 선택
  if (randomCategory.length) {
    randomCategory.show(); // 무작위 카테고리 표시
    const categoryAlt = randomCategory.attr("class").split(" ")[1]; // 두 번째 클래스(예: 'plastic') 가져오기
    displayCategory(categoryAlt); // 해당 카테고리와 아이콘 활성화
  }

  // 더 보기 버튼 클릭 시 히든 클래스 토글
  showMoreButton.on("click", function () {
    if ($(window).width() <= 480) {
      const hiddenItems = $(".hidden"); // .hidden 클래스를 가진 모든 요소 선택
      hiddenItems.each(function () {
        // 현재 요소의 display 속성에 따라 보이게 하거나 숨기기
        $(this).toggle(); // 보이게 또는 숨기기
      });
    }
  });
});
