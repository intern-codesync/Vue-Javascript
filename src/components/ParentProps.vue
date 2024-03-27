<!-- <template>
  <Child-props :message="Parentdata" />
</template>

<script setup>
// import ref  from 'vue';
import ChildProps from './ChildProps.vue';
  const Parentdata = "hellow Ahmad parent" 
</script> -->
<template>
  <child-props @message-sent="recievemessagefromthechild" />
  <p>Message in parent:{{ receivemessage }}</p>
</template>

<script setup>
import { ref } from "vue";
import ChildProps from "./ChildProps.vue";
const receivemessage = ref("");

const recievemessagefromthechild = (message) => {
  receivemessage.value = message;
};
</script>
