<template>
  <div class="bg">
    <div>homeChildOne Page</div>
    <h1>{{ addVal }}</h1>
    <div>{{ currentTime }}</div>
  </div>
</template>

<script>
export default {
  name: "homeChildOne",
  data() {
    return {
      currentTime: "",
      addVal: 0,
    };
  },

  props: {},
  components: {},

  computed: {},

  watch: {
    xx: {
      handler(newVal, oldVal) {},
      immediate: true,
      deep: true,
    },
  },

  mounted() {},

  created() {
    console.log("homeChildPage", "created");
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
      setInterval(() => {
        this.addVal += 1;
      }, 1000);
  },

  methods: {},
};
</script>
<style lang='less' scoped>
.bg {
  background: cornflowerblue;
  width: 100%;
  height: 100%;
}
</style>