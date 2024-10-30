// 장바구니 아이템 배열
let cartItems = [];

// DOMContentLoaded 이벤트 리스너
document.addEventListener("DOMContentLoaded", function () {
  initializeEventListeners(); // 이벤트 리스너 초기화
  AOS.init(); // AOS 초기화

  // 세션 스토리지에서 장바구니 데이터 가져와서 cartItems 초기화
  const storedCartItems = sessionStorage.getItem("cartItems");
  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems); // 세션 스토리지 데이터를 cartItems 배열로 변환하여 할당
    updateCartCount(); // 카운터 업데이트
    updateCartPopup(); // 장바구니 팝업 업데이트
  }
});

// 이벤트 리스너를 초기화하는 함수
function initializeEventListeners() {
  const cartBtn = document.querySelector(".cart-btn a");
  const csBtn = document.querySelector(".cs-btn");
  const topBtn = document.querySelector(".top-btn");
  const cartIcon = document.querySelector(".cart-icon");

  // 장바구니 버튼 클릭 시
  cartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showCartPopup();
  });

  // 카트 아이콘 클릭 시 장바구니 팝업 닫기
  cartIcon.addEventListener("click", function () {
    closeCartPopup();
  });

  // 고객센터 버튼 클릭 시 소셜 아이콘 표시/숨김
  csBtn.addEventListener("click", function () {
    const socialIcons = document.querySelector(".social-icons");
    const isVisible = socialIcons.style.display === "flex";
    socialIcons.style.display = isVisible ? "none" : "flex";
    if (!isVisible) {
      socialIcons.style.opacity = 0;
      setTimeout(() => {
        socialIcons.style.transition = "opacity 0.3s";
        socialIcons.style.opacity = 1;
      }, 10);
    } else {
      socialIcons.style.opacity = 0;
      setTimeout(() => {
        socialIcons.style.display = "none";
      }, 300);
    }
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

// 장바구니에 아이템을 추가하는 함수
function addToCart(productName, productPrice) {
  const newItem = { name: productName, price: productPrice };
  cartItems.push(newItem);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems)); // 세션 스토리지에 저장
  updateCartCount();
  updateCartPopup();
  showNotification(`${productName}이(가) 장바구니에 추가되었습니다!`);

  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.classList.add("shake-animation");
  setTimeout(() => {
    cartIcon.classList.remove("shake-animation");
  }, 600);
}

// 장바구니 팝업을 여는 함수
function showCartPopup() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display = "flex";
  updateCartPopup();
}

// 장바구니 내용을 업데이트하는 함수
function updateCartPopup() {
  const cartItemsList = document.getElementById("cartItemsList");
  cartItemsList.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsList.innerHTML = "<li>장바구니가 비어 있습니다.</li>";
  } else {
    cartItems.forEach((item) => {
      const listItem = document.createElement("li");
      const listItemP = document.createElement("p");

      listItemP.textContent = `${item.name} - ${item.price}원`;
      listItem.appendChild(listItemP);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "제거";
      removeBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        removeFromCart(item.name);
      });

      listItem.appendChild(removeBtn);
      cartItemsList.appendChild(listItem);
    });
  }
}

// 장바구니에서 상품을 제거하는 함수
function removeFromCart(productName) {
  const existingItemIndex = cartItems.findIndex((item) => item.name === productName);
  if (existingItemIndex !== -1) {
    cartItems.splice(existingItemIndex, 1);
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems)); // 세션 스토리지에 업데이트
    updateCartCount();
    updateCartPopup();
    showNotification(`${productName}이(가) 장바구니에서 제거되었습니다!`);

    const cartIcons = document.querySelectorAll(".cart-icon");
    cartIcons.forEach((icon) => {
      if (icon.dataset.productName === productName) {
        icon.src = "images/like/cart_plus.png";
      }
    });
  }
}

// 카운터 업데이트 함수
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cartItems.length;
}

// 알림 메시지를 표시하는 함수
function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  notification.style.opacity = 1;
  setTimeout(() => {
    notification.style.opacity = 0;
    setTimeout(() => {
      notification.style.display = "none";
    }, 300);
  }, 2000);
}

// 장바구니 팝업을 닫는 함수
function closeCartPopup() {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display = "none";
}

// Top 버튼의 표시 여부를 토글하는 함수
function toggleTopButtonVisibility(topBtn) {
  if (window.innerWidth > 480) {
    if (window.scrollY > 100) {
      topBtn.style.display = "block";
      topBtn.style.opacity = 1;
    } else {
      topBtn.style.opacity = 0;
      setTimeout(() => {
        topBtn.style.display = "none";
      }, 500);
    }
  } else {
    topBtn.style.display = "none";
  }
}

// 페이지 상단으로 스크롤하는 함수
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
