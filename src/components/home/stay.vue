<template lang="pug">
section.stay
  .container
    .position-relative
      .stay-bg
        .row
          .col-lg-6.col-md-6
            h2 STAY UPTO DATE ABOUT OUR LATEST OFFERS
          .col-lg-2.d-none.d-md-flex
          .col-lg-4.col-md-6
            .position-relative
              input.w-100(type="email", placeholder="Enter your email address")
              svg(xmlns="http://www.w3.org/2000/svg", width="24", height="24", viewBox="0 0 24 24", fill="none")
                path(d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z", fill="black", fill-opacity="0.4")
            button Subscribe to Newsletter
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.stay {
  position: relative;
  padding-top: 150px;

  &-bg {
    background-color: #000;
    padding: 40px;
    border-radius: 20px;
    position: absolute;
    width: 100%;
    bottom: -40px;

    @media (max-width:797px) {
      padding: 20px;
      bottom: -10px;

    }

    h2 {
      color: #fff;
      font-size: 40px;

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

    input {
      border-radius: 50px;
      padding: 10px 40px;
      border: none;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.40);
      font-family: 'Satoshi', sans-serif;

      &::placeholder {
        color: rgba(0, 0, 0, 0.40);
        font-family: 'Satoshi', sans-serif;
        font-size: 16px;
      }

      &:focus-visible {
        outline: none;
      }
    }

    svg {
      position: absolute;
      left: 8px;
      top: 11px;
    }

    button {
      background-color: #fff;
      color: #000;
      font-family: 'Satoshi', sans-serif;
      padding: 10px 20px;
      border: transparent;
      border-radius: 50px;
      margin-top: 10px;
      width: 100%;
      transition: .3s;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }
}
</style>