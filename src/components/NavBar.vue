<template>
  <div>
    <nav id="navbar" class="navbar">
      <div class="logo">
        <div class="formAbsolute">
          <div class="form">
            <form @submit.prevent="postData" id="form">
              <input
                type="text"
                name="search"
                autocomplete="off"
                v-model="query"
                required
              />
              <button type="submit"></button>
            </form>
            <label for="name" class="label-name" id="label-name">
              <span class="content-name" id="content-name">Search</span>
            </label>
          </div>
        </div>
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/works" result="result">Works</router-link></li>
        <li><router-link to="/contactus">Contact Us</router-link></li>
      </ul>
      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
    
    <Title />
    <router-view></router-view>
  </div>
</template>

<script>
import TimelineLite from "gsap";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Title from "../components/Title.vue";

Vue.use(VueAxios, axios);

export default {
  name: "NavBar",
  components: {
    Title,
  },
  computed:{

  },
  data() {
    return {
      query: null,
      resultp: {
        first: null,
        second: null,
        third: null,
      },
      results: undefined,
    };
  },
  mounted() {
    this.clickburger();
    this.fullpage();
    this.scroll();

    // this.backcolor();
  },
  methods: {
    turn() {
      axios
        .post("", {})
        .then(() => {})
        .catch((error) => console.error("There was an error!", error));
    },
    async postData() {
      window.alert("predicting..."); /*jump alert out*/
      
      // await axios
      //   .post("http://140.123.174.200/api/Search", {
      //     searchQuery: JSON.stringify(this.query),
      //   })
      //   .then(() => {
         
      //     // console.log(resp);
      //   })
      //   .catch((error) => console.error("There was an error!", error));
      axios
        .post("http://140.123.174.200/api/PredictionModel", {
          query: JSON.stringify(this.query),
        })
        .then((response) => {
          (this.$store.state.resultp.first = response.data.first),
            (this.$store.state.resultp.second = response.data.second),
            (this.$store.state.resultp.third = response.data.third);
            console.log(response);
            window.alert("finished!");
        })
        .catch((error) => console.error("There was an error!", error));
       
    },
    clickburger() {
      const navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");

        burger.addEventListener("click", () => {
          nav.classList.toggle("nav-active");
          burger.classList.toggle("toggle");
        });
      };
      navSlide();
    },
    backcolor() {
      const slider = document.querySelector(".backcolor");

      TimelineLite.fromTo(
        slider,
        1.4,
        { x: "-100%" },
        { x: "0%", ease: TimelineLite.easeInOut },
        "+=10"
      );
    },
    fullpage() {
      TimelineLite.fromTo(
        ".navbar",
        1,
        { y: "-10vh", opacity: 0 },
        { y: "0%", opacity: 1, ease: TimelineLite.easeInOut },
        "+=0.8"
      );
    },
    scroll() {
      var prevScrollpos = 0;
      window.addEventListener("scroll", function () {
        var currentScrollpos = window.pageYOffset;
        // console.log(currentScrollpos);
        if (prevScrollpos > currentScrollpos) {
          document.getElementById("navbar").style.top = "0px";
        } else {
          document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollpos;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



form button {
  width: 2rem;
  height: 2rem;
  background: transparent;
  border-style: none;
  position: absolute;
  right: 0;
  top: 10px;
  background-image: url(https://cdn3.iconfinder.com/data/icons/flaticons-1/24/flaticon_search-512.png);
  background-size: cover;
}
#navbar {
  position: fixed;
  top: 0;
  transition: top 0.5s;
  width: 100vw;
  background-color: rgb(41, 41, 41);
  z-index: 2;
}
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins", sans-serif;
  height: 10vh;
  min-height: 70px;
}
.logo {
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 2.5rem;
  display: flex;
  height: 10vh;
  width: 50vw;
}
.nav-links {
  display: flex;
  width: 40%;
  justify-content: space-around;
}
.nav-links li {
  list-style: none;
  margin: 0;
}
.nav-links a {
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.2rem;
  font-weight: 100;
  color: white;
}
.burger {
  display: none;
  cursor: pointer;
}
.burger div {
  width: 40px;
  height: 5px;
  background-color: white;
  margin: 10px;
  transition: all 0.3s ease;
}
@media screen and (max-width: 1300px) {
  .nav-links {
    display: flex;
    width: 50%;
    justify-content: space-around;
  }
}
@media screen and (max-width: 1120px) {
  .nav-links {
    position: absolute;
    right: -40vw;
    top: 10vh;
    height: 90vh;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    background-color: brown;
    transform: translateX(0%);
    transition: transform 0.5s ease-in;
  }
  .nav-links li {
    margin: 1rem;
  }
  .burger {
    display: block;
  }
}
.nav-active {
  transform: translateX(-100%);
}
.toggle .line1 {
  transform: rotate(45deg) translate(12px, 10px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(-45deg) translate(12px, -10px);
}
.backcolor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background: linear-gradient(to left, white, black);
  z-index: -1;
}
.formAbsolute {
  border-radius: 2rem;
  display: flex;
  z-index: 0;
  position: absolute;
  width: 45%;
  top: 2vh;
  left: 5%;
  height: 6.7vh;
  background-color: white;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 45px;
}
.form {
  width: 90%;
  position: relative;
  height: 50px;
  left: 0px;
  top: 0;
}
.form input {
  width: 90%;
  height: 82%;
  color: #595f6e;
  position: absolute;
  top: 1vh;
  border: none;
  outline: none;
  font-size: 1rem;
}
.form label {
  position: absolute;
  pointer-events: none;
  left: 0;
  width: 100%;
  height: 90%;
  border-bottom: 2px solid #595f6e;
}
.content-name {
  color: #595f6e;
  position: absolute;
  bottom: 0.6rem;
  left: 1rem;
  font-size: 1rem;
  transition: all 0.3s ease;
}
#form:focus-within + #label-name #content-name,
#form:valid + #label-name #content-name {
  transform: translateY(-60%);
  font-size: 14px;
  color: #5fa8d3;
}
</style>
