var tracksSwiper = new Swiper(".tracks__slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: '.track__button--next',
        prevEl: '.track__button--prev',
    },
});



var bikesSwiper = new Swiper(".bikes__slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,

    
    pagination: {
        
        el: '.swiper-pagination',
        clickable: true,
        // type: 'custom',
        renderBullet: function (index, className) {
            var menu = ['Шоссе', 'Грэвел', 'ТТ']
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },

    }

    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     type: 'custom',
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + '</span>';
    //     }
    // },

    // pagination: '.swiper-pagination',
    // paginationClickable: true,
    // // paginationType: "custom",
    // paginationCustomRender: function (swiper, current, total) {
    //     var names = [];
    //     $(".bikes__slide").each(function (i) {
    //         names.push($(this).data("name"));
    //     });
    //     var text = "<span>";
    //     for (let i = 1; i <= total; i++) {
    //         if (current == i) {
    //             text += "<span>" + names[i] + "</span>";
    //         } else {
    //             text += "<span>" + names[i] + "</span>";
    //         }

    //     }
    //     text += "</span>";
    //     return text;
    // }
});

tracksSwiper.on('slideChange', function () {
    bikesSwiper.slideTo(tracksSwiper.activeIndex);
});

bikesSwiper.on('slideChange', function () {
    tracksSwiper.slideTo(bikesSwiper.activeIndex);
});