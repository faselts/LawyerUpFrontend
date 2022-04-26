<template>
  <div class="canvas">
    <div class="container" >
      <h2>LawyerUP</h2>

      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>

      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>

      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
      <div class="block"></div>
    </div>
    <div class="vague"></div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Title",

  mounted() {
    this.title();
   
  },
  destroyed() {
  console.log('destroyed')
},
  methods: {
    title() {
      (function animateBlocks() {
        
          anime({
            targets: ".block",
            translateX: function () {
              return anime.random(-700, 700);
            },
            translateY: function () {
              return anime.random(-500, 500);
            },
            scale: function () {
              return anime.random(1, 5);
            },

            endDelay: 500,
            easing: "linear",
            duration: 4000,
            delay: anime.stagger(20),
            complete: animateBlocks,
          });
        

      })();
     
    },
  },
  
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins", sans-serif;
}

.block {
  position: absolute;
  width: 50px;
  height: 100px;
  background: linear-gradient(#f7984b, #ffeb7b);
}
.canvas {
  margin-top: 10vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 110vh;
  background: linear-gradient(#f7984b, #ffeb7b);
}
.container {
  
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  color: white;
  text-align: center;
  font-size: 12vw;
  line-height: 1em;
  font-weight: 900;
  z-index: 1;
  transform: translateY(-7vh);
}
</style>