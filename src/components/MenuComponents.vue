<template>
  <div>
    <el-submenu :key="menuInfo.path" :index="menuInfo.path">
      <span slot="title">
        <i
          v-if="menuInfo.meta.icon"
          :key="menuInfo.meta.icon"
          :class="menuInfo.meta.icon"
        ></i>
        <span>{{ menuInfo.name }}</span>
      </span>
      <template v-for="item in menuInfo.children">
        <!-- 递归自身 -->
        <sub-menu
          v-if="item.children && item.children.length"
          :index="item.path"
          :key="item.path"
          :menu-info="item"
          @menuClick="selectHandler"
        ></sub-menu>
        <el-menu-item
          v-else-if="item.meta.hidden !== true"
          :key="item.path"
          :index="item.path"
          @click="selectHandler(item)"
        >
          <i
            v-if="item.meta.icon"
            :key="item.meta.icon"
            :class="item.meta.icon"
          ></i>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "SubMenu",
  data() {
    return {};
  },

  props: {
    menuInfo: {
      type: Object,
      default: () => {},
    },
    index: {
      type: String,
      default: "",
    },
  },
  components: {},

  computed: {},

  watch: {
    //   xx:{
    //      handler(newVal,oldVal) {
    //      },
    //      immediate: true,
    //      deep: true
    //   },
  },

  mounted() {
    console.log("this.props", this.menuInfo);
  },

  created() {},

  methods: {
    // 递归自身方法
    selectHandler(item) {
      this.$emit("menuClick", item);
    },
  },
};
</script>
<style lang='less' scoped>
</style>