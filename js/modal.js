$(document).ready(function () {
  var $modal = $("#myModal");
  var $closeButton = $(".close-btn");
  var $notTodayCheckbox = $("#notTodayCheck");
  var $timerDisplay = $("#timer");
  var timeLeft = 5; // 5초

  // 쿠키 확인 함수
  function getCookie(name) {
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArr = decodedCookie.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (cookiePair[0] === name) {
        return cookiePair[1];
      }
    }
    return "";
  }

  // 쿠키 설정 함수
  function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  // 타이머 함수
  function startTimer() {
    var timerInterval = setInterval(function () {
      $timerDisplay.text(`${timeLeft}초 남았습니다.`); // 타이머 표시

      // 시간이 다 되었을 때
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        $modal.hide(); // 모달 숨기기
        console.log("타이머가 종료되었습니다."); // 확인 로그
      }

      timeLeft--; // 남은 시간 감소
    }, 1000); // 1초마다 업데이트
  }

  // 페이지 로드 시 쿠키 확인: '오늘 하루 열지 않음'이 체크되어 있으면 팝업을 띄우지 않음
  if (getCookie("notToday") !== "true") {
    $modal.show(); // 쿠키가 없으면 모달 표시
    startTimer(); // 타이머 시작
  }

  // 닫기 버튼 클릭 시 모달 닫기
  $closeButton.click(function () {
    $modal.hide(); // 모달 숨기기
    if ($notTodayCheckbox.is(":checked")) {
      setCookie("notToday", "true", 1); // 1일 동안 유지되는 쿠키 설정
      console.log("오늘 하루 열지 않기 설정됨"); // 확인 로그
    } else {
      console.log("오늘 하루 열지 않기 설정되지 않음"); // 확인 로그
    }
  });

  // 모달 바깥 클릭 시 모달 닫기
  $(window).click(function (event) {
    if ($(event.target).is($modal)) {
      $modal.hide(); // 모달 숨기기
    }
  });
});
