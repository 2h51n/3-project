document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscriptionForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 방지
    let isValid = true;

    // 성함 유효성 검사 (한글 2자 이상, 띄어쓰기 금지)
    const nameInput = document.getElementById("name");
    const namePattern = /^[가-힣]{2,}$/; // 한글 2자 이상
    if (!namePattern.test(nameInput.value)) {
      nameInput.value = "유효한 이름을 입력하세요."; // 에러 메시지 설정
      nameInput.classList.add("error"); // 에러 클래스 추가
      nameInput.style.color = "red"; // 폰트 색상 레드로 설정
      isValid = false;

      // 클릭 시 에러 메시지 삭제
      nameInput.addEventListener("focus", function () {
        if (nameInput.value === "유효한 이름을 입력하세요.") {
          nameInput.value = ""; // 메시지 지우기
          nameInput.classList.remove("error"); // 에러 클래스 제거
          nameInput.style.color = ""; // 기본 색상으로 복구
        }
      });
    } else {
      nameInput.classList.remove("error"); // 에러 클래스 제거
      nameInput.style.color = ""; // 기본 색상으로 복구
    }

    // 전화번호 유효성 검사 (형식: 010-1234-5678)
    const phoneInput = document.getElementById("phone");
    const phonePattern = /^\d{3}-\d{4}-\d{4}$/; // 전화번호 형식
    if (!phonePattern.test(phoneInput.value)) {
      phoneInput.value = "전화번호 형식이 올바르지 않습니다."; // 에러 메시지 설정
      phoneInput.classList.add("error"); // 에러 클래스 추가
      phoneInput.style.color = "red"; // 폰트 색상 레드로 설정
      isValid = false;

      // 클릭 시 에러 메시지 삭제
      phoneInput.addEventListener("focus", function () {
        if (phoneInput.value === "전화번호 형식이 올바르지 않습니다.") {
          phoneInput.value = ""; // 메시지 지우기
          phoneInput.classList.remove("error"); // 에러 클래스 제거
          phoneInput.style.color = ""; // 기본 색상으로 복구
        }
      });
    } else {
      phoneInput.classList.remove("error"); // 에러 클래스 제거
      phoneInput.style.color = ""; // 기본 색상으로 복구
    }

    // 이메일 유효성 검사
    const emailInput = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식
    if (!emailPattern.test(emailInput.value)) {
      emailInput.value = "유효한 이메일을 입력하세요."; // 에러 메시지 설정
      emailInput.classList.add("error"); // 에러 클래스 추가
      emailInput.style.color = "red"; // 폰트 색상 레드로 설정
      isValid = false;

      // 클릭 시 에러 메시지 삭제
      emailInput.addEventListener("focus", function () {
        if (emailInput.value === "유효한 이메일을 입력하세요.") {
          emailInput.value = ""; // 메시지 지우기
          emailInput.classList.remove("error"); // 에러 클래스 제거
          emailInput.style.color = ""; // 기본 색상으로 복구
        }
      });
    } else {
      emailInput.classList.remove("error"); // 에러 클래스 제거
      emailInput.style.color = ""; // 기본 색상으로 복구
    }

    // 모든 검사가 통과된 경우
    if (isValid) {
      alert("구독 신청이 완료되었습니다!");
      form.reset(); // 폼 초기화
    }
  });
});
