<template>
    <div class="result">
      <div class="first">
        <button @click="turn(resultp.first)">
         {{this.$store.state.resultp.first}}
        </button>
      </div>
      <div class="second">
        <button @click="turn(resultp.second)">
          {{ this.$store.state.resultp.second }}
        </button>
      </div>
      <div class="third">
        <button @click="turn(resultp.third)">
          {{ this.$store.state.resultp.third }}
        </button>
      </div>
    </div>
</template>

<script>


export default {
    name: "Works",
    data(){
        
    },
    mounted(){
        
    },
    
}
</script>

<style scoped>
div{
    height: 30vh;
    width: 100vh;
    background-color: #fff;
}

.result {
  height: 70vh;
  width: 80vw;
  background-color: rgb(153, 90, 90);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 20vh;
  z-index: 2;
  left: 10vw;

  color: #000;
  
}
button {
  width: 100px;
  height: 100px;
  color: #000;
}
</style>