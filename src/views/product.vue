<template lang="pug">
Single(:Singledata='data')
Tab
Card(:data='allData' title=`YOU MIGHT ALSO LIKE` :readMore="false")
Stay
</template>

<script lang="ts" setup>
import Single from '@/components/single/section.vue';
import Tab from '@/components/single/tabs.vue';
import Stay from '@/components/home/stay.vue';
import Card from '@/components/home/card.vue';

import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;
const data = ref();
const allData = ref();
import { useTitle } from '@vueuse/core'
const title = useTitle()
title.value = 'Product'
const api = `https://fakestoreapi.com/products/${id}`;
const apiData = `https://fakestoreapi.com/products`;
fetch(api)
    .then(res => res.json())
    .then(json => {
        data.value = json;
    })

fetch(apiData)
    .then(res => res.json())
    .then(json => {
        allData.value = json;
    })
</script>

<style lang="scss" scoped></style>