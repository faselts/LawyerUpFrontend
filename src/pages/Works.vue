<template>
    <div>
        <h1>{{result}}}</h1>
    </div>
</template>

<script>


export default {
    name: "Works",
    mounted(){
        console.log(this.result)
        //console.log("oops")
    },
    props:{
        result:Object
    }
}
</script>

<style scoped>
div{
    height: 30vh;
    width: 100vh;
    background-color: #fff;
}
</style>