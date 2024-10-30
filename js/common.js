// SNS 아이콘 표시 및 숨기기 함수
function toggleSocialIcons() {
    const socialIcons = document.querySelector(".social-icons");
    if (!socialIcons) return; // socialIcons 요소가 없으면 함수 종료
    
    const isVisible = socialIcons.style.display === "flex"; // 현재 표시 여부 확인
    
    if (!isVisible) {
      socialIcons.style.display = "flex";
      socialIcons.style.opacity = 0;
      setTimeout(() => {
        socialIcons.style.transition = "opacity 0.3s";
        socialIcons.style.opacity = 1;
      }, 10);
    } else {
      socialIcons.style.opacity = 0;
      setTimeout(() => {
        socialIcons.style.display = "none";
      }, 300);
    }
  }
  
  // 이벤트 리스너 초기화
  document.addEventListener("DOMContentLoaded", function () {
    const csBtn = document.querySelector(".cs-btn");
    if (csBtn) {
      csBtn.addEventListener("click", toggleSocialIcons);
    }
  });
  