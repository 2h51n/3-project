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
