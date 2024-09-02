//비주얼배너
const mainBanner = () => {};
//이벤트배너
const eventBanner = () => {};

//합치기
const mainInit = () => {
  mainBanner();
  eventBanner();
};

const mainVisual = () => {
  let ul = document.querySelector(".box ul");
  let lis = document.querySelectorAll("#visual .banner-wrap .main-banner li");
  let btns = document.querySelectorAll(".paging li");
  let box = document.querySelectorAll(".box");
  const $txt = getAll("#visual .banner-wrap .sec1_txt-wrap li");
  let totalImage = lis.length,
    interval = 5000,
    timer = null,
    current = 0,
    old = 0,
    liWidth = lis[0].clientWidth;

  btns.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      clearInterval(timer);
      current = idx;
      banner();
      timer = setInterval(() => {
        current = current >= totalImage - 1 ? 0 : current + 1;
        banner();
      }, interval);
    });
  });

  timer = setInterval(() => {
    current = current >= totalImage - 1 ? 0 : current + 1;
    banner();
  }, interval);

  function banner() {
    if (old !== current) {
      lis[current].style.left = `0px`;
      lis[current].style.zIndex = "10";
      lis[old].style.left = `${liWidth + 36}px`;
      lis[old].style.zIndex = `0`;
      Active(current);
      for (let i = 0; i < $txt.length; i++) {
        $txt[i].classList.remove("on");
      }
      $txt[current].classList.add("on");
      make(old);

      old = current;
    }
  }
  function make(x) {
    setTimeout(() => {
      lis[x].style.left = `${liWidth + 36}px`;
      lis[current].style.zIndex = "1";
    }, 500);
  }
  function Active(current) {
    btns.forEach((btn, idx) => {
      btn.classList.remove("on");
    });
    $txt.forEach((txt, idx) => {
      txt.classList.remove("on");
    });
    btns[current].classList.add("on");
    $txt[current].classList.add("on");
  }
};

const sec3Banner = () => {
  const $bannerli = getAll(".edu-card");
  const $next = get("#container #content .con2 .arrow-wrap i:nth-child(2)");
  const $prev = get("#container #content .con2 .arrow-wrap i:nth-child(1)");
  let current = 0,
    old = 0,
    totalImage = $bannerli.length,
    timer = null,
    interval = 5000,
    liWidth = $bannerli[0].clientWidth;

  timer = setInterval(() => {
    current = current <= 0 ? totalImage - 1 : current - 1;
    banner("next");
  }, interval);

  $next.addEventListener("click", (e) => {
    clearInterval(timer);
    current = current <= 0 ? totalImage - 1 : current - 1;
    banner("next");
    timer = setInterval(() => {
      current = current <= 0 ? totalImage - 1 : current - 1;
      banner("next");
    }, interval);
  });
  $prev.addEventListener("click", (e) => {
    clearInterval(timer);
    current = current <= 0 ? totalImage - 1 : current - 1;
    banner("prev");
    timer = setInterval(() => {
      current = current <= 0 ? totalImage - 1 : current - 1;
      banner("next");
    }, interval);
  });

  function banner(txt) {
    let num = txt === "next" ? +1 : -1;

    setTimeout(() => {
      if (num === -1) {
        let friend = current + num;
        friend = friend > 3 ? 0 : friend < 0 ? 3 : friend;
        let friend2 = friend + num;
        friend2 = friend2 > 3 ? 0 : friend2 < 0 ? 3 : friend2;

        // 첫번째가 맨 뒤로 가는,
        $bannerli.forEach((li, idx) => {
          li.style.transition = "0.4s";
        });
        $bannerli[old].style.transition = "0s";
        $bannerli[old].style.left = `100%`;
        // 다음꺼가 앞으로 나오는 부분
        $bannerli[current].style.zIndex = "1";
        $bannerli[current].style.left = "0px";
        $bannerli[current].style.transition = "0.4s";

        $bannerli[old].style.zIndex = "1";

        // 배너들 각자 위치에 맞게 설정
        $bannerli[friend].style.left = `${
          (liWidth + 64) * ($bannerli.length - 3)
        }px`;
        $bannerli[friend2].style.left = `${
          (liWidth + 64) * ($bannerli.length - 2)
        }px`;
        $bannerli[old].style.left = `${
          (liWidth + 64) * ($bannerli.length - 1)
        }px`;
      } else {
        nextBanner(current, old, num);
      }
      old = current;
    }, 20);
  }

  function nextBanner(current, old, num) {
    let friend = old + num;
    friend = friend > 3 ? 0 : friend < 0 ? 3 : friend;
    let friend2 = friend + num;
    friend2 = friend2 > 3 ? 0 : friend2 < 0 ? 3 : friend2;

    // 첫번째가 맨 뒤로 가는,
    $bannerli.forEach((li, idx) => {
      li.style.transition = "0.4s";
    });
    $bannerli[current].style.transition = "0s";
    $bannerli[current].style.left = `100%`;
    // 다음꺼가 앞으로 나오는 부분
    $bannerli[old].style.zIndex = "1";
    $bannerli[old].style.left = `${(liWidth + 64) * ($bannerli.length - 3)}px`;
    $bannerli[old].style.transition = "0.4s";

    $bannerli[current].style.zIndex = "1";

    $bannerli[friend].style.left = `${
      (liWidth + 64) * ($bannerli.length - 2)
    }px`;
    $bannerli[friend2].style.left = `${
      (liWidth + 64) * ($bannerli.length - 1)
    }px`;
    $bannerli[current].style.left = `${(liWidth + 64) * 0}px`;
  }
};

const sec4Bannerl = () => {
  const $pagingli = getAll(".con3-r-wrap .arrow-wrap ul li");
  const $bannerli = getAll(".con3_banner li");
  const $bannertxt = getAll(".contents-txt li");
  const $next = get(".con3-r-wrap .arrow-wrap .xi-long-arrow-right");
  const $prev = get(".con3-r-wrap .arrow-wrap .xi-long-arrow-left");
  const $bg = get("#container #content .con3");
  let current = 0,
    old = 0,
    totalImage = $bannerli.length,
    timer = null,
    liWidth = $bannerli[0].clientWidth,
    interval = 5000;

  timer = setInterval(() => {
    current = current <= 0 ? totalImage - 1 : current - 1;
    banner("prev");
  }, interval);

  $next.addEventListener("click", (e) => {
    clearInterval(timer);
    current = current <= 0 ? totalImage - 1 : current - 1;
    banner("next");
    timer = setInterval(() => {
      current = current <= 0 ? totalImage - 1 : current - 1;
      banner("next");
    }, interval);
  });
  $prev.addEventListener("click", (e) => {
    clearInterval(timer);
    current = current <= 0 ? totalImage - 1 : current - 1;
    banner("prev");
    timer = setInterval(() => {
      current = current <= 0 ? totalImage - 1 : current - 1;
      banner("next");
    }, interval);
  });

  function banner(txt) {
    let num = txt === "next" ? +1 : -1;

    setTimeout(() => {
      if (num === -1) {
        let friend = current + num;
        friend = friend > 3 ? 0 : friend < 0 ? 3 : friend;
        let friend2 = friend + num;
        friend2 = friend2 > 3 ? 0 : friend2 < 0 ? 3 : friend2;

        // 첫번째가 맨 뒤로 가는,
        $bannerli.forEach((li, idx) => {
          li.style.transition = "0.4s";
          li.classList.remove("active");
        });
        $bannerli[old].style.transition = "0s";
        $bannerli[old].style.left = `100%`;
        // 다음꺼가 앞으로 나오는 부분
        $bannerli[current].style.zIndex = "1";
        $bannerli[current].style.left = "0px";
        $bannerli[current].style.transition = "0.4s";
        $bannerli[current].classList.add("active");

        $bannerli[old].style.zIndex = "1";

        // 배너들 각자 위치에 맞게 설정
        $bannerli[friend].style.left = `${
          (liWidth + 23) * ($bannerli.length - 3)
        }px`;
        $bannerli[friend2].style.left = `${
          (liWidth + 23) * ($bannerli.length - 2)
        }px`;
        $bannerli[old].style.left = `${
          (liWidth + 23) * ($bannerli.length - 1)
        }px`;

        let className = String($bannerli[current].getAttribute("class"));
        backgroundControl(className);
      } else {
        nextBanner(current, old, num);
      }
      old = current;
    }, 20);
  }

  function nextBanner(current, old, num) {
    let friend = old + num;
    friend = friend > 3 ? 0 : friend < 0 ? 3 : friend;
    let friend2 = friend + num;
    friend2 = friend2 > 3 ? 0 : friend2 < 0 ? 3 : friend2;

    // 첫번째가 맨 뒤로 가는,
    $bannerli.forEach((li, idx) => {
      li.style.transition = "0.4s";
      li.classList.remove("active");
    });
    $bannerli[current].style.transition = "0s";
    $bannerli[current].style.left = `100%`;
    // 다음꺼가 앞으로 나오는 부분
    $bannerli[old].style.zIndex = "1";
    $bannerli[old].style.left = `${(liWidth + 23) * ($bannerli.length - 3)}px`;
    $bannerli[old].style.transition = "0.4s";

    $bannerli[current].style.zIndex = "1";

    $bannerli[friend].style.left = `${
      (liWidth + 23) * ($bannerli.length - 2)
    }px`;
    $bannerli[friend2].style.left = `${
      (liWidth + 23) * ($bannerli.length - 1)
    }px`;
    $bannerli[current].style.left = `${(liWidth + 23) * 0}px`;

    // 첫번째 자리로 가야함
    $bannerli[current].classList.add("active");

    // $bannerli[current].classList.remove('active');

    let className = String($bannerli[current].getAttribute("class"));
    backgroundControl(className);
  }

  function backgroundControl(className) {
    $bannertxt.forEach((txt) => {
      txt.classList.remove("active");
    });
    switch (className.slice(11, 12)) {
      case "1":
        $bg.style.background =
          "url(../images/main/main_sec4_Bimg1.png) no-repeat center / cover";
        $bg.animate([{ opacity: 0.8 }, { opacity: 1 }], 500);
        $bannertxt[0].classList.add("active");
        break;
      case "2":
        $bg.style.background =
          "url(../images/main/main_sec4_Bimg2.png) no-repeat center / cover";
        $bg.animate([{ opacity: 0.8 }, { opacity: 1 }], 500);
        $bannertxt[1].classList.add("active");
        break;
      case "3":
        $bg.style.background =
          "url(../images/main/main_sec4_Bimg3.png) no-repeat center / cover";
        $bg.animate([{ opacity: 0.8 }, { opacity: 1 }], 500);
        $bannertxt[2].classList.add("active");
        break;
      case "4":
        $bg.style.background =
          "url(../images/main/main_sec4_Bimg4.png) no-repeat center / cover";
        $bg.animate([{ opacity: 0.8 }, { opacity: 1 }], 500);
        $bannertxt[3].classList.add("active");
        break;

      default:
        alert("no");
        break;
    }
  }
};

const ani = () => {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.parentElement.classList.remove("bg");
        } else {
          entry.target.parentElement.classList.add("bg");
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  let target = document.querySelector("#visual .banner-wrap");
  let con4bg = document.querySelector("#container #content .con4 .inner");
  observer.observe(target);
  observer.observe(con4bg);

  // 왼쪽에서 나오는 이벤트
  let leftobserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("left-ani");
        } else {
          entry.target.classList.remove("left-ani");
        }
      });
    },
    {
      root: null,
      rootMargin: "1000px 0px 0px 0px",
      threshold: 0.5,
    }
  );

  let con1title = document.querySelector("#container #content .con1 h2");
  let con2title = document.querySelector("#container #content .con2 h2");
  let con1backgroundTxt = document.querySelector(".con1-background-txt");
  let con4theadTr = document.querySelector(
    "#container #content .con4 .inner table thead tr"
  );
  let con3lis = document.querySelector(
    "#container #content .con3 .inner .con3-r-wrap .con3-banner-wrap .con3_banner"
  );

  leftobserver.observe(con1title);
  leftobserver.observe(con2title);
  leftobserver.observe(con1backgroundTxt);
  leftobserver.observe(con4theadTr);
  leftobserver.observe(con3lis);

  let delaybserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("left-ani");
          }, 500);
        } else {
          // 클래스 추가에 지연 추가
          setTimeout(() => {
            entry.target.classList.remove("left-ani");
          }, 500);
        }
      });
    },
    {
      root: null,
      rootMargin: "1000px 0px 0px 0px",
      threshold: 0.5,
    }
  );
  let con1img = document.querySelector(
    "#container #content .con1 .container figure"
  );
  let con1backgroundRedTxt = document.querySelector(
    "#container #content .con1 strong"
  );
  let con1rightBox = document.querySelector(
    "#container #content .con1 .container .right-contents"
  );
  let con2contents = document.querySelector(
    "#container #content .con2 .sec2-banner ul"
  );
  let tbody = document.querySelector(
    "#container #content .con4 .inner table tbody"
  );

  leftobserver.observe(con1backgroundRedTxt);
  delaybserver.observe(con1img);
  delaybserver.observe(con1rightBox);
  delaybserver.observe(con2contents);
  delaybserver.observe(tbody);
};

(() => {
  sec3Banner();
  mainVisual();
  mainInit();
  sec4Bannerl();
  ani();
})();
