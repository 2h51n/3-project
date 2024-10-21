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
//   const swVideo = new Swiper(".swVideo", {
//     slidesPerView: 1, // 한 번에 3개의 슬라이드 표시


// });

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
const cateClose = document.querySelector(".cate-close")
const cateClose2 = document.querySelector(".cate-close2")


// 카테고리 아이콘 클릭 시
cateIcon.addEventListener("click", function (e) {
  e.preventDefault();
  cateClose.classList.add("active");
  cateClose2.classList.add("active");
  cateIcon.classList.add("hidden");
  sideMenu.classList.add("active");
  headLogo.classList.add("hidden");
});

// 카테고리 닫기 버튼 클릭 시
cateClose.addEventListener("click", function (e) {
  e.preventDefault();
  cateClose.classList.remove("active");
  cateIcon.classList.remove("hidden");
  sideMenu.classList.remove("active");
  headLogo.classList.remove("hidden");
});
// 카테고리 닫기 버튼 클릭 시
cateClose2.addEventListener("click", function (e) {
  e.preventDefault();
  cateClose2.classList.remove("active");
  cateClose.classList.remove("active");
  cateIcon.classList.remove("hidden");
  sideMenu.classList.remove("active");
  headLogo.classList.remove("hidden");
});

const sideInput = document.querySelector(".side-top-icons input")
const sideInputBT = document.querySelector(".side-iconsBT > .searchMB > a .search_icon")


sideInputBT.addEventListener("click", function(){
  sideInput.classList.toggle("active")
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
    // cateClose2.classList.remove("active");
  }
  const icon = document.querySelector("#category-icon");
  if (window.innerWidth > 768) {
    icon.style.display = "none"; // 창이 작아져도 아이콘 표시
  } else {
    icon.style.display = "inline-block"; // 항상 표시
  }

  if (window.innerWidth > 400){
    cateClose2.style.display = "none";
  }
  // if (window.innerWidth > 400){
  //   cateClose.classList.remove("active");
  //   cateClose2.classList.add("active");
  // }
});

// 비디오 항목 체크 (video태그로 파악)
  // 모든비디오 태그를 변수에 저장
  let videos = this.document.querySelectorAll(".swVideo video");
  console.log(videos);
  // 비디오 재생시간 체크
  // 비디오의 재생 시간을 보관할 배열을 생성
  let videosTimeArr = [];
  // 비디오 재생 시간을 배열에 저장하는 반복문을 작성
  for (let i = 0; i < videos.length; i++) {
    console.log(videos[0].duration);

    videosTimeArr[i] = Math.ceil(videos[i].duration);
    console.log(videosTimeArr[0]);
  }
  // 첫번째 비디오 자동 실행
  let videoIndex = 0;
  videos[videoIndex].play();
  // visual slide
  // swiper슬라이드 초기화
  let swVisual = new Swiper(".swVideo", {
    loop: true,
  });
  // 슬라이드 변경 이벤트시 처리
  swVisual.on("slideChange", function () {
    // 진행중인 비디오 멈춤
    videos[videoIndex].pause();
    // 다음 화면 보이는 swiper 슬라이드 번호
    // console.log(swVisual.activeIndex);
    // console.log(swVisual.realIndex);
    videoIndex = swVisual.realIndex;

    videos[videoIndex].currentTime = 0;
    const playPromise = videos[videoIndex].play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
    clearInterval(videoTimer);
    videoReset();
  });

  // 타이머를 생성한다
  // 비디오 타이머 초기화 및 설정
  let videoTimer;
  // 비디오 타이머를 설정하고 초기화하는 함수 를 정의하고 호출
  function videoReset() {
    clearInterval(videoTimer);
    // 비디오 플레이시간
    let videoTime = videosTimeArr[videoIndex];
    // console.log(videoTime);
    videoTimer = setInterval(() => {
      // console.log(barScaleW);

      swVisual.slideNext();
      clearInterval(videoTimer);
      videoReset();
    }, videoTime * 1000);
  }
  videoReset();
 

}
