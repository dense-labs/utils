<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Rate from './rate.vue';

const rate = ref(5);
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Rate v-model="rate" :max="10" size="lg" />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.watermark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.watermark-full-screen {
  overflow: hidden;
}

.watermark-partial-screen {
  position: relative;
}

.partial-screen .watermark {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  width:  700px;
  height: 400px;
}
</style>
