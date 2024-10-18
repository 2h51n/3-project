document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscriptionForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 방지
    let isValid = true;

    // 성함 유효성 검사 (한글 2자 이상, 띄어쓰기 금지)
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const namePattern = /^[가-힣]{2,}$/; // 한글 2자 이상
    if (!namePattern.test(nameInput.value)) {
      nameError.textContent = "유효한 이름을 입력하세요.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // 전화번호 유효성 검사 (형식: 010-1234-5678)
    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    const phonePattern = /^\d{3}-\d{4}-\d{4}$/; // 전화번호 형식
    if (!phonePattern.test(phoneInput.value)) {
      phoneError.textContent = "전화번호 형식이 올바르지 않습니다.";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // 이메일 유효성 검사
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "유효한 이메일을 입력하세요.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // 모든 검사가 통과된 경우
    if (isValid) {
      alert("구독 신청이 완료되었습니다!");
      form.reset(); // 폼 초기화
    }
  });
});
