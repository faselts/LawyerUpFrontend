<template>
  <div class="intromain">
    <div class="intro">
      <div class="intro-text">
        <h1 class="hide">
          <span class="text">What</span>
        </h1>
        <h1 class="hide">
          <span class="text">are you</span>
        </h1>
        <h1 class="hide">
          <span class="text">finding ?</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineLite from "gsap";

export default {
  name: "Animation",
  mounted() {
    this.fullpage();
    // setTimeout(this.typing, 3000);
    setTimeout(this.add, 3500);
  },
  methods: {
    fullpage() {
      const fullpage = TimelineLite.timeline({
        defaults: { ease: "power1.out" },
      });

      fullpage.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
      // fullpage.to(".slider", { x: "0%", duration: 0.75, delay: 0.5 });
      // fullpage.to(".intro", { y: "-100%", duration: 0.5 });
      //   TimelineLite.fromTo(
      //     ".formAbsolute",
      //     1.4,
      //     { y: "-10vh", opacity: 0 },
      //     { y: "0%", opacity: 1, ease: TimelineLite.easeInOut },
      //     "-=2.7"
      //   );
    },
    typing() {
      const texts = [" LawyerUp."];
      let count = 0;
      let index = 0;
      let currentText = "";
      let letter = "";

      (function type() {
        // if(count === texts.length){
        //     count =0;
        // }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector(".typing").textContent = letter;
        if (letter.length === currentText.length) {
          count++;
          index = 0;
        }
        setTimeout(type, 300);
      })();
    },
    add() {
      document.querySelector(".intro").style.display = "none";
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

.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: disappear 0.5s;
  animation-delay: 9s;
  z-index: 3;
}
.slider h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: "Heebo", sans-serif;
  font-size: 10rem;
  animation: shrink 1.5s ease-in;
  animation-delay: 8s;
}


@keyframes shrink {
  0% {
    font-size: 10rem;
  }
  100% {
    font-size: 0;
  }
}
@keyframes disappear {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
/* ---------------first anime------------------------- */
.intromain {
  font-family: "Heebo", sans-serif;
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
  z-index: 2;
  animation: disappear 2.5s;
  animation-delay: 2s;
}
.intro-text {
  color: white;
  font-family: "Heebo", sans-serif;
  font-size: 3rem;
}
.slider {
  background: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
}
.hide {
  background: black;
  overflow: hidden;
}
.hide span {
  transform: translateY(100%);
  display: inline-block;
}
.formAbsolute {
  border-radius: 2rem;
  display: flex;
  z-index: 2;
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
</style>
