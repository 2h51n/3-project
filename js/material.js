$(document).ready(function () {
  // Swiper 초기화
  const materialSwiper = new Swiper(".swMaterial", {
    slidesPerView: 5,
  });

  // DOM 요소 선택
  const depthCategoryButtons = $(".depth-top a");
  const depthBottomCategoryButtons = $(".depth-bottom a");
  const swiperCategoryButtons = $(".swMaterial .swiper-slide a");
  const materialGoodsSections = $(".material-goods");
  const sideBottomButtons = $(".side-bottom-menu li a");
  const showMoreButton = $("#showMoreButton");
  const addToCartButtons = $(".add-to-cart, .add-to-cart1"); // 장바구니 추가 버튼 선택 (add-to-cart1 추가)
  const sectionTitleHeight = $(".section-title").outerHeight(); // 섹션 타이틀의 높이

  // 모든 카테고리 상품 숨기기
  function hideAllCategories() {
    materialGoodsSections.hide();
  }

  // 모든 아이콘 비활성화
  function deactivateAllIcons() {
    depthCategoryButtons.css("opacity", "0.53");
    depthBottomCategoryButtons.css("opacity", "0.53");
    swiperCategoryButtons.css("opacity", "0.53");
    swiperCategoryButtons.find("img").css("filter", "none");
    sideBottomButtons.css("opacity", "0.53");
  }

  // 아이콘 활성화
  function activateIcon(button) {
    button.css("opacity", "1");
  }

  // 클릭한 카테고리 상품만 표시하고 스크롤
  function displayCategory(category, shouldScroll = true) {
    hideAllCategories();
    deactivateAllIcons();

    const selectedCategory = $(`.material-goods.${category}`);
    if (selectedCategory.length) {
      selectedCategory.show(); // 해당 카테고리 상품 표시

      // shouldScroll이 true일 경우에만 스크롤
      if (shouldScroll) {
        scrollToMaterialArea(); // material-area로 스크롤
      }

      // 관련된 아이콘 활성화
      const relatedButton = depthCategoryButtons.filter(`[data-category="${category}"]`);
      if (relatedButton.length) activateIcon(relatedButton);
      const relatedBottomButton = depthBottomCategoryButtons.filter(`[data-category="${category}"]`);
      if (relatedBottomButton.length) activateIcon(relatedBottomButton);
      const relatedSwiperButton = swiperCategoryButtons.filter(function () {
        return $(this).find("img").attr("alt").toLowerCase() === category;
      });
      if (relatedSwiperButton.length) activateIcon(relatedSwiperButton);
      const relatedSideBottomButton = sideBottomButtons.filter(`[data-category="${category}"]`);
      if (relatedSideBottomButton.length) activateIcon(relatedSideBottomButton);
    }
  }

  // material-area로 스크롤 이동 함수
  function scrollToMaterialArea() {
    const targetSection = $(".material-area"); // material-area를 선택
    if (targetSection.length) {
      // 스크롤 애니메이션
      targetSection[0].scrollIntoView({ behavior: "smooth", block: "start" }); // 부드럽게 스크롤
    }
  }

  // 이벤트 리스너 등록
  depthCategoryButtons.on("click", function (e) {
    e.preventDefault(); // 기본 동작 방지
    const category = $(this).data("category");
    displayCategory(category); // 카테고리 클릭 시 displayCategory 호출
  });

  depthBottomCategoryButtons.on("click", function (e) {
    e.preventDefault(); // 기본 동작 방지
    const category = $(this).data("category");
    displayCategory(category); // 카테고리 클릭 시 displayCategory 호출
  });

  swiperCategoryButtons.on("click", function (e) {
    e.preventDefault(); // 기본 동작 방지
    const category = $(this).find("img").attr("alt").toLowerCase();
    displayCategory(category); // 카테고리 클릭 시 displayCategory 호출
  });

  sideBottomButtons.on("click", function (e) {
    e.preventDefault(); // 기본 동작 방지
    const category = $(this).data("category");
    displayCategory(category); // 카테고리 클릭 시 displayCategory 호출
    scrollToMaterialArea(); // 사이드 바텀 클릭 시에도 material-area로 스크롤
  });

  // 장바구니 추가 버튼 클릭 이벤트
  addToCartButtons.on("click", function (e) {
    e.preventDefault(); // 기본 동작 방지
    // 여기에 장바구니에 추가하는 코드 추가
    console.log("장바구니에 추가되었습니다."); // 예시로 콘솔에 출력
  });

  // 페이지 로드 시 기본으로 무작위 카테고리 및 해당 아이콘 표시
  hideAllCategories();
  deactivateAllIcons();
  const randomIndex = Math.floor(Math.random() * materialGoodsSections.length);
  const randomCategory = materialGoodsSections.eq(randomIndex);
  if (randomCategory.length) {
    randomCategory.show();
    const categoryAlt = randomCategory.attr("class").split(" ")[1];
    displayCategory(categoryAlt, false); // 초기 로드 시 스크롤하지 않음
  }

  // 더 보기 버튼 클릭 시 히든 클래스 토글 및 텍스트 변경
  showMoreButton.on("click", function (e) {
    e.preventDefault(); // 기본 동작 방지
    if ($(window).width() <= 480) {
      $(".hidden").toggle(); // .hidden 클래스를 가진 요소 보이기/숨기기
      
      // 버튼 텍스트 변경
      const isHidden = $(".hidden").is(":visible");
      $(this).text(isHidden ? "닫기" : "더 보기"); // 숨겨진 상태인지 확인하고 텍스트 변경
    }
  });
});
