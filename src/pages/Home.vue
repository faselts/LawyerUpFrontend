<template>
  <div class="main">
    <Title/>
    <Body2/>
    <Footer/>
    <!-- <Unit/> -->
  </div>
</template>

<script>

import Body2 from "../components/Body2.vue";
import Title from "../components/Title.vue";
import Footer from "../components/Footer.vue"

export default {
  name: "Animation",
  components:{
      Title,
      Body2,
      Footer
      // Unit
  },
  
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.intro {
  display: flex;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.intro-text {
  color: white;
  font-family: "Heebo", sans-serif;
  font-size: 3rem;
}
.hide {
  background: black;
  overflow: hidden;
}
.hide span {
  transform: translateY(100%);
  display: inline-block;
}

</style>
