<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {debounce, throttle, sleep} from '@dense-labs/utils'
onMounted(() => {
    window.onscroll = debounce((e) => {
        console.log(e)
    }, 300, {leading: false})

    window.onresize = throttle((e) => {
        console.log(+new Date(), e)
    }, 200, {leading: true})
})
</script>

<template>
    <el-row class="text mb-4"></el-row>
</template>