const   sideBarBtn = document.querySelector('.side-bar__btn'),
        sideBar = document.querySelector('.side-bar'), 
        pageContent =document.querySelector('.global__content'), 
        dropdownList = document.querySelector('.side-bar__settings'),
        dropdownBtn = document.querySelector('.side-bar__dropdown'), 
        visitedPage = document.querySelectorAll('.global-item'),
        userDropdown = document.querySelector('.global__auth'),
        userBtn = document.querySelector('.user__dropdown-btn'),
        selectBtns = document.querySelectorAll('.select__btn'),
        sideBarSet = '.side-bar__settings',
        selectParent = '.select',
        selectItems = document.querySelectorAll('.select__item'),
        intergrationContent = document.querySelector('.integrations'), 
        policyItems = document.querySelectorAll('.commonly__item'),
        policyScroll = document.querySelector('.commonly__list'),
        samplesAdd  = document.querySelectorAll('.commonly__item-plus'),
        reasonList = document.querySelector('.question__list'),
        saveReason = document.querySelector('.add-reason__save'),
        poperBg = document.querySelector('.warning__wrapper'),
        poperClose = document.querySelector('.warning__close'), 
        upgradeBtn = document.querySelector('#applicable-upgrade'),
        applicableAddInput = document.querySelector('.applicable__text-input'),
        body = document.querySelector('body'),
        globalSearch = document.querySelector('.global__search-input'),
        globalSearchDropdown = document.querySelector('.global__search-dropdown');
        
globalSearch.addEventListener('input', () => { 
    if(globalSearch.value.length > 0){
        globalSearchDropdown.classList.add('active');
        setTimeout(()=> {
            globalSearchDropdown.classList.add('show');
        }, 100)
    }else {
        globalSearchDropdown.classList.remove('show');
        setTimeout(()=> {
            globalSearchDropdown.classList.remove('active');
        }, 100)
    }
}) 


sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active'); 
        if(sideBar.classList.contains('active')){  
            pageContent.style.marginLeft = "275px";   
    }else {  
        dropdownList.classList.remove('active')
        pageContent.style.marginLeft = "65px";    
    }
}); 
dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('active'); 
    if(dropdownList.classList.contains('active')){
        sideBar.classList.add('change-height')
    }else sideBar.classList.remove('change-height')
})

userBtn.addEventListener('click', () => {
    userDropdown.classList.toggle('open')
});

visitedPage.forEach(item => {
    item.addEventListener('click', ()=> {
        visitedPage.forEach(elem => {
            elem.classList.remove('visited')
            if(elem.closest(sideBarSet)){
                elem.closest(sideBarSet).classList.remove('visited')
            }
        })
        if(item.closest(sideBarSet)){ 
            item.closest(sideBarSet).classList.add('visited')
        }
        item.classList.add('visited')
    })
})
 
  
selectBtns.forEach(btn => { 
    btn.addEventListener('click', () => {  
        document.querySelectorAll(selectParent).forEach(parent => {
            if(btn.closest(selectParent) != parent){
                parent.classList.remove('show-select')
            }
        })
        btn.closest(selectParent).classList.toggle('show-select') 
    });
})
 
 

selectItems.forEach(item => {
     item.addEventListener('click', () => { 
         if(item.getAttribute('data-status') == "on"){
            createReason (item.getAttribute('data-value'))  
            item.closest(selectParent).classList.remove('show-select');
            item.classList.add('item-selected')
            item.setAttribute('data-status', "off");
         } 
     })
})


const swiperBrands = new Swiper('.brands__swiper', { 
    loop: true, 
    slidesPerView: 1,  
    watchSlidesVisibility: true,
    watchSlidesProgress: true, 
    spaceBetween:30,
    updateOnWindowResize:true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpointsBase: 'container',
    breakpoints: {
        350: {
            slidesPerView:2, 
        } ,
        550: {
           slidesPerView: 3, 
         },
         750: {
           slidesPerView: 4, 
         },
         1150: {
           slidesPerView: 5,
           spaceBetween: 15,
         },
         1350: {
           slidesPerView: 6,
           spaceBetween: 15,
         } 
       },    
})
 