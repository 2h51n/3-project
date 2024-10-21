document.addEventListener("DOMContentLoaded", function () {
  AOS.init(); // AOS 초기화

  let cartItems = []; // 장바구니 아이템 배열

  // 장바구니 아이콘 토글 함수
  function toggleCartIcon(imgElement, productName, price) {
    // 아이템이 장바구니에 이미 있는지 확인
    const existingItemIndex = cartItems.findIndex((item) => item.name === productName);

    if (existingItemIndex !== -1) {
      // 장바구니에 아이템이 있으면 제거
      imgElement.src = "images/like/cart_plus.png"; // 원래 이미지로 변경
      cartItems.splice(existingItemIndex, 1); // 장바구니에서 상품 제거
      showNotification(`${productName}이(가) 장바구니에서 제거되었습니다!`); // 알림 표시
    } else {
      // 장바구니에 아이템이 없으면 추가
      imgElement.src = "images/like/cart_plus_like.png"; // 좋아요 상태 이미지로 변경
      cartItems.push({ name: productName, price: price }); // 장바구니에 상품 추가
      showNotification(`${productName}이(가) 장바구니에 추가되었습니다!`); // 알림 표시
    }
  }

  // 알림 메시지를 표시하는 함수
  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message; // 알림 메시지 설정
    notification.style.display = "block"; // 알림 보이기
    notification.style.opacity = 1; // 완전히 불투명하게 설정
    setTimeout(() => {
      notification.style.opacity = 0; // 2초 후에 불투명도 감소
      setTimeout(() => {
        notification.style.display = "none"; // 0.6초 후에 숨기기
      }, 300);
    }, 2000); // 2초 후에 사라지기 시작
  }

  // 각 인기 아이템의 장바구니 아이콘에 이벤트 리스너를 추가하는 함수
  function attachCartIconListeners() {
    const cartIcons = document.querySelectorAll(".cart-icon");
    cartIcons.forEach((icon) => {
      const productName = icon.dataset.productName; // 데이터 속성에서 상품명 가져오기
      const price = icon.dataset.price; // 데이터 속성에서 가격 가져오기
      icon.addEventListener("click", function () {
        toggleCartIcon(this, productName, price);
      });
    });
  }

  // 페이지 로드 시 이벤트 리스너 추가
  attachCartIconListeners();

  // 전역 함수로 설정
  window.toggleCartIcon = toggleCartIcon;
});
