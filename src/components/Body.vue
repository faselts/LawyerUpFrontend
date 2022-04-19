<template>
  <div class="body">
    <div class="bodydiv">1</div>
    <div class="bodydiv">2</div>
    <div id="parallax" class="bodydiv">3</div>
    <div class="bodydiv">4</div>
    <div class="bodydiv">5</div>
    <div id="parallax" class="bodydiv">6</div>
    <div class="bodydiv">7</div>
  </div>
</template>

<script>
export default {
  name: "Body",
  mounted() {
    this.parallax();
  },
  methods: {
    parallax() {
      const parallax = document.getElementById("parallax");
      window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.4 + "px";
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bodydiv {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
}
div:nth-child(1) {
  background: white;
  height: 100vh;
}
div:nth-child(2) {
  background: rgb(202, 193, 193);
  height: 100vh;
}
div:nth-child(3) {
  background-image: url(https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg);
  background-size: cover;
  height: 80vh;
}
div:nth-child(4) {
  background: rgb(158, 155, 155);
  height: 80vh;
}
div:nth-child(5) {
  background: rgb(85, 83, 83);
  height: 80vh;
}
div:nth-child(6) {
  background-image: url(https://images.pexels.com/photos/2734512/pexels-photo-2734512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  background-attachment: fixed;
}
div:nth-child(7) {
  background: rgb(0, 0, 0);
  height: 30vh;
}
.body{
    margin-top: 100vh;
}
</style>