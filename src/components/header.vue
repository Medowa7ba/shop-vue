<template lang="pug">
header
  .container 
    .app-header 
      .app-header-logo
        RouterLink(to='/') 
          h1 SHOP.CO
      .app-header-body
        ul.wrapper.d-none.d-lg-flex
          select.custom-select
            option.select(value="0") Shop
            option.select(value="1") Sale
            option.select(value="2") Sale
          li
            RouterLink(to="/") On Sale
          li
            RouterLink(to="/") New Arrivals
          li
            RouterLink(to="/") Brands
        .search
          input.d-none.d-lg-flex(type="text" placeholder="Search for products...")
          svg(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 512 512")
            path(d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z")
        .overlay
          .cart.position-relative
            RouterLink(to="/cart")
              .cartAmount
                p#cartAmount {{ settings.length}}
              svg(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 576 512")
                path(d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z")
          .user
            RouterLink(to='/')
              svg(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 448 512")
                path(d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z")
          .ovarlayIcon.d-flex.d-lg-none#menu
            svg(xmlns="http://www.w3.org/2000/svg", stroke="#00000066", fill="#00000066", xlink="http://www.w3.org/1999/xlink", aria-hidden="true", role="img", viewBox="0 0 24 24")
              path(stroke="#00000066", fill="#00000066", d="M3 4h18v2H3V4Zm6 7h12v2H9v-2Zm-6 7h18v2H3v-2Z")

</template>

<script lang="ts" setup>
import { ref } from 'vue';
const count = ref()
import { storeToRefs } from 'pinia'
import { useStore } from '../stores/cart';
const store = useStore()
const { settings } = storeToRefs(store)

</script>

<style lang="scss" scoped>
.app-header {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-logo {
    a {
      text-decoration: none;
      color: #000;

      h1 {
        font-weight: 700;
        font-size: 32px;
        font-family: 'Integral CF', sans-serif;

        @media(max-width:992px) {
          font-size: 22px;
        }

        @media(max-width:571px) {
          font-size: 20px;
        }
      }
    }
  }

  &-body {
    font-family: 'Satoshi', sans-serif;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      margin: 0;

      li {
        list-style: none;


        a {
          color: #000;
          text-decoration: none;
          padding: 24px;

          @media(max-width:1400px) {
            padding: 11px;

          }

        }
      }

      select {
        border: none;

        &:focus-visible {
          outline: none;
        }
      }
    }

    .search {
      position: relative;

      margin: 0 30px;

      @media(max-width:992px) {
        margin: 0 15px;

      }

      input {
        padding: 12px 16px 12px 40px;
        background-color: #F0F0F0;
        border: none;
        border-radius: 50px;
        width: 570px;

        @media(max-width:1450px) {
          width: 470px;

        }

        @media(max-width:1200px) {
          width: 270px;

        }

        &:focus-visible {
          outline: none;
        }
      }

      svg {
        position: absolute;
        top: 15px;
        left: 15px;
        width: 20px;
        fill: #00000066;

        @media(max-width:992px) {
          position: relative;
          top: 0;
          right: 0px;
        }
      }
    }

    .overlay {
      display: flex;
      padding: 0;

      a {
        padding: 10px;
      }

      svg {
        width: 20px;
        fill: #00000066;

      }
    }
  }

  .cartAmount {
    position: absolute;
    background: red;
    color: #fff;
    font-size: 12px;
    border-radius: 50px;
    width: 23px;
    height: 23px;
    text-align: center;
    padding: 4px;
    margin: 0;
    align-items: center;
    display: flex;
    top: -11px;

    p {
      align-items: center;
      margin: 0;
      text-align: center;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
}
</style>