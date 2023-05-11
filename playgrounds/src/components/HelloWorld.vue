<script setup>
import {ref, onMounted, reactive} from 'vue'
import {genRandomColor, storageLocal, isNumber, generateUUID} from '../../../../dist/index'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
const obj = reactive({
  bgcolor: genRandomColor(),
  uuid: generateUUID()
})
storageLocal().setItem('bgcolor', genRandomColor())
const check = () => {
  console.log(isNumber(11))
  obj.uuid = generateUUID()
}
</script>

<template>
  <div class="greetings" @click="check" :style="{backgroundColor: obj.bgcolor}">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{obj.uuid}}
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <canvas id="sign"></canvas>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
#sign {
}
</style>
