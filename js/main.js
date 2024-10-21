// main.js

// window.onload 이벤트 리스너 설정
window.onload = function () {
  initialize(); // 초기화 함수 호출
};

// 초기화 함수
function initialize() {
  // 필요 시 다른 모듈 초기화
  initHeader();
  initFixButton();
  initModal();
  initSubscription();
  initMaterial();
  initPopularItems();
  initRookieBrand();
  initReview();
}

// 스크롤, 리사이즈 등의 전역 이벤트 리스너 설정
window.addEventListener("scroll", function () {
  handleScroll();
});

window.addEventListener("resize", function () {
  handleResize();
});

// 공통 스크롤 핸들링 함수
function handleScroll() {
  // 스크롤 관련 동작 처리
}

// 공통 리사이즈 핸들링 함수
function handleResize() {
  // 리사이즈 관련 동작 처리
}

// 모듈 초기화 함수 예시
function initHeader() {
  // header.js에서 필요한 초기화 코드
}

function initFixButton() {
  // fix-btn.js에서 필요한 초기화 코드
}

function initModal() {
  // modal.js에서 필요한 초기화 코드
}

function initSubscription() {
  // subscription.js에서 필요한 초기화 코드
}

function initMaterial() {
  // material.js에서 필요한 초기화 코드
}

function initPopularItems() {
  // popular_item.js에서 필요한 초기화 코드
}

function initRookieBrand() {
  // rookie_brand.js에서 필요한 초기화 코드
}

function initReview() {
  // review.js에서 필요한 초기화 코드
}
