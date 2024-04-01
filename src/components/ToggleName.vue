<template>
  <div>
   
    <button @click="Show">Click Me</button>
    <div v-if="showContent">my name is ahmad</div>
  </div>
</template>

<script setup>
import { ref } from "vue"
let showContent = ref(false);
function Show() {
  showContent.value = !showContent.value;
}
</script>

<style>
h1 {
  font-size: 40px;
}
</style>
