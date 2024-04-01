<!-- <template>
  <div>{{ message }}</div>
</template>

<script setup>
import { defineProps } from 'vue'

      const props = defineProps({
        message : String
      }) 
</script> -->
<!--******** using emits (that is used to pass the data fffrom child component to the parent component)**** -->
<!-- <template>
  <button @click="sendMessage">Send Messaage to the Parent</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["messageSent"]);
const sendMessage = () => {
  emits('message-sent', 'Hellow From the child')
}
</script> -->
<!-- ChildComponent.vue -->
<template>
 <div class="text-[46px] font-bold" >
  <header>
    <slot name="header"></slot>
  </header>
  <content>
    <slot name="content"></slot>
  </content>
  <footer>
    <slot name="blogs"></slot>
  </footer>
 </div>
  <!-- <div>
    <h1><slot name="header"></slot>asdas</h1>
    <div><slot name="content"></slot></div>
    <div><slot name="About"></slot></div>
    <h1><slot name="Blogs"></slot></h1>
  </div> -->
</template> 
