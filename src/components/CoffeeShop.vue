<script setup>

const props = defineProps({
    id: Number,
    name: {
        type: String,
        required: true
    },
    price: Number,
    imgUrl: String,
})

</script>

<template>
    <div class="w-full border shadow-lg rounded-md">
        <img :src="props.imgUrl" class="object-cover rounded-t-md bg-white hover:opacity-80">
        <div class="px-4 py-4">
            <p class="font-medium text-base">{{ props.name }}</p>
            <p>{{ props.price }}</p>
            <router-link :to="'/shops/' + props.id">
                <button
                    class="mt-5 text-white inline-flex w-full items-center justify-center p-2 bg-indigo-500 active:bg-indigo-600 rounded-md">
                    รายละเอียด
                </button>
            </router-link>
        </div>
    </div>
</template>