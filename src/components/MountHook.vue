<template>
  <h1>This is the Mount Hook Life Cycle</h1>
</template>

<script>
export default {
  name: "MountHook",
 beforeMount() {
    // console.log("I'm Before mount", this.$el);
  },
  mounted() {
    console.log("I'm mounted");
    // alert("good")
  }, 

  // mounted() {
  //   console.log(`the component is now mounted.`)
  // }
};
</script>
