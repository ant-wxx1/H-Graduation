// console.log
var data = {
    Name : 'QingZyi',
    Date : '27 Sept 2024',
    Generator : 'HTML, CSS, JAVASCRIPT'
}
console.log(`Author: ${data.Name} , Date: ${data.Date} , Use: ${data.Generator}`);

let text = '该网站应链接到 https://ant-wxx1.github.io/H-Graduation/ 👨‍🎓';
console.log(text);

console.log('Better Desktop Mode');

// tambah script untuk image swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    //pilih effect
    effect: 'coverflow',

    // gambar dimulai dari gambar ke 1
    initialSlide: 1,

    //custom effect
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
        opacityStep: 0.5,
        scaleStep: 0.22,
        transitionDuration: 10000,
    },

    // buat autoplay
    autoplay: {
        delay: 5000, //akan berjalan setiap 5 detik
        disableOnInteraction: false,
    },

    // Number of slides per view
    slidesPerView: 3,

    // Lazy loading
    lazy: {
        loadPrevNext: true,
    },
});

// script utk taut link social-media
function myIns() {
    window.location.href='https://www.instagram.com/anthony.wxx'; //tambahkan link instagram
}

// function myTwi() {
//     window.location.href='https://www.twitter.com/'; //tambahkan link twitter
// }

function myWa() {
    window.location.href='https://wa.me/628971202446'; //tambahkan link whatsapp
}

function myWechat() {
    window.location.href= 'weixin://dl/chat?token=huangdage242986'; //tambahkan link github
}
