window.onload = function () {
  // ===메인 배너 스와이퍼 슬라이드 영역 시작===
  const swBanner = new Swiper(".swBanner", {
    loop: true, // 무한 루프
    autoplay: {
      delay: 3500,
      disableOnInteraction: false, // 상호작용 후에도 자동 재생
    },
  });
  // ===메인 배너 스와이퍼 슬라이드 영역 끝===

  // ===소재별 인기 상품 섹션 스와이퍼 슬라이드 영역 시작===
  const swMaterial = new Swiper(".swMaterial", {
    slidesPerView: 5, // 한 번에 5개의 슬라이드 표시
    spaceBetween: 20, // 슬라이드 간격 설정
    breakpoints: {
      // 화면 너비에 따른 슬라이드 개수 설정
      // 320: { slidesPerView: 1.5 },
      // 480: { slidesPerView: 2 },
      // 768: { slidesPerView: 3 },
      // 1024: { slidesPerView: 5 },
    },
  });
  // ===소재별 인기 상품 섹션 끝===

  // ===리뷰 섹션 스와이퍼 슬라이드 영역 시작===
  const swReview = new Swiper(".swReview", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      320: { slidesPerView: 1.5 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      950: { slidesPerView: 3.5 },
      1024: { slidesPerView: 4 },
    },
  });
  // ===리뷰 섹션 끝===

  // ===카테고리 메뉴 토글 기능 시작===
  const cateTitle = document.querySelectorAll(".category-title");
  const naviCate = document.querySelector(".navi-cate");
  cateTitle.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      naviCate.classList.toggle("active");
    });
  });

  const cateIcon = document.querySelector("#category-icon");
  const sideMenu = document.querySelector(".sidemenu-area");
  const headLogo = document.querySelector(".head-logo");
  const cateClose = document.querySelector(".cate-close");
  const cateClose2 = document.querySelector(".cate-close2");

  // 카테고리 아이콘 클릭 시
  cateIcon.addEventListener("click", function (e) {
    e.preventDefault();
    toggleSideMenu(true);
  });

  // 사이드 메뉴 열기/닫기 토글 함수
  function toggleSideMenu(isOpen) {
    if (isOpen) {
      cateClose.classList.add("active");
      cateClose2.classList.add("active");
      cateIcon.classList.add("hidden");
      sideMenu.classList.add("active");
      headLogo.classList.add("hidden");
    } else {
      cateClose.classList.remove("active");
      cateClose2.classList.remove("active");
      cateIcon.classList.remove("hidden");
      sideMenu.classList.remove("active");
      headLogo.classList.remove("hidden");
    }
  }

  // 브라우저 창 크기 조정 시 상태 초기화
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      headLogo.classList.remove("hidden"); // 큰 화면에서는 로고 표시
      sideMenu.classList.remove("active"); // 사이드 메뉴 숨김
      cateIcon.classList.remove("hidden");
    }

    // 화면 너비에 따른 카테고리 닫기 버튼 조정
    if (window.innerWidth > 400) {
      cateClose2.style.display = "none";
    }
  });

  // ===검색 아이콘 클릭 시 검색창 토글 기능 시작===
  const sideInput = document.querySelector(".side-top-icons input");
  const sideInputBT = document.querySelector(".side-iconsBT .searchMB a .search_icon");

  sideInputBT.addEventListener("click", function () {
    sideInput.classList.toggle("active"); // 검색창 표시/숨김 토글
  });

  // ===비디오 섹션 스와이퍼 슬라이드 및 비디오 재생 관리 시작===
  const videos = document.querySelectorAll(".swVideo video");
  let videoIndex = 0;
  let videoTimer;
  const videosTimeArr = Array.from(videos).map((video) => Math.ceil(video.duration));

  const swVisual = new Swiper(".swVideo", {
    loop: true,
  });

  // 첫 번째 비디오 자동 재생
  videos[videoIndex].play();
  videoReset();

  // 슬라이드 변경 시 처리
  swVisual.on("slideChange", function () {
    videos[videoIndex].pause();
    videoIndex = swVisual.realIndex;
    videos[videoIndex].currentTime = 0;
    const playPromise = videos[videoIndex].play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => console.error(error));
    }
    clearInterval(videoTimer);
    videoReset();
  });

  // 비디오 타이머 재설정 및 초기화 함수
  function videoReset() {
    clearInterval(videoTimer);
    let videoTime = videosTimeArr[videoIndex];
    videoTimer = setInterval(() => {
      swVisual.slideNext();
      clearInterval(videoTimer);
      videoReset();
    }, videoTime * 1000);
  }
};
