// fadeUpAnimeを出力
  $('.hero__copy').on('inview', function () {
      $(this).addClass('fadeInUp');
  });
  $('.btn').on('inview', function () {
      $(this).addClass('fadeInUp');
  });
  $('.news__title').on('inview', function () {
      $(this).addClass('fadeInUp');
  });
  $('.news__info').on('inview', function () {
      $(this).addClass('fadeInUp');
  });
  $('.director__des').on('inview', function () {
      $(this).addClass('fadeInUp');
  });
  $('.blog__title').on('inview', function () {
      $(this).addClass('fadeInUp');
  });
  $('.recruit__content').on('inview', function () {
      $(this).addClass('fadeInUp-rec');
  });
  $('.map__content').on('inview', function () {
      $(this).addClass('fadeInUp');
  });
  $('.footer__nav').on('inview', function () {
      $(this).addClass('fadeInUp');
  });
  $('.footer__copy-right').on('inview', function () {
      $(this).addClass('fadeInDown');
  });

  $('.grid').on('inview', function () {
    $(this).addClass('gridFadeUp');
});

  // 1. ページがスクロールされた時にイベントを設定する
  $(window).scroll(function () {
    
    // 2. ウィンドウの位置を取得する
    var top = $('.grid').offset().top;
    var position = top - $(window).height();
    var scrollTop = $(this).scrollTop(); // ウィンドウ枠内の上の位置を取得する
    var scrollBottom = scrollTop + $(this).height(); // ウィンドウ枠内の下の位置を取得する
  
    // 3. 指定した要素にそれぞれ処理を追加する
    $(".grid__inner .grid__item").each(function (i) {
  
        // 4. ウィンドウの位置と表示したい要素の位置を比較する
        if ($(window).scrollTop() > position) {
            
            // 5. 0.3秒毎ごとに1つずつfadeinクラスを付与する
            var target = this;
            setTimeout(function () {
                $(target).addClass("gridFadeUp");
            }, 300 * i);
  
        }
  
    });
  });

// fadeInを出力
  $('.hero__img').on('inview', function () {
      $(this).addClass('fadeIn');
  });
  // $('.service').on('inview', function () {
  //     $(this).addClass('fadeIn');
  // });
  $('.director__img').on('inview', function () {
      $(this).addClass('fadeIn');
  });
  $('.recruit').on('inview', function () {
      $(this).addClass('fadeIn');
  });
  $('.blog__img').on('inview', function () {
      $(this).addClass('fadeIn');
  });
  $('.map__google').on('inview', function () {
      $(this).addClass('fadeIn');
  });
  $('.footer__img').on('inview', function () {
      $(this).addClass('fadeIn');
  });
  $('.footer__logo').on('inview', function () {
      $(this).addClass('fadeIn');
  });


  // 1. ページがスクロールされた時にイベントを設定する
$(window).scroll(function () {
    
  // 2. ウィンドウの位置を取得する
  var scrollTop = $(this).scrollTop(); // ウィンドウ枠内の上の位置を取得する
  var scrollBottom = scrollTop + $(this).height(); // ウィンドウ枠内の下の位置を取得する

  // 3. 指定した要素にそれぞれ処理を追加する
  $(".service__inner .service__content").each(function (i) {

      // 4. ウィンドウの位置と表示したい要素の位置を比較する
      if (scrollBottom > $(this).offset().top) {
          
          // 5. 0.3秒毎ごとに1つずつfadeinクラスを付与する
          var target = this;
          setTimeout(function () {
              $(target).addClass("fadeIn");
          }, 300 * i);

      }

  });
});

// const service = document.querySelector('.service__content');
// const cb = function(entries){
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('fadeIn')
//     }
//   })
// }








// スワイパーの実施
// const swiper = new Swiper(".swiper", {
//   effect: "fade",
//   // ページネーションが必要なら追加
//   pagination: {
//     el: ".swiper-pagination"
//   },
//   // ナビボタンが必要なら追加
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   loop: true,
//   autoplay: {
//     delay: 5000,//5秒ごとに切り替え
//     disableOnInteraction: true,//操作されたら止める
//     autheight: true,//自動で画像の高さ調節
//   }
// });


// スライダー
var $slide = $(".slide")
  .slick({
    fade: true,
    speed: 1500,
    autoplaySpeed: 2700,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });


// ハンバーメニュー
(function ($) {
  const $nav = $('.header__nav__burg');
  const $btn = $('.header-menu');
  const $mask = $('.mask');
  const open = 'open';
  $btn.on('click', function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
      $mask.addClass(open);
    } else {
      $nav.removeClass(open);
      $mask.removeClass(open);
    }
  });
  $mask.on('click', function () {
    $mask.removeClass(open);
    $nav.removeClass(open);
  });
})(jQuery);