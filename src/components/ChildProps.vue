<!-- <template>
  <div>{{ message }}</div>
</template>

<script setup>
import { defineProps } from 'vue'

      const props = defineProps({
        message : String
      }) 
</script> -->
<template>
  <button @click="sendMessage">Send Messaage to the Parent</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["messageSent"]);
const sendMessage = () => {
  emits('message-sent', 'Hellow From the child')
}
</script>
