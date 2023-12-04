$(function () {

$('.list-news').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $('.prev-news'),
    nextArrow: $('.next-news'),
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
});

$('.list-cus').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    prevArrow: $('.prev-news'),
    nextArrow: $('.next-news'),
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
});

    $('.slide-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.prev-banner'),
        nextArrow: $('.next-banner'),
    });

    $('.slide-product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.prev-hot'),
        nextArrow: $('.next-hot'),
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });

    $('.bar-mobile').click(function () {
        $('.box-menu').toggleClass('current');
        $('.opacity').css('display', 'block');
    })
    $('.close-box').click(function () {
        $('.box-menu').toggleClass('current');
        $('.opacity').css('display', 'none');
    })
    $('.opacity').click(function () {
        $('.box-menu').toggleClass('current');
        $(this).css('display', 'none');
    })
})

// coutdown timer

/*Lấy thời gian tết âm lịch (mily giây)*/
var tetAmLich = new Date(2023, 12, 1, 0, 0, 0).getTime();

function newYear() {
    /*Lấy thời gian ngày hiện tại (mily giây) */
    var ngayHienTai = new Date().getTime();

    /*Tính thời gian còn lại (mily giây) */
    thoigianConLai = tetAmLich - ngayHienTai;

    /*Chuyển đơn vị thời gian tương ứng sang mili giây*/
    var giay = 1000;
    var phut = giay * 60;
    var gio = phut * 60;
    var ngay = gio * 24;

    /*Tìm ra thời gian theo ngày, giờ, phút giây còn lại thông qua cách chia lấy dư(%) và làm tròn số(Math.floor) trong Javascript*/
    var d = Math.floor(thoigianConLai / (ngay));
    var h = Math.floor((thoigianConLai % (ngay)) / (gio));
    var m = Math.floor((thoigianConLai % (gio)) / (phut));
    var s = Math.floor((thoigianConLai % (phut)) / (giay));

    /*Hiển thị kết quả ra các thẻ Div với ID tương ứng*/
    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}

/*Thiết Lập hàm sẽ tự động chạy lại sau 1s*/
setInterval(function () {
    newYear()
}, 1000)

// $(window).on('resize', function () {
//     var viewportWidth = jQuery(window).width();

//     if (viewportWidth < 768) {
//         $('.slide-product').slick('unslick');
//     } else {
//         $('.slide-product').slick({
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             dots: false,
//             prevArrow: $('.prev-banner'),
//             nextArrow: $('.next-banner'),
//             responsive: [
//                 {
//                     breakpoint: 993,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false
//                     }
//                 },
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false
//                     }
//                 },
//                 {
//                     breakpoint: 576,
//                     settings: {
//                         slidesToShow: 1,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: false
//                     }
//                 }
                
//             ]
//         });
//     }
// });

// chọn tỉnh, thành phố
var citis = document.getElementById("city");
var districts = document.getElementById("district");
var wards = document.getElementById("ward");
var Parameter = {
  url: "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json", 
  method: "GET", 
  responseType: "application/json", 
};
var promise = axios(Parameter);
promise.then(function (result) {
  renderCity(result.data);
});

function renderCity(data) {
  for (const x of data) {
    citis.options[citis.options.length] = new Option(x.Name, x.Id);
  }
  citis.onchange = function () {
    district.length = 1;
    ward.length = 1;
    if(this.value != ""){
      const result = data.filter(n => n.Id === this.value);

      for (const k of result[0].Districts) {
        district.options[district.options.length] = new Option(k.Name, k.Id);
      }
    }
  };
  district.onchange = function () {
    ward.length = 1;
    const dataCity = data.filter((n) => n.Id === citis.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;

      for (const w of dataWards) {
        wards.options[wards.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}
