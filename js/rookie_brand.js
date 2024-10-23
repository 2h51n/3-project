function changeImage(mainImageId, subImageElement) {
  var $mainImage = $('#' + mainImageId); // jQuery로 메인 이미지 선택
  $mainImage.attr('src', $(subImageElement).attr('src')); // 서브 이미지를 클릭하면 메인 이미지로 변경
}