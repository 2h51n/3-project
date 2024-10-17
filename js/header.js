window.onload = function () {
  // ===메인 배너 스와이퍼 슬라이드 영역 시작
  const swBanner = new Swiper(".swBanner", {
    loop: true, // loop : 무한으로 도는 것.
    autoplay: {
      delay: 3500,
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

  const swReview = new Swiper(".swReview", {
    slidesPerView: 1, 
    spaceBetween: 20,
    loop: true,


    breakpoints: {
      // 화면 너비가 320px 이상일 때
      320: {
        slidesPerView: 1.5,
      },
      // 화면 너비가 480px 이상일 때
      480: {
        slidesPerView: 2,
      },
      // 화면 너비가 768px 이상일 때
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      // 화면 너비가 1024px 이상일 때
      950: {
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 4,
      },
    },



});
// ===슬라이드 영역 끝

// 헤더 카테고리 클릭 시 서브메뉴 나옴
const cateIcon = document.querySelector("#category-icon")
const cateTitle = document.querySelector("#category-title")
const naviCate = document.querySelector(".navi-cate")
cateIcon.addEventListener("click", function(e){
  e.preventDefault()
  naviCate.classList.toggle("active")
})
cateTitle.addEventListener("click", function(e){
  e.preventDefault()
  naviCate.classList.toggle("active")
})

}
