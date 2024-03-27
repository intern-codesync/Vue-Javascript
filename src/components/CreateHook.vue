 <template>
  <h1>This is the Create Hook Life Cycle</h1>
</template>

<script>
// export default {
//   name: "CreateHook",
//   data() {
//     console.log("created");
//   },  
//   beforeCreate() {
//     alert("beforeCreated");
//   },
//   created() {
//     alert("I m Created");
//   },
// };

export default {
  data() {
    return {
      val: "hello",
    };
  },
  beforeCreate() {
    console.log("Value of val is: " + this.val);
  },
};


</script>
