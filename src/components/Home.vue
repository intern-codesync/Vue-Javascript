<template>
  <div>
    <!-- <h1>Hello Ahmad, this is home {{ email }} component</h1> -->
    <button @click="Show">Click Me</button>
    <div v-if="showContent">my name is ahmad</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      // email: "ahmad@gmail.com",
      showContent: false,
    };
  },
  methods: {
    Show() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style>
h1 {
  font-size: 40px;
}
</style>
