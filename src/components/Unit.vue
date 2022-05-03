<template>
  <div class="paginationpage">
    <div class="container">
      <div class="text-box">
        <Pagination v-on:changeurll="changeurl($event)" />
        <div v-for="item in list" :key="item.id" class="data" >
          <div class="information">
            <div class="space name">
              <button @click="detail(item.id), scrollto()">
                {{ item.name }}
              </button>
            </div>
            <div class="space sex">{{ item.sex }}</div>
            <div class="space guild_name">{{ item.guild_name }}</div>
            <div class="space email">{{ item.email }}</div>
            <div class="space tel">{{ item.tel }}</div>
          </div>
        </div>
      </div>

      <table border="1px" class="detail">
        <tr>
          <td>姓名</td>
          <td>性別</td>
          <td>年紀</td>
          <td>Email</td>
          <td>公會</td>
          <td>律師證號</td>
          <td>律師辦公室</td>
          <td>電話</td>
          <td>地址</td>
        </tr>
        <tr>
          <td>{{ detaillist.name }}</td>
          <td>{{ detaillist.sex }}</td>
          <td>{{ detaillist.age }}</td>
          <td>{{ detaillist.email }}</td>
          <td>{{ detaillist.guild_name }}</td>
          <td>{{ detaillist.now_lic_no }}</td>
          <td>{{ detaillist.office }}</td>
          <td>{{ detaillist.tel }}</td>
          <td>{{ detaillist.address }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Pagination from "./Pagination.vue";
// import anime from 'animejs/lib/anime.es.js';

Vue.use(VueAxios, axios);

export default {
  name: "Unit",
  components: {
    Pagination,
  },
  data() {
    return {
      list: undefined,
      detaillist: {
        name: null,
      },
      url: "http://140.123.174.200/api/Lawyer/",
    };
  },
  mounted() {
    Vue.axios
      .get("http://140.123.174.200/api/Lawyer")
      .then((resp) => {
        this.list = resp.data.data;
      });
    this.parallax();
  },
  methods: {
    
    scrollto() {
      var element = document.querySelector(".detail");
      var target = element.offsetTop;

      window.scrollTo({ top: target, behavior: "smooth" });
    },
    changeurl({ page, sex }) {
      let url = "http://140.123.174.200/api/Lawyer?CurrentPage=";
      let sexString = "";
      if(page==null){
        page = 1;
      }
      if(sex == true){
        sexString = "&Sort=sex";
      }
      url = url + page + sexString;
       Vue.axios
          .get(url)
          .then((resp) => {
            this.list = resp.data.data;
            console.log(
              resp
            );
          });
    },
    detail(par) {
      Vue.axios.get("http://140.123.174.200/api/Lawyer/" + par).then((resp) => {
        this.detaillist = resp.data;
      });
    },
    parallax() {
      const parallax = document.querySelector(".container");
      window.addEventListener("scroll", function () {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.4 + "px";
      });
    },
  },
};
</script>

<style scoped>
.information {
  display: flex;
  min-width: 700px;
}
/* .data:hover{
  background-color: rgb(147, 241, 248);
  
} */
.space {
  min-width: 10vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.email {
  width: 20vw;
}
.data:hover{
  background-color: rgb(143, 210, 255);
  transform: scale(1.05);
  transition:  0.4s ease;

}
.container {
  background-color: #646670;
  height: 150vh;
  background-size: contain;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.text-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.paginationpage {
  margin-top: 10vh;
  height: 140vh;
  width: 100vw;
}

a,
a:visited {
  color: blue;
  text-decoration: none;
}
.data {
  width: 60vw;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: white;
}
.data button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: rgba(0, 0, 255, 0.911);
}
.detail {
  margin-top: 10vh;
  margin-bottom: 10vh;
}
</style>