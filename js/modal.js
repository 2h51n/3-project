document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const closeBtn = document.querySelector(".close-btn");
  const notTodayCheckbox = document.getElementById("notToday");

  // 모달 표시 (페이지 로드 시)
  if (!localStorage.getItem("modalClosed")) {
    modal.style.display = "block"; // 로컬스토리지에 해당 항목이 없으면 모달 표시
  }

  // 닫기 버튼 클릭 시 모달 닫기
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none"; // 모달 숨기기
    if (notTodayCheckbox.checked) {
      localStorage.setItem("modalClosed", "true"); // 체크박스가 체크되면 로컬스토리지에 설정
    }
  });

  // 모달 바깥 클릭 시 모달 닫기
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none"; // 모달 숨기기
    }
  });
});
