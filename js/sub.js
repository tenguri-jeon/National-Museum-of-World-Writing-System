import { images, posts } from './data.js';
// 서브 레이아웃을 각각 만드는 게 아니라 각각의 페이지별 함수 입력

//서브페이지의 공통부분

const news = () => {
    ///////////////////////////////////////////////////////////////// top-bar
    let $category = get('.news .top-bar .search #category');
    let $view = get('.news .top-bar .search #view');
    let $searchBtn = get('.news .top-bar .search .searchBtn');
    let $viewBtn = get('.news .top-bar .search .viewBtn');
    let $input = get('.news .top-bar .search input');

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    let postPerPage = 10,
        result = [],
        currentPage = 1;

    $searchBtn.addEventListener('click', (e) => {
        let searchText = $input.value;
        result = [];
        currentPage = 1;
        switch ($category.value) {
            case '전체':
                posts.map((item, idx) => {
                    if (item.title.includes(searchText) || item.author.includes(searchText)) {
                        return (result = result.concat(posts[idx]));
                    }
                });
                if (result.length > 0) {
                    pagination(result);
                } else {
                    noresult();
                }
                break;
            case '제목':
                posts.map((item, idx) => {
                    if (item.title.includes(searchText)) {
                        return (result = result.concat(posts[idx]));
                    }
                });
                if (result.length > 0) {
                    pagination(result);
                } else {
                    noresult();
                }
                pagination(result);
                break;
            case '부서명':
                posts.map((item, idx) => {
                    if (item.author.includes(searchText)) {
                        return (result = result.concat(posts[idx]));
                    } else if (!item.author.includes(searchText)) {
                        noresult();
                    }
                });
                pagination(noresult);
                break;
            default:
                break;
        }
        $input.value = '';
    });
    ///////////////////////////////////////////////////////////////// board
    let $totalPost = get('.news .top-bar p .total');
    let $currentPage = get('.news .top-bar p .current');
    let $totalPage = get('.news .top-bar p span');
    let $table = get('.news .news-table tbody');
    let $paging = get('.news .paging');
    let row = '',
        old = 0,
        PageNumber;
    $totalPost.textContent = posts.length;
    $currentPage.textContent = currentPage;
    ///////////////////////////////////////////////////////////////// paging
    $viewBtn.addEventListener('click', (e) => {
        postPerPage = Number($view.value);
        let nodata = document.querySelector('.nodata');
        if (nodata) {
            return;
        } else if (postPerPage < posts.length) {
            pagination(posts);
        }
    });

    const pagination = (posts) => {
        let totalPost = posts.length;
        $paging.innerHTML = '';
        PageNumber = Math.ceil(totalPost / postPerPage);
        for (let i = 0; i < PageNumber; i++) {
            $paging.innerHTML += `<a href="#">${i + 1}</a>`;
        }
        let $aAll = getAll('.news .paging a');
        $aAll[currentPage - 1].classList.add('on');

        $aAll.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = i + 1;
                postList(currentPage, posts);
                if (old !== i) {
                    $aAll[i].classList.add('on');
                    $aAll[old].classList.remove('on');
                    $currentPage.textContent = currentPage;
                }
                old = i;
            });
        });
        postList(currentPage, posts);
    };
    ///////////////////////////////////////////////////////////////// table
    const postList = (num, posts) => {
        row = '';

        let pageNum = (currentPage - 1) * postPerPage;
        let totalPost = posts.length;
        PageNumber = Math.ceil(totalPost / postPerPage);

        for (let i = 0; i < postPerPage; i++) {
            const dataIndex = pageNum + i;
            if (dataIndex >= posts.length) break;
            row += `
              <tr>
                  <td>${totalPost - i - pageNum}</td>
                  <td>
                      <span>
                          <a href="#">${posts[dataIndex].title}</a></span
                      >
                  </td>
                  <td>${posts[dataIndex].author}</td>
                  <td>${posts[dataIndex].hit}</td>
                  <td>${posts[dataIndex].date}</td>
                  <td><i class="xi-download"></i></td>
              </tr>`;
        }
        $table.innerHTML = row;
        $totalPage.textContent = PageNumber;
    };
    pagination(posts);

    function noresult() {
        $table.innerHTML = '';
        let tr = `
                <tr>
                    <td colspan="6" class ="nodata">테이타가 없습니다.</td>        
                </tr>`;
        $table.innerHTML += tr;
        $paging.innerHTML = '';
        result = [];
        result = posts;
    }
};

const history = () => {
    // let $menu3 = get("#header .nav .gnb .menu3");
    let $subGnb = getAll('#header .nav .gnb li .subGnb');
    let $subMenu2 = get('#header .nav .gnb .menu3 .subGnb .subMenu2');
    // $menu3.classList.add("on");
    // $subGnb[2].classList.add("show");
    // $subMenu2.classList.add("on");
    ///////////////////////////////////////////////////////////////// subtitle
    let $subTitle = get('.history .subTitle h3');
    setTimeout(() => {
        $subTitle.classList.add('show');
    }, 100);
    ///////////////////////////////////////////////////////////////// list
    let $img = get('.history .history-info img');
    let imgUrl = images.url,
        alt = images.alt;
    console.log(imgUrl);
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 700) {
            $img.classList.add('on');
        }
    });
    let $lis = getAll('.history .history-info .list > li');
    console.log($lis.length);
    window.addEventListener('scroll', (e) => {
        $lis.forEach((li, idx) => {
            $lis.forEach((li) => {
                li.classList.remove('on');
            });
            if (window.scrollY > 0 && window.scrollY < 880) {
                $lis[0].classList.add('on');
                imgUrl = images[0].url;
                alt = images[0].alt;
            }
            if (window.scrollY > 800 && window.scrollY < 1000) {
                $lis[1].classList.add('on');
                imgUrl = images[1].url;
                alt = images[1].alt;
            }
            if (window.scrollY > 1000 && window.scrollY < 1200) {
                $lis[2].classList.add('on');
                imgUrl = images[2].url;
                alt = images[2].alt;
            }
            if (window.scrollY > 1200 && window.scrollY < 1500) {
                $lis[3].classList.add('on');
                imgUrl = images[3].url;
                alt = images[3].alt;
            }
            if (window.scrollY > 1500 && window.scrollY < 1800) {
                $lis[4].classList.add('on');
                imgUrl = images[4].url;
                alt = images[4].alt;
            }
            if (window.scrollY > 1800 && window.scrollY < 2000) {
                $lis[5].classList.add('on');
                imgUrl = images[5].url;
                alt = images[5].alt;
            }
            if (window.scrollY > 2000) {
                $lis[6].classList.add('on');
                imgUrl = images[6].url;
                alt = images[6].alt;
            }
            $img.setAttribute('src', imgUrl);
            $img.setAttribute('alt', alt);
        });
    });
};

//
const subInit = () => {
    //페이지별 sub 함수호출 - 주소를 불러오고 /를 제외
    if (location.pathname.split('/').pop() === 'docent.html') {
        docent();
    }
    if (location.pathname.split('/').pop() === 'news.html') {
        news();
    }
    if (location.pathname.split('/').pop() === 'history.html') {
        history();
    }
};

(() => {
    subInit();
})();
