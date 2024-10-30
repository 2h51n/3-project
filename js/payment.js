window.onload = () => {
  const form = document.getElementById("shippingForm");
  const paymentOptions = document.querySelectorAll(".payment-options input");
  const paymentMessage = document.querySelector(".payment-message");
  const couponInput = document.getElementById("couponCode");
  const applyCouponBtn = document.getElementById("applyCoupon");
  const couponMessage = document.querySelector(".coupon-message");

  // 폼 유효성 검사
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value.trim();
    const address = document.querySelector('input[name="address"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();

    if (!name || !address || !email) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    alert("배송 정보가 저장되었습니다!");
  });

  // 이메일 유효성 검사 함수
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // 결제 옵션 선택 시 메시지 표시
  paymentOptions.forEach((option) => {
    option.addEventListener("change", () => {
      paymentMessage.textContent = `${option.value} 결제 방식이 선택되었습니다.`;
    });
  });

  // 쿠폰 코드 적용
  applyCouponBtn.addEventListener("click", () => {
    const code = couponInput.value.trim();
    if (code === "DISCOUNT10") {
      couponMessage.textContent = "10% 할인이 적용되었습니다!";
      couponMessage.style.color = "green";
    } else {
      couponMessage.textContent = "유효하지 않은 쿠폰 코드입니다.";
      couponMessage.style.color = "red";
    }
  });

  // 세션 스토리지에서 카트 아이템 불러오기
  const storedCartItems = sessionStorage.getItem("cartItems");
  const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

  // 결제 화면에 카트 아이템 표시
  displayCartItems(cartItems);
};

// 카트 아이템을 결제 화면에 표시하는 함수
function displayCartItems(cartItems) {
  const orderSummaryElement = document.querySelector(".order-summary");

  // 기존 내용 초기화
  orderSummaryElement.innerHTML = "";

  cartItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("product-info");
    itemElement.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}" class="product-image" />
      <p>${item.name}</p>
      <p>가격: <strong>${item.price}원</strong></p>
    `;
    orderSummaryElement.appendChild(itemElement);
  });
}
