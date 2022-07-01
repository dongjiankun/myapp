<template>
  <div class="bg">
    <!-- <BasicLayout /> -->
    <h1>Home Page</h1>
  </div>
</template>
<script>
import BasicLayout from 'fromCom/BasicLayout.vue'
export default {
  name: "Home",
  components:{
    BasicLayout,
  },
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    console.log("mounted.....");

  },
  created() {
    console.log("created.....");
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
    .bg{
      width: 100%;
    }
</style>