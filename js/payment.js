// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shippingForm');
    const paymentOptions = document.querySelectorAll('.payment-options input');
    const paymentMessage = document.querySelector('.payment-message');
    const couponInput = document.getElementById('couponCode');
    const applyCouponBtn = document.getElementById('applyCoupon');
    const couponMessage = document.querySelector('.coupon-message');
  
    // 폼 제출 시 유효성 검사
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('배송 정보가 저장되었습니다!');
    });
  
    // 결제 옵션 선택 시 메시지 표시
    paymentOptions.forEach(option => {
      option.addEventListener('change', () => {
        paymentMessage.textContent = `${option.value} 결제 방식이 선택되었습니다.`;
      });
    });
  
    // 쿠폰 코드 적용
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim();
      if (code === 'DISCOUNT10') {
        couponMessage.textContent = '10% 할인이 적용되었습니다!';
      } else {
        couponMessage.textContent = '유효하지 않은 쿠폰 코드입니다.';
        couponMessage.style.color = 'red';
      }
    });
  });
  