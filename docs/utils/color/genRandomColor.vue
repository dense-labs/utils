<script setup lang="ts">
import { ref } from 'vue'
import {genRandomColor} from '@dense-labs/utils'
let color = ref()
let list = ref([])
list.value = ['hsl', 'hsla', 'rgb', 'rgba', '16']
const randomColor = (e) => {
    color.value = genRandomColor(e)
}
</script>

<template>
    <el-row class="mb-4">
        <el-button type="primary" v-for="(item, index) in list" :key="index" @click="randomColor(item)">{{item}}</el-button>
    </el-row>
    <el-row class="text mb-4" :style="{'background': color}">{{color}}</el-row>
</template>
<style>
    .text {
        padding: 20px;
    }
</style>