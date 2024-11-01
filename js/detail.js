window.addEventListener("load", () => {
  const descriptionTab = document.getElementById("description-tab");
  const brandTab = document.getElementById("brand-tab");
  const descriptionContent = document.getElementById("detail-description");
  const brandContent = document.getElementById("detail-brand");
  const tabContainer = document.getElementById("detail-tab-container");

  // Add event listeners for tab clicks
  descriptionTab.addEventListener("click", () => {
    descriptionContent.style.display = "block";
    brandContent.style.display = "none";
    descriptionTab.style.fontWeight = "800";
    brandTab.style.fontWeight = "100";
    descriptionTab.classList.add("active");
    brandTab.classList.remove("active");
  });

  brandTab.addEventListener("click", () => {
    descriptionContent.style.display = "none";
    brandContent.style.display = "block";
    descriptionTab.style.fontWeight = "100";
    brandTab.style.fontWeight = "800";
    brandTab.classList.add("active");
    descriptionTab.classList.remove("active");
  });

  tabContainer.addEventListener("click", () => {
    descriptionContent.style.display = "none";
    brandContent.style.display = "block";
    brandTab.classList.add("active");
    descriptionTab.classList.remove("active");
  });
});
function changeImage(mainImgId, thumbnail) {
  // 메인 이미지의 src를 썸네일의 src로 변경
  document.getElementById(mainImgId).src = thumbnail.src;
}
