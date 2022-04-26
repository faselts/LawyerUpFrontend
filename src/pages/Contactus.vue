<template>
    <div class="tablelist">
        <Unit/>
    </div>
</template>

<script>
import Unit from "../components/Unit.vue";

export default {
  name: "Contactus",
  components:{
      Unit,
  }
};
</script>

<style scoped>
.tablelist{
    transform: translateY(-120vh);
    position: absolute;
    z-index: 1;
}
</style>