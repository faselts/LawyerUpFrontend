<template>
  <div class="paginationpage">
    <div class="container">
<<<<<<< HEAD
      
      <!-- <div class="text-box">
=======
          <Pagination v-on:changeurll="changeurl($event)" />

      <div class="text-box">
        
>>>>>>> 23901ff4f91c2f8e900cb2620e105bbd0396cd40
        <table>
          <tr class="cate">
            <td align="center">姓名</td>
            <td align="center">性別</td>
            <td align="center">公會</td>
            <td align="center">Email</td>
            <td align="center">電話</td>
          </tr>
          <tr v-for="item in list" :key="item.id" class="data">
            <td class>
              <button @click="detail(item.id), scrollto()">
                {{ item.name }}
              </button>
            </td>
            <td class>{{ item.sex }}</td>
            <td class>{{ item.guild_name }}</td>
            <td class>{{ item.email }}</td>
            <td class>{{ item.tel }}</td>
          </tr>
        </table>
<<<<<<< HEAD
      </div> -->

      <div class="text-box">
        <Pagination v-on:changeurll="changeurl($event)" />
        <div v-for="item in list" :key="item.id" class="data">
          
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
=======
        



>>>>>>> 23901ff4f91c2f8e900cb2620e105bbd0396cd40
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
// import ScrollReveal from "scrollreveal";

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
    // ScrollReveal({
    //   reset: true,
    //   distance: "30px",
    //   duration: 1000,
    //   interval: 0,
    // });
    // ScrollReveal().reveal(".detail", {  origin: "bottom" });

    Vue.axios
      .get("http://140.123.174.200/api/Lawyer")
      .then((resp) => {
        this.list = resp.data.data;
      });
    /* Vue.axios
      .get(
        "http://140.123.174.200/api/Lawyer/591630e6-1b58-47a9-bb40-1292a902906d"
      )
      .then((resp) => {
        this.detaillist = resp.data;
      }); */
    this.parallax();
  },
  methods: {
    scrollto() {
      var element = document.querySelector(".detail");
      var target = element.offsetTop;

      window.scrollTo({ top: target, behavior: "smooth" });
    },
    changeurl({ page, sex }) {
<<<<<<< HEAD
      if (sex == true && page != null) {
        Vue.axios
          .get(
            "http://140.123.174.200/api/Lawyer?CurrentPage=" +
              page +
              "&Sort=sex"
          )
          .then((resp) => {
            this.list = resp.data.data;
            console.log(
              "http://140.123.174.200/api/Lawyer?CurrentPage=" +
                page +
                "&Sort=sex"
            );
          });
      } else if (sex == true && page == null) {
        Vue.axios
          .get("http://140.123.174.200/api/Lawyer?CurrentPage=1" + "&Sort=sex")
          .then((resp) => {
            this.list = resp.data.data;
            console.log(
              "http://140.123.174.200/api/Lawyer?CurrentPage=1" + "&Sort=sex"
            );
          });
      } else if (sex == false && page == null) {
        Vue.axios
          .get("http://140.123.174.200/api/Lawyer?CurrentPage=1")
          .then((resp) => {
            this.list = resp.data.data;
            console.log("http://140.123.174.200/api/Lawyer?CurrentPage=1");
          });
      } else {
        Vue.axios
          .get("http://140.123.174.200/api/Lawyer?CurrentPage=" + page)
          .then((resp) => {
            this.list = resp.data.data;
            console.log(
              "http://140.123.174.200/api/Lawyer?CurrentPage=" + page
            );
          });
=======
      let url = "http://140.123.174.200/api/Lawyer?CurrentPage=";
      let sexString = "";
      if(page==null){
        page = 1;
>>>>>>> 23901ff4f91c2f8e900cb2620e105bbd0396cd40
      }
      if(sex == true){
        sexString = "&Sort=sex";
      }
      url = url + page + sexString;
      VueAxios.get(url)
      .then((resp) => {
            this.list = resp.data.data;
            console.log(url);
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
.space{
  min-width: 10vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.email{
  width: 20vw;
}


.container {
  background-color: rgb(156, 153, 153);
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
<<<<<<< HEAD
  
=======
  margin-top: 10vh;
>>>>>>> 23901ff4f91c2f8e900cb2620e105bbd0396cd40
}
.paginationpage {
  margin-top: 10vh;
  height: 20vh;
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
/* tr {
  width: 100vw;
}
td {
  font-family: "poppins", sans-serif;
  font-size: 1.25rem;
  padding: 1rem;
} */
/* .cate tr {
  font-size: 1rem;
  justify-content: center;
  align-items: center;
}
.cate td {
  justify-content: center;
  align-items: center;
} */
/* table {
  margin: auto;
  background-color: rgb(255, 255, 255);
} */
.detail {
  margin-top: 10vh;
  margin-bottom: 10vh;
}
</style>