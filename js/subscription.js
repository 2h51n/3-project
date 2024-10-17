document.getElementById("subscriptionForm").addEventListener("submit", function (event) {
  event.preventDefault(); // 기본 제출 동작 방지
  let isValid = true;

  // 성함 유효성 검사 (한글 2자 이상, 띄어쓰기 금지)
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const namePattern = /^[가-힣]{2,}$/; // 한글 2자 이상
  if (!namePattern.test(nameInput.value)) {
    nameError.textContent = "성함은 한글로 최소 2자 이상 입력해 주세요.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // 전화번호 유효성 검사 (010, 011로 시작하는 10-11자리 번호)
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const phonePattern = /^01[0|1|6|7|8|9][0-9]{7,8}$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneError.textContent = "유효한 전화번호를 입력해 주세요. (010 또는 011로 시작)";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }

  // 이메일 유효성 검사 (기본 이메일 형식)
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "유효한 이메일 주소를 입력해 주세요.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // 모든 유효성 검사를 통과한 경우
  if (isValid) {
    alert("폼이 성공적으로 제출되었습니다!");
  }
});
