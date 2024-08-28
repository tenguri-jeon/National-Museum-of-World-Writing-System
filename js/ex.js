const data =  [
    {'num' : 1 , "title" : "세계 문자 연구·전시의 중심, 국립세계문자박물관 문 열다" , "author" : "홍보디자인부" , "views" : "219" , "date" : "2023-06-29" , "icon" : "xi-download" },
    {'num' : 2 , "title" : "“4천년 전 쐐기 문자를 오감으로 체험” 국립세계문자박물관, 여름 방학 특별 프로그램 첫 선" , "author" : "홍보디자인부" , "views" : "97" , "date" : "2023-08-08" , "icon" : "xi-download"},
    {'num' : 3 , "title" : "한국에서 아랍문자를 보니 너무 반가워요 각국 잼버리 대원들이 말하는 국립세계문자박물관" , "author" : "홍보디자인부" , "views" : "137" , "date" : "2023-08-10" , "icon" : "xi-download"},
    {'num' : 4 , "title" : "박물관에서 세계 각국의 문화 즐겨요 국립세계문자박물관, 추석맞이 <세계문화만남> 개최" , "author" : "홍보디자인부" , "views" : "63" , "date" : "2023-09-19" , "icon" : ""},
    {'num' : 5 , "title" : "국립세계문자박물관 인천광역시교육청 업무 협약 체결(9.26)" , "author" : "홍보디자인부" , "views" : "111" , "date" : "2023-09-26" , "icon" : "한글"},
    {'num' : 6 , "title" : "(특별기고) 우리나라만 쓰기엔 아깝다, 한글 나눔 고민할 때 (중앙일보/2023.10.5.)" , "author" : "홍보디자인부" , "views" : "75" , "date" : "2023-10-05" , "icon" : "pdf"},
    {'num' : 7 , "title" : "국립세계문자박물관-佛 샹폴리옹 세계문자박물관 업무협약 체결(10.20.)" , "author" : "홍보디자인부" , "views" : "132" , "date" : "2023-12-26" , "icon" : "xi-download"},
    {'num' : 8 , "title" : "국립세계문자박물관, 12월 19일 기획특별전 <문자와 삽화> 개막 ‘북유럽의 다빈치’ 알브레히트 뒤러의 판화를 만나다(12.18.)" , "author" : "홍보디자인부" , "views" : "122" , "date" : "2024-01-04" , "icon" : "xi-download"},
    {'num' : 9 , "title" : "인천 대표 복합문화공간으로 자리매김 국립세계문자박물관, 관람객 60만 명 돌파" , "author" : "홍보디자인부" , "views" : "74" , "date" : "2024-01-31" , "icon" : "xi-download"},
    {'num' : 10 , "title" : "2024년 신년맞이 문화행사 <갑진문박> 개최" , "author" : "홍보디자인부" , "views" : "53" , "date" : "2024-02-01" , "icon" : "xi-download"},
    {'num' : 11 , "title" : "국립세계문자박물관 · 구결학회 공동<동아시아 한자 변용 문자> 학술대회 개최" , "author" : "홍보디자인부" , "views" : "66" , "date" : "2024-02-13" , "icon" : "xi-download"},
    {'num' : 12 , "title" : "국립세계문자박물관, 뒤러展 연계 강연&어린이교육프로그램 연다" , "author" : "홍보디자인부" , "views" : "76" , "date" : "2024-03-07" , "icon" : "xi-download"},
    {'num' : 13 , "title" : "뒤러 판화展에 6만 2천 명 다녀가 국립세계문자박물관, ‘문자와 삽화’ 전 성료" , "author" : "홍보디자인부" , "views" : "63" , "date" : "2024-04-09" , "icon" : "xi-download"},
    {'num' : 14 , "title" : "“박물관에서 버스킹 즐기며 봄을 담아 가세요” 국립세계문자박물관, 4월 13일부터 〈with 문박〉 개최" , "author" : "홍보디자인부" , "views" : "66" , "date" : "2024-04-09" , "icon" : "xi-download"},
    {'num' : 15 , "title" : "〈파란마음 하얀마음 – 어린이 마음의 빛깔을 노래하다〉, “푸른 하늘 은하수”에서 “아기상어 뚜 루루 뚜루“까지" , "author" : "홍보디자인부" , "views" : "40" , "date" : "2024-05-02" , "icon" : "xi-download"},
    {'num' : 16 , "title" : "국립세계문자박물관, 〈MoW 아카데미 : 어린이 마음을 이야기하다〉 개최" , "author" : "홍보디자인부" , "views" : "30" , "date" : "2024-05-07" , "icon" : "xi-download"},
    {'num' : 17 , "title" : "국립세계문자박물관으로 떠나는 어린이날 가족 여행 5월 가정의 달 문화행사 〈모두의 문자, 모두의 동요〉 개최" , "author" : "홍보디자인부" , "views" : "43" , "date" : "2024-05-07" , "icon" : "xi-download"},
    {'num' : 18 , "title" : "국립세계문자박물관, 국내외 문자유물 공개 구입, 국립세계문자박물관 유물 공개구입, 5월 14일까지 접수" , "author" : "홍보디자인부" , "views" : "51" , "date" : "2024-05-07" , "icon" : "xi-download"},
    {'num' : 19 , "title" : "국립세계문자박물관, 개관 11개월 만에 누적 관람객 100만 명 돌파" , "author" : "홍보디자인부" , "views" : "86" , "date" : "2024-05-20" , "icon" : "xi-download"},
    {'num' : 20 , "title" : "관람객과 함께 즐긴 첫 돌 잔치, 개관 1주년 맞은 국립세계문자박물관" , "author" : "홍보디자인부" , "views" : "219" , "date" : "2024-06-29" , "icon" : "xi-download"},
    {'num' : 21 , "title" : "'로제타 스톤' 한국의 최첨단 기술로 정밀 복제된다, 국립세계문자박물관 영국박물관과 협업, 오는 10월 공개" , "author" : "홍보디자인부" , "views" : "43" , "date" : "2024-07-08" , "icon" : "xi-download"},
    {'num' : 22 , "title" : "7월 11일 중국문자박물관과 MOU 체결- 국립세계문자박물관, 세계 3대 문자 전문박물관과 협의체 구성" , "author" : "홍보디자인부" , "views" : "53" , "date" : "2024-07-22" , "icon" : "xi-download"},
    {'num' : 23 , "title" : "국립세계문자박물관-간송미술문화재단 업무협약 체결, 올 10월 공동 개발한 ‘간송 전형필 및 훈민정음해례본’ 관련 전시 콘텐츠 공개" , "author" : "홍보디자인부" , "views" : "12" , "date" : "2024-08-20" , "icon" : "xi-download"}
]

const tbody = document.querySelector('.list');
const paginationContainer = document.querySelector('.pagination');
const change = document.querySelector('#change')
const add = document.querySelector('.add')
const searchBtn = document.querySelector('.search-bar')
const searchInput = document.querySelector('.searchInput')

data.sort((a, b) => new Date(b.date) - new Date(a.date));

let currentPage = 1; 
let pageCount = 10;

searchBtn.addEventListener('click' , e=> {
    console.log(searchInput.value)
    data.forEach((item , idx) =>{
        let result = item.filter((value) => value.title)
    })
})

add.addEventListener('click' , e => {
    pageCount = Number(change.value)
    renderPagination(currentPage , pageCount)
})


function renderPagination(currentPage , pageCount) {
    const totalCount = data.length;
    const pageGroup = Math.ceil(totalCount / pageCount);

    paginationContainer.innerHTML = ''; // 기존 페이지네이션 버튼을 지움

    for (let i = 1; i <= pageGroup; i++) {
        paginationContainer.innerHTML += `<button class="pageNumber" id="page_${i}">${i}</button>`;
    }

    // 페이지 버튼에 클릭 이벤트 추가
    document.querySelectorAll('.pageNumber').forEach(button => {
        button.addEventListener('click', () => {
            currentPage = Number(button.id.split('_')[1]);
            updateList(currentPage , pageCount);
        });
    });
    updateList(currentPage , pageCount);
}

function updateList(currentPage , pageCount) {
    let pageNum = (currentPage - 1) * pageCount;
    let listHTML = '';

    for (let i = 0; i < pageCount; i++) {
        const dataIndex = pageNum + i;
        if (dataIndex >= data.length) break; 

        listHTML += `<tr>
            <td>${data[dataIndex].num}</td>
            <td><a href="#">${data[dataIndex].title}</a></td>
            <td>${data[dataIndex].author}</td>
            <td>${data[dataIndex].views}</td>
            <td>${data[dataIndex].date}</td>
            <td><i class="${data[dataIndex].icon}"></i></td>
        </tr>`;
    }

    tbody.innerHTML = listHTML;
}

// 초기 페이지네이션 렌더링
renderPagination(currentPage , pageCount);
