const listBox = document.querySelectorAll("#vision .vision_wrap .list_box");

const item1 = document.querySelectorAll(
  "#vision .vision_wrap .list_box .list_item .item:nth-child(1)"
);
const item2 = document.querySelectorAll(
  "#vision .vision_wrap .list_box .list_item .item:nth-child(2)"
);
const item3 = document.querySelectorAll(
  "#vision .vision_wrap .list_box .list_item .item:nth-child(3)"
);
const item4 = document.querySelectorAll(
  "#vision .vision_wrap .list_box .list_item .item:nth-child(4)"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  },
  { threshold: 0.1 }
);
const observer1 = new IntersectionObserver(
  (entries) => {
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
    rootMargin: "20px",
    threshold: 0.1,
  }
);

listBox.forEach((element) => {
  observer.observe(element);
});

item1.forEach((element) => {
  observer1.observe(element);
});
item2.forEach((element) => {
  observer1.observe(element);
});
item3.forEach((element) => {
  observer1.observe(element);
});
item4.forEach((element) => {
  observer1.observe(element);
});
