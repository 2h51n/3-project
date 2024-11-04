$(document).ready(function () {
  const form = $("#subscriptionForm");
  const subscriptionNotification = $("#subscriptionNotification");

  form.on("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    let errorMessages = [];

    const nameInput = $("#name");
    const namePattern = /^[가-힣]{2,}$/;
    if (!namePattern.test(nameInput.val())) {
      errorMessages.push("유효한 이름을 <br>입력하세요.");
      nameInput.addClass("error");
      isValid = false;
    } else {
      nameInput.removeClass("error");
    }

    const phoneInput = $("#phone");
    const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
    if (!phonePattern.test(phoneInput.val())) {
      errorMessages.push("<br>전화번호 형식이 <br>올바르지 않습니다.");
      phoneInput.addClass("error");
      isValid = false;
    } else {
      phoneInput.removeClass("error");
    }

    const emailInput = $("#email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.val())) {
      errorMessages.push("<br>유효한 이메일을 <br>입력하세요.");
      emailInput.addClass("error");
      isValid = false;
    } else {
      emailInput.removeClass("error");
    }

    if (errorMessages.length > 0) {
      displaySubscriptionNotification(errorMessages.join("  "));
    }

    if (isValid) {
      displaySubscriptionNotification("구독 신청이 <br>완료되었습니다!");
      form[0].reset();
    }
  });

  function displaySubscriptionNotification(message) {
    let formattedMessage = message;

    // 화면 너비에 따른 줄바꿈 설정
    if (window.innerWidth <= 360 || window.innerWidth <= 768) {
      formattedMessage = message.split(".").join(".<br>");
    } 

    subscriptionNotification.html(formattedMessage).fadeIn(300).delay(5000).fadeOut(300);
  }

  subscriptionNotification.css({
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fdd835",
    color: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    zIndex: 1000,
    display: "none",
  });
});
