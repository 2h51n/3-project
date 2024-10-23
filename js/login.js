$(document).ready(function () {
  // 로그인 모달 열기
  $(".loginBt a").on("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지
    $("#loginModal").fadeIn(300); // 로그인 모달을 부드럽게 표시
  });

  // 로그인 모달 열기 (회원가입 모달에서 돌아오는 경우)
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

  // 네이버 로그인 버튼 클릭 이벤트
  $(".naver-login").on("click", function () {
    alert("네이버 로그인 버튼 클릭!");
  });

  // 카카오 로그인 버튼 클릭 이벤트
  $(".kakao-login").on("click", function () {
    alert("카카오 로그인 버튼 클릭!");
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
      $("#registerModal .selected-form").html(`<p>${userType} 가입 양식</p>`); // 선택한 유형에 맞는 텍스트 설정
      $("#registerModal").fadeIn(300); // 회원가입 모달 열기
    });
  });

  // 회원가입 폼에서 로그인 모달로 돌아가기
  $(".open-login").on("click", function (event) {
    event.preventDefault();
    $("#registerModal").fadeOut(300, function () {
      $("#loginModal").fadeIn(300); // 로그인 모달 다시 열기
    });
  });

  // 모달 닫기 버튼 클릭 시 모달 닫기
  $(".close-btn").on("click", function () {
    $(".modal").fadeOut(300); // 모든 모달 닫기
  });

  // 모달 외부 클릭 시 모달 닫기
  $(window).on("click", function (event) {
    if ($(event.target).is(".modal")) {
      $(".modal").fadeOut(300); // 모달 숨김
    }
  });
});
