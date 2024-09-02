const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
};

// �������� ���� ������ ���ݺ��� �Լ��� �����
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

//유틸 공유버튼 누르면 펼쳐지게

const sns = document.querySelector('#subVisual .share .sns_wrap');
const share = document.querySelector('#subVisual .share img');
const close = document.querySelector('#subVisual .share .sns_wrap .sns_inner .sns_close');
const copy = document.querySelector('#subVisual .share .sns_wrap .sns_inner .sns_copy');

share.addEventListener('click', (e) => {
    sns.style.display = 'block';
});

close.addEventListener('click', (e) => {
    sns.style.display = 'none';
});

function clip() {
    var url = '';
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('URL이 복사되었습니다.');
}
