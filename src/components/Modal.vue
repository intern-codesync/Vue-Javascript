<template>
  sss
  <div>
    <button @click="openModal">Open Modal</button>
    {{ message }}
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div class="flex items-start justify-between">
          <div class="text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Title</h3>
            <div class="mt-1">
              <p class="text-sm text-gray-500">
                Your modal description goes here
              </p>
            </div>
          </div>
        </div>
        <div class="text-left my-2">
          <p class="text-sm text-black">Your modal body goes here</p>
        </div>
        <div class="flex items-center justify-end gap-2 mt-4">
          <button
            @click="closeModal"
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-blue-500 px-4 py-2 text-base font-medium text-blue-500 hover:text-white hover:border-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
          >
            Close
          </button>
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let showModal = ref(false);
const message = "hello World";

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>


<!-- <script>
  import { ref } from 'vue';
  import Modal from './Modal.vue';
  
  export default {
    components: {
      Modal
    },
    setup() {
      const modalOpen = ref(false);
      const modalData = ref({
        title: 'Sample Title',
        content: 'Sample Content'
      });
  
      const openModal = () => {
        modalOpen.value = true;
      };
  
      const closeModal = () => {
        modalOpen.value = false;
      };
  
      return {
        modalOpen,
        modalData,
        openModal,
        closeModal
      };
    }
  };
  </script> -->
