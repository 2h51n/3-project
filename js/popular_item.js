// 각 인기 아이템의 장바구니 아이콘에 이벤트 리스너를 추가하는 함수
function attachCartIconListeners() {
  const cartIcons = document.querySelectorAll(".cart-icon");
  cartIcons.forEach((icon) => {
    const productName = icon.dataset.productName; // 데이터 속성에서 상품명 가져오기
    const price = icon.dataset.price; // 데이터 속성에서 가격 가져오기
    icon.addEventListener("click", function () {
      toggleCartIcon(this, productName, price); // 아이콘 클릭 시 상태 토글
    });
  });
}

// 장바구니 아이콘 토글 함수
function toggleCartIcon(imgElement, productName, price) {
  // 아이템이 장바구니에 이미 있는지 확인
  const existingItemIndex = cartItems.findIndex((item) => item.name === productName);

  if (existingItemIndex !== -1) {
    // 장바구니에 아이템이 있으면 제거
    imgElement.src = "images/like/cart_plus.png"; // 원래 이미지로 변경
    cartItems.splice(existingItemIndex, 1); // 장바구니에서 상품 제거
    showNotification(`${productName}이(가) \n장바구니에서 제거되었습니다!`); // 알림 표시
  } else {
    // 장바구니에 아이템이 없으면 추가
    imgElement.src = "images/like/cart_plus_like.png"; // 좋아요 상태 이미지로 변경
    cartItems.push({ name: productName, price: formatPrice(price) }); // 장바구니에 상품 추가
    showNotification(`${productName}이(가) \n장바구니에 추가되었습니다!`); // 알림 표시
  }

  updateCartCount(); // 카운터 업데이트
  updateCartPopup(); // 장바구니 팝업 업데이트
}

// 가격에 천 단위 구분 기호 추가 함수
function formatPrice(price) {
  return Number(price).toLocaleString(); // 숫자를 천 단위로 구분하여 문자열로 변환
}

// 페이지 로드 시 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function () {
  attachCartIconListeners(); // 이벤트 리스너 추가
});
