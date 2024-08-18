<template lang="pug">
section
  .container
    .browse
      h2 BROWSE BY dress STYLE
      .row
        .col-lg-5.col-md-6.mt-4
          .browse-img
            img(src="/public/image 11.png", alt)
            p Casual
        .col-lg-7.col-md-6.mt-4
          .browse-img
            img(src="/public/image 14.png", alt)
            p Formal
        .col-lg-7.col-md-6.mt-4
          .browse-img
            img(src="/public/image 13.png", alt)
            p Party
        .col-lg-5.col-md-6.mt-4
          .browse-img
            img(src="/public/image 15.png", alt)
            p Gym
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.browse {
  background-color: #F0F0F0;
  border-radius: 20px;
  padding: 70px 35px;

  @media (max-width:992px) {
    padding: 50px 28px;
  }

  @media (max-width:797px) {
    padding: 40px 18px;

  }

  &-img {
    background-color: #fff;
    border-radius: 20px;
    justify-content: end;
    display: flex;
    position: relative;

    img {
      height: 280px;
      border-radius: 20px;

      @media(max-width: 1200px) {
        height: 220px;

      }

      @media(max-width: 992px) {
        height: 200px;
      }
    }

    p {

      position: absolute;
      left: 33px;
      top: 11px;

    }
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    font-family: 'Integral CF', sans-serif;
 
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

}
</style>