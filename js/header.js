window.onload = function () {
  // ===메인 배너 스와이퍼 슬라이드 영역 시작
  const swBanner = new Swiper(".swBanner", {
    loop: true, // loop : 무한으로 도는 것.
    autoplay: {
      delay: 4000,
      disableOnInteraction: false, // 상관없이 계속 autoplay.
    },
  });
  // ===메인 배너 슬라이드 영역 끝


  const swMaterial = new Swiper(".swMaterial", {
    slidesPerView: 5, // 한 번에 3개의 슬라이드 표시
    // loop: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false, // 상관없이 계속 autoplay.
    // },

});
// ===메인 배너 슬라이드 영역 끝

}
