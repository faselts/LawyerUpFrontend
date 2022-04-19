<template>
  <div id="app">
    <Intro/>
    
    <NavBar/>
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";

import NavBar from "./components/NavBar.vue";


export default {
  name: "App",
  components: {
    Intro,
    NavBar,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
   overflow-x: hidden;
   min-width: 940px;
  }
  ::-webkit-scrollbar {
    display: none;
}

</style>


// json-server --watch db.json