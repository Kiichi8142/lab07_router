<script setup>
import travelList from '../data/shopList';
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const shopData = computed(() => travelList.value.find((item) => item.id == route.params.id))

</script>

<template>
    <div class="p-8 mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row w-fit">
            <img :src="shopData.imgUrl" class="rounded-md h-52 lg:h-96 object-cover">
            <div class="mt-8 lg:mt-0 lg:ml-4 flex flex-col">
                <p class="text-indigo-600 font-semibold text-xl">ชื่อร้าน</p>
                <p class="text-gray-950 font-medium text-3xl">{{ shopData.name }}</p>
                <p class="text-indigo-500 font-medium text-3xl">{{ shopData.price }}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit turpis nec viverra aliquam. Nulla
                    mauris ante, accumsan at turpis sed, pulvinar consectetur turpis. Vivamus semper tincidunt felis sed
                    condimentum. In vehicula elementum urna, et vehicula eros faucibus tristique. Curabitur auctor mollis
                    suscipit. Pellentesque nec lectus non orci malesuada porta. Suspendisse cursus, mauris quis consectetur
                    scelerisque, neque lacus tempus enim, sit amet venenatis felis ex sit amet urna. Duis scelerisque
                    condimentum leo ac fringilla. Mauris convallis elit et volutpat dapibus. Ut ante risus, cursus quis orci
                    in, hendrerit blandit metus. Proin volutpat convallis dui nec cursus. Donec vitae facilisis metus. Etiam
                    in felis libero. Maecenas in laoreet erat, eget porta diam.
                </p>
            </div>
        </div>
    </div>
</template>