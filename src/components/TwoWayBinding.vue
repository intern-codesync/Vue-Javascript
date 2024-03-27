<template>
    <h1>This the to way Binding</h1>
    <input type="text" placeholder="Enter TEXT" v-model="count" />
    <h2>{{ count }}</h2>
</template>
<script>
export default {
    name: "TwoWayBinding",
    data(){
        return{
            count:null
        }
    }
}
</script>