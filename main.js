
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
