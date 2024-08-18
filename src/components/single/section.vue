<template lang="pug">
section.app-gallary
  .container
    .gallary#app-galary
      .row 
        .col-lg-5.col-md-6
          img(:src='Singledata?.image')
        .col-lg-7.col-md-6 
          h2 {{ Singledata?.title   }}
          div.d-flex
            div(v-if="Singledata?.rating?.rate > 4")
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
            span.ms-2 {{ Singledata?.rating?.rate}}/5
          h6.mt-2 ${{ Singledata?.price }}
          p {{ Singledata?.description }}
          .colors
            p Select Colors
            .color
              div(@click="currentTab = 0" :class="{first: currentTab === 0}")
              div(@click="currentTab = 1" :class="{yellow: currentTab === 1}")
              div(@click="currentTab = 2" :class="{gray: currentTab === 2}")
          .d-flex.align-items-center
            .cart-buttons
              .buttons.d-flex
                i.bi.bi-dash-lg(@click="decrement(Singledata.id)")
                  svg(width="15", height="15", viewBox="0 0 20 20", fill="none", xmlns="http://www.w3.org/2000/svg")
                    path(d="M17.8125 10.0001C17.8125 10.2488 17.7137 10.4872 17.5379 10.663C17.3621 10.8388 17.1236 10.9376 16.875 10.9376H3.125C2.87636 10.9376 2.6379 10.8388 2.46209 10.663C2.28627 10.4872 2.1875 10.2488 2.1875 10.0001C2.1875 9.75148 2.28627 9.51302 2.46209 9.33721C2.6379 9.16139 2.87636 9.06262 3.125 9.06262H16.875C17.1236 9.06262 17.3621 9.16139 17.5379 9.33721C17.7137 9.51302 17.8125 9.75148 17.8125 10.0001Z", fill="black")
                p.mb-0.quantity {{ quantity }}
                i.bi.bi-plus-lg(@click="increment(Singledata.id)")
                  svg(width="15", height="15", viewBox="0 0 20 20", fill="none", xmlns="http://www.w3.org/2000/svg")
                    path(d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z", fill="black")
            button.HomeBtn(@click="addToCart(Singledata.id, quantity)") Add to Cart
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
  import { storeToRefs } from 'pinia'
  import { useStore } from '../../stores/cart';
  const store = useStore()

  const { settings } = storeToRefs(store)

  // const handleToggleFontSizeClick = () => {

let localStorageData = JSON.parse(localStorage.getItem("data")) || [];
console.log(localStorageData);

const currentTab = ref(0);
const route = useRoute()
const props = defineProps(['Singledata']);
let num = 1;
const quantity = ref()
quantity.value = num
console.log(num);
function increment(id: number) {
  num += 1
quantity.value = num

};
function decrement(id: number) {
  num = (num - 1 <= 0) ? 1 : num - 1
quantity.value = num
};
function addToCart(id, quantitys) {
    store.updateSettings({
      id: id,
      item: quantitys,
    })
};
</script>

<style lang="scss" scoped>
.app-gallary {
  padding: 70px 0;

  @media (max-width:992px) {
    padding: 50px 0;
  }

  @media (max-width:797px) {
    padding: 40px 0;

  }

  .gallary {
    h2 {
      font-size: 40px;
      font-family: 'Integral CF', sans-serif;

      @media (max-width:1200px) {
        font-size: 38px;
      }

      @media (max-width:992px) {
        font-size: 30px;
      }

      @media (max-width:797px) {
        font-size: 20px;
      }
    }

    button {
      background-color: #000;
      border: 1px solid #000;
      color: #fff;
      padding: 10px 40px;
      font-family: 'Satoshi', sans-serif;
      border-radius: 50px;
      transition: .4s;
      width: 100%;
      margin: 20px 0px 0 20px;

      &:hover {
        background-color: transparent;
        color: #000;


      }
    }

    .cart-buttons {
      padding: 10px 40px !important;
      margin-top: 20px;
    }

    p,
    span {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.60);
      font-family: 'Satoshi', sans-serif;
      width: 100%;
      max-width: 500px;
    }

    img {
      width: 100%;
      height: 100%;
      max-height: 500px;
      max-width: 409px;
    }

    .colors {
      padding: 30px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.10);
      border-bottom: 1px solid rgba(0, 0, 0, 0.10);

      .color {
        display: flex;
        position: relative;

        div {
          cursor: pointer;
          border: 2px solid #fff;

        }

        div:nth-child(1) {
          background-color: #4F4631;
          width: 37px;
          height: 37px;
          border-radius: 50px;

        }

        .first {
          &::after {
            content: "";
            border: 2px solid #4F4631;
            width: 41px;
            height: 41px;
            position: absolute;
            top: -2px;
            left: -2px;
            border-radius: 50px;
          }
        }

        div:nth-child(2) {
          position: relative;
          background-color: #314F4A;
          width: 37px;
          height: 37px;
          border-radius: 50px;
          margin: 0 10px;


        }

        .yellow {
          &::after {
            content: "";
            border: 2px solid #314F4A;
            width: 41px;
            height: 41px;
            position: absolute;
            top: -4px;
            left: -4px;
            border-radius: 50px;
          }
        }

        div:nth-child(3) {
          position: relative;
          background-color: #31344F;
          width: 37px;
          height: 37px;
          border-radius: 50px;


        }

        .gray {
          &::after {
            content: "";
            border: 2px solid #31344F;
            width: 41px;
            height: 41px;
            position: absolute;
            top: -4px;
            left: -4px;
            border-radius: 50px;
          }
        }
      }
    }
  }
}

.cart-buttons {
  background: #F0F0F0;
  padding: 10px 20px;
  border-radius: 60px;
  width: fit-content;
}

.quantity {
  margin: 0 15px;
  font-size: 14px;
  font-family: 'Satoshi', sans-serif;

}
</style>