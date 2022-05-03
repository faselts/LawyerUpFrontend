<template>
  <div class="canvas">
    <section class="sec-01">
      <div class="container">
        <h2 class="main-title">Reveal Elements on Scroll</h2>
        <div class="content">
          <div class="image">
            <img
              src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
              alt=""
            />
          </div>
          <div class="text-box">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem accusantium minima fugiat eveniet quis nobis minus
              fuga deleniti! Nihil labore quam ipsam molestias deserunt sit quos
              sequi libero architecto animi!
            </p>
          </div>
        </div>
        <div class="media-icons">
          <a href="#" class="icon"><i class="fab fa-facebook"></i></a>
          <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="icon"><i class="fab fa-twitter"></i></a>
          <a href="#" class="icon"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </section>
    <section class="sec-02">
      <div class="content">
        <div class="text-box sec-02-box1">
          <h4 class="info-title">Description</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem accusantium minima fugiat eveniet quis nobis minus
            fuga deleniti! Nihil labore quam ipsam molestias deserunt sit quos
            sequi libero architecto animi!
          </p>
        </div>
        <div class="text-box sec-02-box2">
          <h4 class="info-title">Description</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem accusantium minima fugiat eveniet quis nobis minus
            fuga deleniti! Nihil labore quam ipsam molestias deserunt sit quos
            sequi libero architecto animi!
          </p>
        </div>
        <div class="text-box sec-02-box3">
          <h4 class="info-title">Description</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem accusantium minima fugiat eveniet quis nobis minus
            fuga deleniti! Nihil labore quam ipsam molestias deserunt sit quos
            sequi libero architecto animi!
          </p>
        </div>
      </div>
    </section>
    <section class="sec-03">
      <div class="container">
        <h3 class="section-title">Reveal Elements on Scroll</h3>
        <div class="content">
          <div class="media-info">
            <li>
              <a href="#" class="icon"
                ><i class="fab fa-facebook"></i>Facebook</a
              >
            </li>
            <li>
              <a href="#" class="icon"
                ><i class="fab fa-instagram"></i>Instagram</a
              >
            </li>
            <li>
              <a href="#" class="icon"><i class="fab fa-twitter"></i>Twitter</a>
            </li>
            <li>
              <a href="#" class="icon"><i class="fab fa-youtube"></i>Youtube</a>
            </li>
            <li>
              <a href="#" class="icon"
                ><i class="fab fa-linkedin"></i>Linkedin</a
              >
            </li>
          </div>
          <div class="jarallax">
            <div class="image">
              <img
                src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg"
                alt=""
                class="jarallax-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
import { jarallax } from "jarallax";

export default {
  name: "Body",
  mounted() {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
    ScrollReveal({
      reset: true,
      distance: "100px",
      duration: 2500,
      interval: 0,
      scale: 0.8,
    });
    ScrollReveal().reveal(".main-title", { delay: 100, origin: "left" });
    ScrollReveal().reveal(".sec-01 .image", { delay: 100, origin: "bottom" });
    ScrollReveal().reveal(".text-box", { delay: 100, origin: "right" });
    ScrollReveal().reveal(".sec-02-box1", { delay: 100, origin: "bottom" ,distance:"100px"});
    ScrollReveal().reveal(".sec-02-box2", { delay: 150, origin: "bottom" ,distance:"200px"});
    ScrollReveal().reveal(".sec-02-box3", { delay: 200, origin: "bottom" ,distance:"300px"});
    ScrollReveal().reveal(".media-info li", {
      delay: 100,
      origin: "top",
      interval: 200,
    });
    // function isInViewport(el) {
    //   const rect = el.getBoundingClientRect();
    //   return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <=
    //       (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <=
    //       (window.innerWidth || document.documentElement.clientWidth)
    //   );
    // }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sec-02 {
  background: url(https://images2.boardingschoolreview.com/photo/1122x864/1000/593/img-academy-oqxuxY.jpg);
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
}
.sec-02 .content{
  display: flex;
  padding-left: 10vw;
  padding-bottom: 10vh;
}
.sec-02 .content .text-box{
  margin: 2rem;
}
.canvas {
  background: rgb(5, 5, 5);
  height: 290vh;
  width: 100vw;
}
section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15vh 100px;
  color: white;
}
.container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.main-title {
  font-size: 4rem;
  margin-bottom: 3vh;
}
.content {
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content .image {
  position: relative;
  width: 800px;
  height: 400px;
  overflow: hidden;
}
.content .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
}
.content .text-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 40px;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transform: translate(-80px, 50px);
}
content .text-box h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}
.media-icons {
  margin-top: 100px;
}
.media-icons a {
  color: white;
  font-size: 2em;
  margin: 60px;
}
.section-title {
  font-size: 3em;
  margin-bottom: 80px;
}
.info-title {
  font-size: 1.8em;
  margin-bottom: 10px;
}
.info {
  width: 30vw;
  margin-left: 5vw;
}
.media-info {
  width: 400px;
  margin-left: 50px;
}
.media-info li {
  list-style: none;
  font-size: 1.4em;
}
.media-info li a {
  color: white;
  text-decoration: none;
}
.media-info li:not(:last-child) {
  margin-bottom: 50px;
}
.media-info li:nth-child(1),
.media-info li:nth-child(5) {
  padding-left: 10vw;
}
.media-info li:nth-child(2),
.media-info li:nth-child(4) {
  padding-left: 4vw;
}
.sec-03 {
  background-color: rgb(65, 65, 65);
}
</style>