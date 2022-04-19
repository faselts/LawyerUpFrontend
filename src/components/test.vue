<template>
  <div id="slider2" class="slider2">
    <div class="video">
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/D1PvIWdJ8xo?controls=0&&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h1 class="typing2">BLUEMING</h1>
  </div>
</template>

<script>
export default {
  name: "Test",
  mounted() {
    // setTimeout(this.typing, 3000);
  },
  methods: {
    typing() {
      const texts = [
        "The day we met ",
        "Discover new song ",
        "Hate & Love ",
        "That's Love ",
        "IF YOU FELL IN LOVE? ",
      ];
      let count = 0;
      let index = 0;
      let currentText = "";
      let letter = "";

      (function type() {
        if (count === texts.length) {
          count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector(".typing2").textContent = letter;
        if (letter.length === currentText.length) {
          count++;
          index = 0;
          setTimeout(type, 2000);
        } else {
          setTimeout(type, 300);
        }
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
}
/* ----------------------typeanimation------------------------- */
.iframe{
  width: 100%;
  height: 100%;
}
.video {
  width: 100vw;
  height: 100vh;
  position: absolute;
}
.typing2 {
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  mix-blend-mode: multiply;
}
.slider2 {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.slider2 h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: "Heebo", sans-serif;
  font-size:22em;
}
.typing2 {
  position: relative;
  width: 5px;
}
.typing2::after {
  content: "";
  width: 10px;
  height: 30%;
  border-right: 5px solid rgb(0, 0, 0);
  animation: blink 0.5s infinite ease;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* ---------------first anime------------------------- */
</style>
