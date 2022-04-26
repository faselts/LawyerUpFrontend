<template>
    <div>
        <h1>hello</h1>
    </div>
</template>

<script>


export default {
    name: "Works",
    mounted(){
        console.log(this.result)
        console.log("oops")
    },
    props:{
        result:undefined
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