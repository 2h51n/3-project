document.addEventListener("DOMContentLoaded", function () {
  AOS.init({});

  function toggleCartIcon(imgElement, productName, price) {
    if (imgElement.src.includes("cart_plus.png")) {
      imgElement.src = "images/like/cart_plus_like.png"; // 좋아요가 눌린 상태의 이미지로 교체
      addToCart(productName, price); // 장바구니에 상품 추가
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
});
