<template>
  <div class="paginationpage">
    <div class="container">
      <Pagination v-on:changeurll="changeurl($event)" />
      <div class="text-box">
        <table>
          <tr class="cate">
            <td align="center">name</td>
            <td align="center">sex</td>
            <td align="center">guide_name</td>
            <td align="center">email</td>
            <td align="center">tel</td>
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
      </div>

      <table border="1px" class="detail">
        <tr>
          <td>name</td>
          <td>sex</td>
          <td>age</td>
          <td>email</td>
          <td>guide_name</td>
          <td>now_lic_no</td>
          <td>office</td>
          <td>tel</td>
          <td>address</td>
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
      .get("http://140.123.174.200/api/Lawyer?CurrentPage=1")
      .then((resp) => {
        this.list = resp.data.data;
      });
    Vue.axios
      .get(
        "http://140.123.174.200/api/Lawyer/591630e6-1b58-47a9-bb40-1292a902906d"
      )
      .then((resp) => {
        this.detaillist = resp.data;
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
          .get("http://140.123.174.200/api/Lawyer?CurrentPage=1" )
          .then((resp) => {
            this.list = resp.data.data;
            console.log(
              "http://140.123.174.200/api/Lawyer?CurrentPage=1"
            );
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
      }
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
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.paginationpage {
  margin-top: 10vh;
  height: 20vh;
}

a,
a:visited {
  color: blue;
  text-decoration: none;
}
.data:nth-child(2n + 1) {
  background-color: rgb(255, 255, 255);
}
.data:nth-child(2n) {
  background-color: rgba(252, 198, 149, 0.7);
}
.data button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: rgba(0, 0, 255, 0.911);
}
tr {
  width: 100vw;
}
td {
  font-family: "poppins", sans-serif;
  font-size: 1.25rem;
  padding: 1rem;
}
.cate tr {
  font-size: 1rem;
  justify-content: center;
  align-items: center;
}
.cate td {
  justify-content: center;
  align-items: center;
}
table {
  margin: auto;
  background-color: rgb(255, 255, 255);
}
.detail {
  margin-top: 10vh;
  margin-bottom: 10vh;
}
</style>