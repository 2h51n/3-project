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

const materialSwiper = new Swiper(".swMaterial" ,{
  slidesPerView: 5, // 한 번에 보여질 슬라이드 수
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

// 카테고리 텍스트메뉴 클릭 시 소재별 미니카테고리 나옴
const cateTitle = document.querySelectorAll(".category-title")
const naviCate = document.querySelector(".navi-cate")
// cateIcon.addEventListener("click", function(e){
  //   e.preventDefault()
//   naviCate.classList.toggle("active")
// })
cateTitle.forEach(function(item){
  item.addEventListener("click", function(e){
    e.preventDefault()
    naviCate.classList.toggle("active")
  })
  
  
})
const cateIcon = document.querySelector("#category-icon")
const sideMenu = document.querySelector(".sidemenu-area")
const headLogo = document.querySelector(".head-logo")
cateIcon.addEventListener("click", function(e){
  e.preventDefault()
  sideMenu.classList.toggle("active")
  headLogo.classList.toggle("hidden")
})

// 사이드 메뉴 내부 클릭 시 이벤트 버블링 방지
sideMenu.addEventListener("click", function (e) {
  e.stopPropagation();  // 부모로 이벤트가 전달되지 않도록 함
});

// 브라우저 창 크기 조절 시 로고 상태 초기화
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {  // 임의로 768px로 설정 (필요 시 조정)
    headLogo.classList.remove("hidden");  // 큰 화면에서는 로고를 항상 표시
    sideMenu.classList.remove("active");  // 메뉴도 닫힘
  }
});
}
