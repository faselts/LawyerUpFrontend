<template>
  <div class="pagination">
    <select name="select" id="select" v-model="input.page"></select>
    <button @click="GoTo"></button>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "Pagination",
  data(){
    return{
      input:{
        page:null
      }
    }
  },
  mounted() {
    var count;
    Vue.axios.get("http://140.123.174.200/api/Lawyer").then((resp) => {
      this.count = resp.data.pageCount;
      count = resp.data.pageCount;

      const container = document.getElementById("select");

      for (var i = 1; i <= count - 0; i++) {
        var options = document.createElement("option");
        options.value = i;
        options.innerHTML = i;
        container.appendChild(options);
      }
    });
  },
  methods:{
     GoTo(){
      this.$emit('changeurll',this.input.page)
    }
  }
};
</script>

<style scoped>
button {
  width: 100px;
  height: 100px;
}
select {
  width: 50px;
}
</style>
