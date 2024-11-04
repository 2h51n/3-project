$(document).ready(function () {
  // 페이지가 로드될 때 로그인 상태 확인
  checkLoginStatus();

  // 로그인 아이콘 클릭 이벤트
  $(".loginBt a").on("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지
    const loginStatus = localStorage.getItem("loginStatus");

    if (!loginStatus) {
      $("#loginModal").fadeIn(300); // 로그인 모달을 부드럽게 표시
    }
  });

  // '마이 아이콘' 클릭 이벤트
  $(".loginBt_my a").on("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지
    const loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      showWelcomePopup(); // 로그인된 경우 환영 팝업 표시
    } else {
      showNotification("로그인 상태가 <br>아닙니다."); // 로그인되지 않은 경우 알림 표시
    }
  });

  // 로그인 모달 열기
  $(".open-login").on("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지
    $("#registerModal").fadeOut(300, function () {
      $("#loginModal").fadeIn(300); // 회원가입 모달이 닫힌 후 로그인 모달 열기
    });
  });

  // 모달 닫기 버튼 클릭 시 모달 닫기
  $(".close-btn").on("click", function () {
    $(".modal").fadeOut(300); // 현재 열린 모달을 부드럽게 숨김
  });

  // 모달 바깥쪽 클릭 시 모달 닫기
  $(window).on("click", function (event) {
    if ($(event.target).is(".modal")) {
      $(".modal").fadeOut(300); // 모달을 부드럽게 숨김
    }
  });

  // 소셜 로그인 버튼 클릭 이벤트
  $(".naver-login").on("click", function () {
    handleSocialLogin("네이버");
  });

  $(".kakao-login").on("click", function () {
    handleSocialLogin("카카오");
  });

  // 로그인에서 회원가입 클릭 시 가입 유형 선택 모달로 전환
  $(".open-register").on("click", function (event) {
    event.preventDefault();
    $("#loginModal").fadeOut(300, function () {
      $("#userTypeModal").fadeIn(300); // 가입 유형 모달 열기
    });
  });

  // 가입 유형 선택 후 회원가입 폼으로 전환
  $(".user-type-btn").on("click", function () {
    const userType = $(this).hasClass("individual") ? "일반 회원" : "사업자 회원";
    $("#userTypeModal").fadeOut(300, function () {
      $("#registerModal .selected-form").html(`<button type="button" class="register-button">ID/PW로 회원가입 (${userType})</button>`); // 선택한 유형에 맞는 텍스트 설정
      $("#registerModal").fadeIn(300); // 회원가입 모달 열기
    });
  });

  // 회원가입 버튼 클릭 시 약관 동의 모달로 이동
  $(document).on("click", ".register-button", function (event) {
    event.preventDefault(); // 기본 폼 제출 방지
    $("#registerModal").fadeOut(300, function () {
      $("#termsModal").fadeIn(300); // 약관 동의 모달 열기
    });
  });

  // 약관 동의 후 회원가입 처리
  $("#termsForm").on("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 방지
    if ($("#termsAgree").is(":checked")) {
      $("#termsModal").fadeOut(300, function () {
        $("#signupModal").fadeIn(300); // ID/PW 회원가입 모달 열기
      });
    } else {
      showNotification("약관에 동의해야 <br>회원가입이 가능합니다.");
    }
  });

  // 회원가입 폼 제출 처리
  $("#signupForm").on("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 방지
    const userId = $("#signupId").val();
    const userEmail = $("#signupEmail").val();
    const userPassword = $("#signupPassword").val();
    const userPhone = $("#signupPhone").val();

    // 로컬 스토리지에 저장 (예: 회원가입 정보)
    localStorage.setItem("userId", userId);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userPassword", userPassword);
    localStorage.setItem("userPhone", userPhone);

    showNotification("회원가입이 <br>완료되었습니다!");

    // 회원가입 완료 후 로그인 모달로 자동 전환
    $("#signupModal").fadeOut(300, function () {
      $("#loginModal").fadeIn(300); // 로그인 모달 열기
    });
  });

 // 로그인 상태 확인 함수
 function checkLoginStatus() {
  const loginStatus = localStorage.getItem("loginStatus");
  if (loginStatus) {
    // 로그인 상태일 경우
    showNotification(`${loginStatus}로 로그인되어 있습니다.`); // 로그인된 사용자 이름 또는 상태 표시
    $(".loginBt").hide(); // 로그인 아이콘 숨기기
    $(".loginBt_my").show(); // 마이 아이콘 표시
  } else {
    // 로그인 상태가 아닐 경우
    showNotification("로그인 상태가 아닙니다."); // 로그인 상태 알림
    $(".loginBt").show(); // 로그인 아이콘 표시
    $(".loginBt_my").hide(); // 마이 아이콘 숨기기
  }
}
  // 소셜 로그인 처리 함수
  function handleSocialLogin(provider) {
    showNotification(`${provider} 로그인 <br>버튼 클릭!`);
    saveLoginStatus(provider); // 로그인 후 상태 유지
  }

  // 로그인 상태 저장
  function saveLoginStatus(provider) {
    localStorage.setItem("loginStatus", provider); // 로그인 상태 저장
  }

  // 로그인 폼 제출 처리
  $("#loginForm").on("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 방지
    const userId = $("#userId").val();
    const userPassword = $("#password").val();

    // 예시: 로컬 스토리지에 저장된 정보와 비교
    const storedUserId = localStorage.getItem("userId");
    const storedUserPassword = localStorage.getItem("userPassword");

    if (userId === storedUserId && userPassword === storedUserPassword) {
      showNotification("로그인 성공!");
      saveLoginStatus("local"); // 로컬 로그인 상태 저장
      checkLoginStatus(); // 로그인 상태 확인 후 UI 업데이트
      $("#loginModal").fadeOut(300); // 로그인 모달 닫기
    } else {
      showNotification("아이디 또는 비밀번호가 <br>올바르지 않습니다."); // 로그인 실패 메시지
    }
  });

  // 환영 팝업 표시 함수
  function showWelcomePopup() {
    const userId = localStorage.getItem("userId");
    $("#welcomeMessage").html(`${userId}님 <br>환영합니다!`); // 사용자 아이디 표시
    $("#welcomePopup").fadeIn(300); // 팝업 표시

    // 5초 후 팝업 숨기기
    setTimeout(function () {
      $("#welcomePopup").fadeOut(300); // 5초 후 팝업 숨기기
    }, 5000);
  }

  // 환영 팝업 닫기 버튼 클릭 이벤트
  $(document).on("click", ".close-popup", function () {
    $("#welcomePopup").fadeOut(300); // 팝업 숨기기
  });

  // 로그아웃 버튼 클릭 이벤트
  $(document).on("click", ".logout-button", function () {
    localStorage.removeItem("loginStatus"); // 로그인 상태 제거
    showNotification("로그아웃 <br>되었습니다.");
    $("#welcomePopup").fadeOut(300); // 환영 팝업 숨기기
    checkLoginStatus(); // UI 업데이트
  });

  // 알림 표시 함수
  function showNotification(message) {
    const isMobile = window.innerWidth <= 480;
    const formattedMessage = isMobile ? message.replace(/\n/g, "<br>") : message; // 모바일에서 줄바꿈 변환
    $("#notification").html(formattedMessage).fadeIn(300); // 알림 표시
    setTimeout(function () {
      $("#notification").fadeOut(300); // 3초 후 알림 사라짐
    }, 3000);
  }

  // 알림 div 요소 스타일 적용
  $("#notification").css({
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fdd835",
    color: "black !important",
    padding: "10px 20px",
    borderRadius: "5px",
    zIndex: 1000,
    display: "none",
  });
});
