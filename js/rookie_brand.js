var swiper = new Swiper('.brand-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function changeImage(mainImageId, subImageElement) {
    var mainImage = document.getElementById(mainImageId);
    mainImage.src = subImageElement.src; // 서브 이미지를 클릭하면 메인 이미지로 변경
  }