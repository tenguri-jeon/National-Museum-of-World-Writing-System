import data from './data.js';
import videoData from './videoData.js';

//서브페이지의 공통부분
const subVisual = () => {};
const subText = () => {};
const subBanner = () => {};

// 페이지별 함수
//sub1
//sub2
const subTab = () => {};
//sub3
const gallery = () => {};

//sub4
const videoList = () => {};

//sub5

const sub1 = () => {};
const sub2 = () => {
    subTab();
};
const sub3 = () => {
    gallery();
};
const sub4 = () => {
    videoList();
};
const sub5 = () => {};

//
const subInit = () => {
    subVisual();
    subText();
    subBanner();

    //페이지별 sub 함수호출
    if (location.pathname.split('/').pop() === 'sub1.html') {
        sub1();
    }
    if (location.pathname.split('/').pop() === 'sub2.html') {
        sub2();
    }
    if (location.pathname.split('/').pop() === 'sub3.html') {
        sub3();
    }
    if (location.pathname.split('/').pop() === 'sub4.html') {
        sub4();
    }
    if (location.pathname.split('/').pop() === 'sub5.html') {
        sub5();
    }
};

(() => {
    subInit();
})();
