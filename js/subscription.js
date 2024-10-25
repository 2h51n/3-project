$(document).ready(function () {
  const form = $("#subscriptionForm");
  const notification = $("#notification");

  form.on("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작 방지
    let isValid = true;
    let errorMessages = []; // 오류 메시지 저장 배열

    // 성함 유효성 검사 (한글 2자 이상, 띄어쓰기 금지)
    const nameInput = $("#name");
    const namePattern = /^[가-힣]{2,}$/; // 한글 2자 이상
    if (!namePattern.test(nameInput.val())) {
      errorMessages.push("유효한 이름을 입력하세요.");
      nameInput.addClass("error");
      isValid = false;
    } else {
      nameInput.removeClass("error");
    }

    // 전화번호 유효성 검사 (형식: 010-1234-5678)
    const phoneInput = $("#phone");
    const phonePattern = /^\d{3}-\d{4}-\d{4}$/; // 전화번호 형식
    if (!phonePattern.test(phoneInput.val())) {
      errorMessages.push("전화번호 형식이 올바르지 않습니다.");
      phoneInput.addClass("error");
      isValid = false;
    } else {
      phoneInput.removeClass("error");
    }

    // 이메일 유효성 검사
    const emailInput = $("#email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식
    if (!emailPattern.test(emailInput.val())) {
      errorMessages.push("유효한 이메일을 입력하세요.");
      emailInput.addClass("error");
      isValid = false;
    } else {
      emailInput.removeClass("error");
    }

    // 오류 메시지를 한 화면에 모두 표시
    if (errorMessages.length > 0) {
      displayNotification(errorMessages.join("  ")); // 모든 메시지를 마침표로 구분하여 연결
    }

    // 모든 검사가 통과된 경우
    if (isValid) {
      displayNotification("구독 신청이 완료되었습니다!");
      form[0].reset(); // 폼 초기화
    }
  });

  // 알림 메시지를 표시하는 함수
  function displayNotification(message) {
    // 화면 크기가 1024px 이하일 때 마침표 기준으로 줄바꿈
    if (window.innerWidth <= 1024) {
      let formattedMessage = message.split(".").join(".<br>"); // 마침표를 기준으로 줄바꿈 추가
      notification.html(formattedMessage).fadeIn(300).delay(5000).fadeOut(300); // 5초 동안 알림 표시
    } else {
      notification.text(message).fadeIn(300).delay(5000).fadeOut(300); // 기본 알림
    }
  }
});
