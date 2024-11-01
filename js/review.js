// 리뷰 섹션 - Swiper 초기화 코드
window.addEventListener("load", function() {
  const swReview = new Swiper(".swReview", {
    slidesPerView: 1, // 기본적으로 1개씩 슬라이드 표시
    spaceBetween: 10, // 슬라이드 간격 20px
    centeredSlides: true,
    autoplay: {
      delay: 3000,              // 3초마다 자동 슬라이드
      disableOnInteraction: false,  // 상호작용해도 자동 재생 유지
    },
    loop: true,       // 무한 반복 설정
    // loopAdditionalSlides: 5,  
    // scrollbar: {
    //   el: ".swiper-scrollbar",  // 스크롤바 요소 설정
    //   hide: true,               // 스크롤바 숨김 설정
    //   draggable: true,          // 드래그 가능 설정
    // },
    breakpoints: {
      320: { slidesPerView: 1.5 },  // 모바일 작은 화면에서 1.5개씩 표시
      480: { slidesPerView: 2 },    // 화면 너비 480px 이상일 때 2개씩 표시
      768: { slidesPerView: 3 },    // 태블릿 사이즈에서 2개씩 표시
      950: { slidesPerView: 3 },  // 데스크탑에서는 3.5개 표시
      1024: { slidesPerView: 4 },   // 더 넓은 화면에서는 4개 표시
    },
  });

  // 드래그 가능하게 하기 위한 스크롤바와 슬라이드 동기화
  swReview.on("scrollbarDragMove", function () {
    const index = Math.round(swReview.activeIndex);
    swReview.slideTo(index);
  });
});