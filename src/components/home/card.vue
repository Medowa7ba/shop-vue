<template lang="pug">
section
    .container 
        h2 {{ title }}
        .row.d-none.d-lg-flex
            .col-lg-3.col-md-6.col-sm-06.mt-3(v-for="i in data?.slice(0, limit)")
                RouterLink(:to="'/product/' + i.id ")
                    .card-img
                        img(width="220" :src="i.image" :alt='i.title')
                    .details
                        h4 {{ i.title }} 
                        div.d-flex
                            div(v-if="i.rating.rate > 4")
                                svg(width="104", height="19", viewBox="0 0 104 19", fill="none", xmlns="http://www.w3.org/2000/svg")
                                    path(d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z", fill="#FFC633")
                                    path(d="M33.0467 0.255005L35.6659 5.89491L41.8392 6.6431L37.2847 10.8769L38.4807 16.9793L33.0467 13.956L27.6127 16.9793L28.8087 10.8769L24.2542 6.6431L30.4275 5.89491L33.0467 0.255005Z", fill="#FFC633")
                                    path(d="M56.8489 0.255005L59.4681 5.89491L65.6414 6.6431L61.0869 10.8769L62.283 16.9793L56.8489 13.956L51.4149 16.9793L52.611 10.8769L48.0565 6.6431L54.2297 5.89491L56.8489 0.255005Z", fill="#FFC633")
                                    path(d="M80.6507 0.255005L83.2699 5.89491L89.4432 6.6431L84.8887 10.8769L86.0847 16.9793L80.6507 13.956L75.2167 16.9793L76.4127 10.8769L71.8582 6.6431L78.0315 5.89491L80.6507 0.255005Z", fill="#FFC633")
                                    path(d="M98.5659 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.5659 16.9793Z", fill="#FFC633")
                            div(v-else)
                                svg(width="81", height="19", viewBox="0 0 81 19", fill="none", xmlns="http://www.w3.org/2000/svg")
                                    path(d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z", fill="#FFC633")
                                    path(d="M33.0467 0.255005L35.6659 5.89491L41.8392 6.6431L37.2847 10.8769L38.4807 16.9793L33.0467 13.956L27.6127 16.9793L28.8087 10.8769L24.2542 6.6431L30.4275 5.89491L33.0467 0.255005Z", fill="#FFC633")
                                    path(d="M56.8489 0.255005L59.4681 5.89491L65.6414 6.6431L61.0869 10.8769L62.283 16.9793L56.8489 13.956L51.4149 16.9793L52.611 10.8769L48.0565 6.6431L54.2297 5.89491L56.8489 0.255005Z", fill="#FFC633")
                                    path(d="M74.7642 16.9793L80.1982 13.956V0.255005L77.579 5.89491L71.4058 6.6431L75.9603 10.8769L74.7642 16.9793Z", fill="#FFC633")
                            span.ms-2 {{i.rating.rate}}/5
                        .price-quantity
                            h6 ${{ i.price }}
        .d-flex.d-lg-none
          Swiper(:slides-per-view="3.5" :space-between="20" @swiper="onSwiper" @slideChange="onSlideChange" navigation :modules="modules"  :breakpoints=" { 1400: { slidesPerView: 3.5,  },1200: { slidesPerView: 3,}, 991: {  slidesPerView: 2.5,}, 767: {     slidesPerView: 2,  }, 500: {     slidesPerView: 1.5,   },    300: {        slidesPerView: 1.5,     },  }")
            SwiperSlide(v-for="i in data")
              RouterLink(:to="'/product/' + i.id ")
                      .card-img
                          img(width="220" :src="i.image" :alt='i.title')
                      .details
                          h4 {{ i.title }} 
                          div.d-flex
                              div(v-if="i.rating.rate > 4")
                                  svg(width="104", height="19", viewBox="0 0 104 19", fill="none", xmlns="http://www.w3.org/2000/svg")
                                      path(d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z", fill="#FFC633")
                                      path(d="M33.0467 0.255005L35.6659 5.89491L41.8392 6.6431L37.2847 10.8769L38.4807 16.9793L33.0467 13.956L27.6127 16.9793L28.8087 10.8769L24.2542 6.6431L30.4275 5.89491L33.0467 0.255005Z", fill="#FFC633")
                                      path(d="M56.8489 0.255005L59.4681 5.89491L65.6414 6.6431L61.0869 10.8769L62.283 16.9793L56.8489 13.956L51.4149 16.9793L52.611 10.8769L48.0565 6.6431L54.2297 5.89491L56.8489 0.255005Z", fill="#FFC633")
                                      path(d="M80.6507 0.255005L83.2699 5.89491L89.4432 6.6431L84.8887 10.8769L86.0847 16.9793L80.6507 13.956L75.2167 16.9793L76.4127 10.8769L71.8582 6.6431L78.0315 5.89491L80.6507 0.255005Z", fill="#FFC633")
                                      path(d="M98.5659 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.5659 16.9793Z", fill="#FFC633")
                              div(v-else)
                                  svg(width="81", height="19", viewBox="0 0 81 19", fill="none", xmlns="http://www.w3.org/2000/svg")
                                      path(d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z", fill="#FFC633")
                                      path(d="M33.0467 0.255005L35.6659 5.89491L41.8392 6.6431L37.2847 10.8769L38.4807 16.9793L33.0467 13.956L27.6127 16.9793L28.8087 10.8769L24.2542 6.6431L30.4275 5.89491L33.0467 0.255005Z", fill="#FFC633")
                                      path(d="M56.8489 0.255005L59.4681 5.89491L65.6414 6.6431L61.0869 10.8769L62.283 16.9793L56.8489 13.956L51.4149 16.9793L52.611 10.8769L48.0565 6.6431L54.2297 5.89491L56.8489 0.255005Z", fill="#FFC633")
                                      path(d="M74.7642 16.9793L80.1982 13.956V0.255005L77.579 5.89491L71.4058 6.6431L75.9603 10.8769L74.7642 16.9793Z", fill="#FFC633")
                              span.ms-2 {{i.rating.rate}}/5
                          .price-quantity
                              h6 ${{ i.price }}
        .justify-content-center.d-flex.mt-5.d-none.d-lg-flex#leadMore(v-if="readMore" @click="addMore()")
            button#leadMoreBtn(v-if="data?.length > limit") View All


</template>

<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps(['title','data', 'readMore']);
const limit = ref(4)
function addMore(){
    limit.value += 4
    const props = defineProps(['title','data', 'readMore']);
}
import { Navigation} from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
//   import 'swiper/css/navigation';
  // export default {
  //   components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  //   setup() {
      const onSwiper = (swiper:any) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };


</script>

<style lang="scss" scoped>
section{
    padding: 70px 0;

@media (max-width:992px) {
  padding: 50px 0;
}

@media (max-width:797px) {
  padding: 40px 0;

}

      a {
        text-decoration: none;
        color: #000;
      }

  h2 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    font-family: 'Integral CF', sans-serif !important;

    @media (max-width:1200px) {
      font-size: 38px;
    }

    @media (max-width:992px) {
      font-size: 30px;
    }

    @media (max-width:797px) {
      font-size: 23px;
    }
  }

  .card {
    border: none;
    height: 100%;
    margin-top: 10px;

    @media(max-width: 580px) {
      margin-top: 0px;
      text-align: center;

    }


    &-img {
      align-items: center;
      display: inline-flex;
      height: 250px;
      justify-content: center;
      max-width: 80%;



      @media(max-width: 580px) {
        height: 200px;
        width: 30%;
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
    button {
      padding: 10px 40px;
      border: 1px solid #000;
      color: #fff;
      background: #000;
      font-weight: 400;
      font-size: 16px;
      border-radius: 50px;
      font-family: 'Satoshi', sans-serif;
      transition: .4s;

      @media(max-width: 570px) {
        padding: 5px 30px;

      }

      &:hover {
        background-color: transparent;
        color: #000;
      }
    }

    .details {
      margin-top: 10px;

      h4 {
        font-size: 20px;
        font-family: 'Satoshi', sans-serif;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
      }

      span {
        font-size: 16px;
        font-weight: 400;
        font-family: 'Satoshi', sans-serif;

      }

      h6 {
        font-family: 'Satoshi', sans-serif;
        font-weight: 700;
        font-size: 20px;
      }
    }
}
</style>