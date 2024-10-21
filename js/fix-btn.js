document.addEventListener("DOMContentLoaded", function () {
    const cartBtn = document.querySelector('.cart-btn a');
    const csBtn = document.querySelector('.cs-btn');
    const topBtn = document.querySelector('.top-btn');
    
    // 장바구니 버튼 클릭 시
    cartBtn.addEventListener('click', function (event) {
      event.preventDefault(); // 기본 링크 동작 방지
      alert("장바구니에 상품을 추가하였습니다!"); // 경고 메시지 표시
    });
  
    // 고객센터 버튼 클릭 시
    csBtn.addEventListener('click', function () {
      alert("고객센터에 문의해 주십시오.\n연락처: 123-456-7890"); // 고객센터 정보 표시
    });
  
    // 스크롤 시 Top 버튼 표시 및 숨김
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) { // 200px 이상 스크롤 시
        topBtn.style.display = 'block'; // Top 버튼 표시
      } else {
        topBtn.style.display = 'none'; // Top 버튼 숨김
      }
    });
  
    // Top 버튼 클릭 시 페이지 상단으로 스크롤
    topBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤 효과
      });
    });
  });
  