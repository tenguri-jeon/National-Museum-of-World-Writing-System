document.addEventListener("DOMContentLoaded", function () {
  let left_tg = document.querySelector(".guide_wrap .left_txt");
  let right_tg = document.querySelector(".guide_wrap .right_txt");

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //스크린에 해당 컨텐츠가 없을 경우
          entry.target.classList.remove("show");
        } else {
          // 스크린에 해당 컨텐츠가 있을 경우
          entry.target.classList.add("show");
        }
      });
    },
    {
      root: null,
      rootMargin: "500px",
      threshold: 0.8,
    }
  );

  observer.observe(left_tg);
  observer.observe(right_tg);
});
