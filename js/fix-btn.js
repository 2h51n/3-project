document.addEventListener("DOMContentLoaded", function () {
  initializeEventListeners(); // 이벤트 리스너 초기화
});

// 이벤트 리스너를 초기화하는 함수
function initializeEventListeners() {
  const cartBtn = document.querySelector(".cart-btn a");
  const csBtn = document.querySelector(".cs-btn");
  const topBtn = document.querySelector(".top-btn");

  // 장바구니 버튼 클릭 시
  cartBtn.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지
    showCartPopup(); // 장바구니 팝업 표시
  });

  // 고객센터 버튼 클릭 시
  csBtn.addEventListener("click", function () {
    alert("고객센터에 문의해 주십시오.\n연락처: 123-456-7890"); // 고객센터 정보 표시
  });

  // 스크롤 시 Top 버튼 표시 및 숨김
  window.addEventListener("scroll", function () {
    toggleTopButtonVisibility(topBtn);
  });

  // Top 버튼 클릭 시 페이지 상단으로 스크롤
  topBtn.addEventListener("click", function () {
    scrollToTop();
  });
}

// 장바구니 팝업을 여는 함수
function showCartPopup() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display = "block"; // 팝업 표시
}

// 장바구니 팝업을 닫는 함수
function closeCartPopup() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display = "none"; // 팝업 숨김
}

// 장바구니 보기 버튼 클릭 시 행동
function goToCart() {
  alert("장바구니로 이동합니다."); // 실제 동작에 따라 수정 가능
}

// Top 버튼의 표시 여부를 토글하는 함수
function toggleTopButtonVisibility(topBtn) {
  // 100px 이상 스크롤 시 Top 버튼 표시
  if (window.scrollY > 100) {
    topBtn.style.display = "block"; // Top 버튼 표시
    topBtn.style.opacity = 1; // 완전 불투명
  } else {
    topBtn.style.opacity = 0; // 완전 투명
    setTimeout(() => {
      topBtn.style.display = "none"; // 버튼 숨김
    }, 500); // 페이드 아웃 효과 후 숨김
  }
}

// 페이지 상단으로 스크롤하는 함수
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드러운 스크롤 효과
  });
}
