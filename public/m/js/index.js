$(function () {
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
    });

 
    // 2. MUI的初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    // // 2.2 使用swiper初始化内容滚动
    // var swiper = new Swiper('#main > .swiper-container', {
    //     direction: 'vertical',
    //     slidesPerView: 'auto',
    //     freeMode: true,
    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //     },
    //     mousewheel: true,
    // });
})