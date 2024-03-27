<template>
    <div class="card" :class="{ outlined: variant === 'outlined' }">
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p>{{ content }}</p>
        <button v-if="showButton" @click="handleButtonClick">Click me</button>
      </div>
    </div>
  </template>
  
  <script >
  export default {
    name: 'Card',
    props: {
      title: {
        type: String,
        default: 'Card Title'
      },
      content: {
        type: String,
        default: 'Card Content'
      },
      variant: {
        type: String,
        default: 'standard',
        validator: (value) => ['standard', 'outlined'].includes(value),
      },
      showButton: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleButtonClick() {
        console.log('Button clicked');
        // You can add your button click logic here
      }
    }
  };
  </script>
  
  <style>
  .card {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
  }
  
  .outlined {
    border: 1px solid #e0e0e0;
  }
  
  .card-content {
    margin-top: 16px;
  }
  </style>
  