<template>
  <div class="formAbsolute">
    <div class="form">
      
        <input type="text" placeholder="input" autocomplete="off" required />
  
     

 

      <label for="name" class="label-name">
        <span class="content-name">Search</span>
      </label>
    </div>
  </div>
</template>

<script>
import TimelineLite from "gsap";

export default {
  name: "Search",
  mounted() {
    this.fullpage();
  },
  methods: {
    fullpage() {
      TimelineLite.fromTo(
        ".formAbsolute",
        1.4,
        { y: "-10vh", opacity: 0 },
        { y: "0%", opacity: 1, ease: TimelineLite.easeInOut },
        "+=5"
      );
    },
  },
};
</script>

<style scoped>
.formAbsolute {
  border-radius: 2rem;
  display: flex;
  z-index: 0;
  position: absolute;
  width: 45%;
  top: 20vh;
  left: 28%;
  height: 60px;
  background-color: white;
  justify-content: center;
  align-items: center;
  min-width: 100px;
}
.form {
  width: 90%;
  position: relative;
  height: 50px;
  border-radius: 2rem;
  left: 0px;
  top: 0;
}
.form input {
  width: 100%;
  height: 100%;
  color: #595f6e;
  padding-top: 20px;
  border: none;
  outline: none;
  border-radius: 2rem;
}
.form label {
  position: absolute;
  pointer-events: none;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  border-bottom: 2px solid #595f6e;
}
.content-name {
  color: #595f6e;
  position: absolute;
  bottom: 0.65rem;
  left: 0px;
  transition: all 0.3s ease;
}
.form input:focus + .label-name .content-name,
.form input:valid + .label-name .content-name {
  transform: translateY(-130%);
  font-size: 14px;
  color: #5fa8d3;
}
.form input:focus + .searchicon,
.form input:valid + .searchicon {
  border: 10px solid #5fa8d3;
}
.searchicon {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 30%;
  right: 0%;
  opacity: 0.5;
}
</style>