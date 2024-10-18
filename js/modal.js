document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const closeBtn = document.querySelector(".close-btn");
  const notToday = document.getElementById("notToday");

  // 모달 열기 (필요 시 트리거 설정 가능)
  function openModal() {
    if (!getCookie("notToday")) {
      modal.classList.add("modal-open");
    }
  }

  // 모달 닫기
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("modal-open");

    // '오늘 하루 열지 않음' 체크 시 쿠키 설정
    if (notToday.checked) {
      setCookie("notToday", "true", 1); // 1일 동안 쿠키 유지
    }
  });

  // 쿠키 설정 함수
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // 쿠키 가져오기 함수
  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArr = decodedCookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
      const cookie = cookieArr[i].trim();
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  // 페이지 로드 시 모달 열기
  openModal();
});

// 탑 버튼 제어
const topBtn = document.querySelector(".top-btn");

// 초기 상태에서 탑 버튼을 숨김
topBtn.style.display = "none";

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 각 버튼 동작 제어
const cartBtn = document.querySelector(".fix-buy-btn");
const csBtn = document.querySelector(".cs-btn");

// 카트 버튼 클릭 시 동작
cartBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("카트 버튼 클릭됨");
});

// CS 버튼 클릭 시 동작
csBtn.addEventListener("click", function () {
  console.log("고객센터 버튼 클릭됨");
});
