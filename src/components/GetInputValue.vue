<template>
    <h1>Getting input value</h1>
    <input type="text" placeholder="Name" v-model="text" />
    <br>
    <br>
    <input type="password" placeholder="Password" v-model="password"/>
    <br>
    <br>
    <button v-on:click="getdata">Get Data</button>

</template>
<script>
export default {
    name:"GetInputValue",
    data(){
        return{
            text: null,
            password:null
        }
    },

  methods:{
    getdata(){
            console.log("Values",this.text,this.password);
    }
  }
    
}
</script>