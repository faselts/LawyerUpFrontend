<template>
  <div class="about">
    <div class="result">
      <div class="record">
        <div v-for="item in results" :key="item.id" class="data">
          <div class="information">
            <div class="space">{{ item.classification }}</div>
            <div class="space">{{ item.type }}</div>
            <div class="space">{{ item.year }}</div>
            <div class="space">{{ item.judgeDate }}</div>
            <div class="lawyer">
              <div v-for="arr in item.lawyers" :key="arr.id">
                  <label>經驗律師:</label>
                <button class="lawyerbutton">{{ arr.name }}</button>
              </div>
            </div>
          </div>

          <div class="content">{{ item.mainContent }}</div>
        </div>
      </div>
      <div class="predict">
        <button @click="turn(first)">
          {{ this.$store.state.resultp.first }}
        </button>
        <button @click="turn(second)">
          {{ this.$store.state.resultp.second }}
        </button>
        <button @click="turn(third)">
          {{ this.$store.state.resultp.third }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "About",
  computed: {
    results() {
      return this.$store.state.results;
    },
    first() {
      return this.$store.state.resultp.first;
    },
    second() {
      return this.$store.state.resultp.second;
    },
    third() {
      return this.$store.state.resultp.third;
    },
  },
  methods: {
    show() {
      console.log(this.results);
    },
    turn(e) {
      //   if (this.$store.state.results == null) {
      //       console.log(e);
      //     axios
      //       .post("http://140.123.174.200/api/Search", {
      //         classification: e,
      //         searchQuery: "處",
      //       })
      //       .then((resp) => {
      //         console.log(resp.data);
      //         this.$store.state.results = resp.data.data;
      //       });
      //   } else {
      console.log(e);
      axios
        .post("http://140.123.174.200/api/Search", {
          classification: e,
          searchQuery: this.$store.state.query,
        })
        .then((resp) => {
          console.log(resp.data);
          this.$store.state.results = resp.data.data;
          
        })
      //   }
    },
  },
};
</script>

<style scoped>
.information{
    display: flex;
}
.content{
    margin-top: 1.5rem;
}
.space{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    height: 5vh;
}
.lawyer{
    margin-left: 5rem;
}
.lawyerbutton{
    height: 30px;
    background-color: rgb(29, 112, 105);
    font-size: 1rem;
}
.about {
  width: 100vw;
}
.data {
  margin: 2rem;
  background-color: rgb(211, 211, 208);
  padding: 1rem;
  border-radius: 10px;
}
.result {
  width: 100vw;
  background-color: rgb(105, 104, 103);
  position: absolute;
  top: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 5vw;
}
.predict {
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
}
button {
  width: 130px;
  height: 50px;
  margin: 0.5rem;
  background-color: rgb(43, 43, 43);
  color: white;
  border: none;
  cursor: pointer;
}
.record{
    width: 60vw;
    margin-top: 3vh;
}
</style>