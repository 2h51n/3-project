// 장바구니 아이템 배열
let cartItems = []; // 장바구니 아이템 배열

// DOMContentLoaded 이벤트 리스너
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

  // 카트 아이콘 클릭 시
  const cartIcons = document.querySelectorAll(".cart-icon");
  cartIcons.forEach((icon) => {
    const productName = icon.dataset.productName; // 데이터 속성에서 상품명 가져오기
    const price = icon.dataset.price; // 데이터 속성에서 가격 가져오기
    icon.addEventListener("click", function () {
      addToCart(productName, price);
    });
  });
}

// 장바구니에 상품을 추가하거나 제거하는 함수
function addToCart(productName, price) {
  const existingItemIndex = cartItems.findIndex((item) => item.name === productName);

  if (existingItemIndex === -1) {
    // 상품이 장바구니에 없으면 추가
    cartItems.push({ name: productName, price: price });
    showNotification(`${productName}이(가) 장바구니에 추가되었습니다!`);
  } else {
    // 상품이 장바구니에 있으면 제거
    cartItems.splice(existingItemIndex, 1);
    showNotification(`${productName}이(가) 장바구니에서 제거되었습니다!`);
  }
  
  updateCartCount(); // 카운터 업데이트
  updateCartPopup(); // 장바구니 팝업 업데이트
}

// 장바구니 팝업을 여는 함수
function showCartPopup() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display = "flex"; // 팝업 표시
  updateCartPopup(); // 장바구니 팝업 내용 업데이트
}

// 장바구니 내용을 업데이트하는 함수
function updateCartPopup() {
  const cartItemsList = document.getElementById("cartItemsList");
  cartItemsList.innerHTML = ""; // 기존 목록 비우기

  if (cartItems.length === 0) {
    cartItemsList.innerHTML = "<li>장바구니가 비어 있습니다.</li>";
  } else {
    cartItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.price}원`;

      // 제거 버튼 추가
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "제거";
      removeBtn.addEventListener("click", () => {
        removeFromCart(item.name); // 제거 함수 호출
      });

      listItem.appendChild(removeBtn); // 리스트 아이템에 제거 버튼 추가
      cartItemsList.appendChild(listItem);
    });
  }
}

// 장바구니에서 상품을 제거하는 함수
function removeFromCart(productName) {
  const existingItemIndex = cartItems.findIndex((item) => item.name === productName);
  if (existingItemIndex !== -1) {
    cartItems.splice(existingItemIndex, 1); // 상품 제거
    updateCartPopup(); // 장바구니 팝업 업데이트
    showNotification(`${productName}이(가) 장바구니에서 제거되었습니다!`);
  }
}

// 카운터 업데이트 함수
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cartItems.length; // 카운터 텍스트를 장바구니 아이템 수로 업데이트
}

// 알림 메시지를 표시하는 함수
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message; // 알림 메시지 업데이트
  notification.style.display = "block"; // 알림 보이기
  notification.style.opacity = 1; // 완전히 불투명하게 설정
  setTimeout(() => {
    notification.style.opacity = 0; // 불투명도 감소
    setTimeout(() => {
      notification.style.display = "none"; // 0.6초 후에 숨기기
    }, 300);
  }, 2000); // 2초 후에 사라지기 시작
}

// 장바구니 팝업을 닫는 함수
function closeCartPopup() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display = "none"; // 팝업 숨김
}

// Top 버튼의 표시 여부를 토글하는 함수
function toggleTopButtonVisibility(topBtn) {
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
