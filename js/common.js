const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
};

// 공통으로 들어가는 내용을 성격별로 함수로 만들기
const navi = () => {
    let header = get('#header');
    let nav = get('#header .nav');
    nav.addEventListener('mouseenter', (e) => {
        header.classList.add('active');
    });
    nav.addEventListener('mouseleave', (e) => {
    header.classList.remove('active');
    });
};
const familySite = () => {};

const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#header') {
                    get(tag).innerHTML = res;

                    navi();
                }
                if (tag === '#footer') {
                    get(tag).innerHTML = res;
                    familySite();
                }
            });
    };
    getPage('page/header.html', '#header');
    getPage('page/footer.html', '#footer');
};

(() => {
    preventDefaultAnchor();
    comInit();
})();
