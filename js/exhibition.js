const em = document.querySelectorAll(
  "#exhibition .aos_wrap .intro_box .layout .list .titbox em"
);
const strong = document.querySelectorAll(
  "#exhibition .aos_wrap .intro_box .layout .list .titbox strong"
);
const p = document.querySelectorAll(
  "#exhibition .aos_wrap .intro_box .layout .list .titbox p"
);

const item1 = document.querySelectorAll(
  "#exhibition .aos_wrap .intro_box .layout .list .picList .item:nth-child(1)"
);
const item2 = document.querySelectorAll(
  "#exhibition .aos_wrap .intro_box .layout .list .picList .item:nth-child(2)"
);
const item3 = document.querySelectorAll(
  "#exhibition .aos_wrap .intro_box .layout .list .picList .item:nth-child(3)"
);
const item4 = document.querySelectorAll(
  "#exhibition .aos_wrap .intro_box .layout .list .picList .item:nth-child(4)"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  },
  {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
  }
);

item1.forEach((element) => {
  observer.observe(element);
});
item2.forEach((element) => {
  observer.observe(element);
});
item3.forEach((element) => {
  observer.observe(element);
});
item4.forEach((element) => {
  observer.observe(element);
});
em.forEach((element) => {
  observer.observe(element);
});
strong.forEach((element) => {
  observer.observe(element);
});
p.forEach((element) => {
  observer.observe(element);
});

let contents = document.querySelector(
  "#exhibition .aos_wrap .intro_box .layout .motionbox .intro_map"
);

function fadeOutOnScroll(element) {
  let inner = document.querySelector(
    "#exhibition .aos_wrap .intro_box .intro_map .inner"
  );
  if (!element) {
    return;
  }
  var distanceToTop = element.offsetTop;
  var scrollTop = window.pageYOffset;

  if (scrollTop >= distanceToTop) {
    element.style.width = "100%";
    inner.style.backgroundColor = `rgba(0,0,0,${
      (Number(scrollPer) + 30) / 100
    })`;
  }
  var scrollPer = (
    (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) *
    100
  ).toFixed(0);
  console.log(Number(scrollPer) + 10);

  if (scrollPer == 0) {
    element.style.width = "70%";
    inner.style.backgroundColor = `rgba(0,0,0,0)`;
  } else {
    inner.style.backgroundColor = `rgba(0,0,0,${
      (Number(scrollPer) + 30) / 100
    })`;
  }
}
function scrollHandler() {
  fadeOutOnScroll(contents);
}
window.addEventListener("scroll", scrollHandler);
// https://junuda.com/javascript-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%A0%95%EB%8F%84%EC%97%90-%EB%B9%84%EB%A1%80%ED%95%9C-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%ED%9A%A8%EA%B3%BC/
