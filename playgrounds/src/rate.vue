<template>
    <div class="rate">
      <i
        v-for="i in max"
        :key="i"
        :class="[
          'iconfont',
          'icon-star',
          { 'icon-star-full': i <= rate.value, 'icon-star-empty': i > rate.value },
          size && `icon-${size}`
        ]"
        @click="setValue(i)"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 1.05a1.18 1.18 0 0 1 2 0l1.94 3.07l2.53.31a1.16 1.16 0 0 1 .75 1.91l-2.11 2.42l.68 3.35a1.17 1.17 0 0 1-.46 1.17a1.19 1.19 0 0 1-1.26.07L7 11.67l-3.07 1.68a1.19 1.19 0 0 1-1.26-.07a1.17 1.17 0 0 1-.46-1.17l.68-3.35L.78 6.34a1.16 1.16 0 0 1 .75-1.91l2.53-.31Z"/><path d="M5.5 5.52h2a1 1 0 0 1 0 2h-1a1 1 0 0 0-1 1v1h3"/></g></svg>
    </i>
    </div>
  </template>
  
  <script setup>
  import { ref, watch} from 'vue';
  
  const props = defineProps({
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    size: {
      type: String,
      default: ''
    }
  });
  
  const rate = ref(props.value);
  
  const setValue = (val) => {
    if (val !== rate.value) {
      rate.value = val;
      // emit('update:value', val);
    } else {
      rate.value = val - 1;
      // emit('update:value', val - 1);
    }
  };
  
  watch(
    () => props.value,
    (val) => {
      rate.value = val;
    }
  );
  </script>
  
  <style scoped>
  .rate {
    display: inline-block;
  }
  .iconfont {
    font-family: 'iconfont' !important;
    font-size: 24px;
    cursor: pointer;
  }
  .icon-star-empty:before {
    content: '\e60e';
  }
  .icon-star-full:before {
    content: '\e60f';
  }
  </style>
  