document.addEventListener("DOMContentLoaded", function () {
  AOS.init({}); // AOS 초기화

  // 장바구니 아이콘 토글 함수
  function toggleCartIcon(imgElement, productName, price) {
    if (imgElement.src.includes("cart_plus.png")) {
      imgElement.src = "images/like/cart_plus_like.png"; // 좋아요가 눌린 상태의 이미지로 교체
      addToCart(productName, price); // 장바구니에 상품 추가
      showNotification(); // 알림 표시
    } else {
      imgElement.src = "images/like/cart_plus.png"; // 다시 원래 이미지로 교체
      removeFromCart(productName); // 장바구니에서 상품 제거
    }
  }

  // 장바구니에 상품을 추가하는 함수
  function addToCart(productName, price) {
    console.log(productName + "을(를) " + price + "원에 장바구니에 담았습니다.");
    // 실제 장바구니에 추가하는 로직은 여기서 구현
  }

  // 장바구니에서 상품을 제거하는 함수
  function removeFromCart(productName) {
    console.log(productName + "을(를) 장바구니에서 제거했습니다.");
    // 실제 장바구니에서 제거하는 로직은 여기서 구현
  }

  // 알림 메시지를 표시하는 함수
  function showNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "block"; // 알림 보이기
    notification.style.opacity = 1; // 완전히 불투명하게 설정
    setTimeout(() => {
      notification.style.opacity = 0; // 0.3초 후에 불투명도 감소
      setTimeout(() => {
        notification.style.display = "none"; // 0.6초 후에 숨기기
      }, 300); // 이 타이머는 첫 번째 타이머가 끝난 후 실행됨
    }, 2000); // 2초 후에 사라지기 시작
  }

  // 전역 함수로 설정
  window.toggleCartIcon = toggleCartIcon;
});
