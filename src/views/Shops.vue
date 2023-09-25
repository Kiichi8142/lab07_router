<template>
  <div
    class="p-8 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center place-content-center">
    <div v-for="item in travelList">
      <CoffeeShop :name="item.name" :price="item.price" :img-url="item.imgUrl" :id="item.id" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CoffeeShop from '../components/CoffeeShop.vue';
import travelList from '../data/shopList';
</script>