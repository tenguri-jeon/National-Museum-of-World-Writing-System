let dept = document.querySelectorAll('.mow_org .mow_chart .lv02 .link_dept');
let strong = document.querySelectorAll('mow_org .mow_chart .lv02 .link_dept strong');
let item =document.querySelectorAll('.mow_org .mow_originfo .item');

dept.forEach((dp, i) =>{
    dp.addEventListener('click', (e)=>{
        item.forEach((item, i)=>{
            item.classList.remove('on')
        })
        item[i].classList.add('on')

    })
})







