<template>
  <div class="bg">
    <el-container class="bg-container">
      <el-scrollbar style="height: 100%">
        <el-aside class="bg-aside" :width="isCollapse ? '60px' : '200px'">
          <div class="aside-wrapper">
            <el-button
              @click="changeCollapse"
              type="text"
              :icon="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            />
            <el-menu
              text-color="#f4f4f4"
              :unique-opened="true"
              active-text-color="#001529"
              :collapse="isCollapse"
              :default-active="activeKey"
            >
              <!-- 遍历路由生成菜单 -->
              <template v-for="(menu, index) in menus">
                <!-- subMenu组件 -->
                <sub-menu
                  v-if="menu.children && menu.children.length"
                  :key="menu.path"
                  :menuInfo="menu"
                  @menuClick="menuClick"
                ></sub-menu>
                <!-- 菜单名 -->
                <el-menu-item
                  v-else-if="menu.meta.hidden !== true"
                  :key="menu.path"
                  :index="index"
                  @click="menuClick(menu)"
                >
                  <!-- <i
                    v-if="menu.meta.icon"
                    :key="menu.meta.icon"
                    :class="menu.meta.icon"
                  ></i>
                  <span>{{ menu.name }}</span> -->
                  <template slot="title">
                    <i
                      v-if="menu.meta.icon"
                      :key="menu.meta.icon"
                      :class="menu.meta.icon"
                    ></i>
                    <span>{{ menu.name }}</span>
                  </template>
                </el-menu-item>
              </template>
            </el-menu>
          </div>
        </el-aside>
      </el-scrollbar>
      <!-- 右侧主体 -->
      <el-container>
        <!-- 头部 -->
        <el-header style="background: #d9e1e4">Header</el-header>
        <!-- 书签 -->
        <el-tabs
          type="card"
          class="layout-tabs"
          v-if="tabConfig.length"
          v-model="activeKey"
          @tab-remove="removee"
          closable
          hide-add
          @tab-click="changeActiveKey"
        >
          <el-tab-pane
            v-for="tab in tabConfig"
            :key="tab.path"
            :label="tab.name || $route.name"
            :name="tab.path || $route.path"
          >
            <span slot="label">
              <i
                v-show="activeKey == tab.path"
                @click.stop="refreshPage(tab)"
                class="el-icon-refresh"
              ></i>
              {{ tab.name || $route.name }}
            </span>
          </el-tab-pane>
        </el-tabs>
        <!-- 页面主体 -->
        <el-main v-if="tabConfig.length">
          <!-- 路由,遍历所有书签,但是通过v-if控制展示 -->
          <template v-for="tab in tabConfig">
            <div
              v-show="tab.path == activeKey"
              :key="tab.id"
              style="height: 100%"
            >
              <transition :name="transitionRouter">
                <keep-alive>
                  <router-view
                    v-if="tab.path == $route.path"
                    :key="tab.id"
                  ></router-view>
                </keep-alive>
              </transition>
            </div>
          </template>
        </el-main>
        <el-main v-else>
          <h1>首页</h1>
          <li>
            <ul>vue的jsx写法</ul>
            <ul>准备面试</ul>
          </li>
        </el-main>
        <!-- 底部 -->
        <el-footer style="background: #c1d1d7">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import permission from "@/store/modules/async-router.js";
import { constantRouterMap } from "@/router/router.config.js";
import SubMenu from "./MenuComponents.vue";
import { generator } from "@/router/generator-routers.js";
import { mapState } from "vuex";

export default {
  name: "BasicLayout",
  data() {
    return {
      isCollapse: false,
      // 路由切换动画classname
      transitionRouter: "",
      menus: [
        // //每个索引对应一个菜单
        // {
        //   path: "",//路由地址
        //   children: [
        //     {
        //       path: "", //路径
        //     },
        //   ],
        // },
      ],
      //   defaultOpeneds:['0','1'],
    };
  },

  props: {},
  components: {
    SubMenu,
  },

  computed: {
    ...mapState({
      tabConfig: (state) => state.tabConfig,
    }),
    activeKey: {
      get() {
        return this.$store.state.activeKey;
      },
      set() {},
    },
  },

  watch: {
    tabConfig: {
      handler(newVal, oldVal) {
        // console.log("watch tabConfig", newVal);
      },
      deep: true,
      immediate: true,
    },
    activeKey: {
      handler(newVal, oldVal) {
        const tab = this.tabConfig.find((item) => item.path === newVal);
        // 切换tab时,router的query也要携带
        let { query } = tab || {};
        if (newVal) {
          this.$router.push({ path: newVal, query });
        } else {
          this.$router.push("/");
        }
      },
      immediate: true,
      deep: true,
    },
    // 监听路由变化,根据书签数组中是否存在,及to,from的位置添加不同的动画
    $route(to, from) {
      let tabHasTo = false,
        tabHasFrom = false;
      let toIndex = -1,
        fromIndex = -1;
      for (let index = 0; index < this.tabConfig.length; index++) {
        if (this.tabConfig[index].path === to.path) {
          tabHasTo = true;
          toIndex = index;
        }
        if (this.tabConfig[index].path === from.path) {
          tabHasFrom = true;
          fromIndex = index;
        }
      }
      //如果书签中有to及from,则使用左右切换动画
      if (tabHasTo && tabHasFrom) {
        if (fromIndex < toIndex) {
          this.transitionRouter = "slide-left";
        } else {
          this.transitionRouter = "slide-right";
        }
        // 如果书签中没有to或者from,则都添加渐入渐出动画
      } else {
        this.transitionRouter = "fade-out";
      }
    },
  },

  mounted() {},

  created() {
    // console.log("constantRouterMap>>>", generator(constantRouterMap));
    this.menus = generator(constantRouterMap);
  },

  methods: {
    changeCollapse() {
      this.$nextTick(() => {
        this.isCollapse = !this.isCollapse;
      });
    },
    //点击菜单
    menuClick(item) {
      this.$router.push({
        path: item.path,
      }).then(()=>{
         this.$store.commit("ADD_TAB", item);
      })
     
      
    },
    // 关闭书签
    removee(val) {
      this.$store.commit("DEL_TAB", val);
    },
    // 切换书签
    changeActiveKey({ name }) {
      // console.log("changeActiveKey", name);
      this.$store.commit("CHANGE_TABKEY", name);
    },
    // 刷新书签
    refreshPage(val) {
      // console.log("refreshPage begin id", val.id);
      //   this.$store.commit("CHANGE_TABKEY", val.path);
      this.$store.commit("REFRESH_TAB", val);
      this.tabConfig[0].id = `${new Date().getTime()}`;
      // 是不是因为tabConfig与router的key值只是单向绑定的问题?
      //   this.$set("tabConfig", 0, "id", `${new Date().getTime()}`);
      //在不断切换菜单后,再去点击书签的刷新,页面不会刷新,key打印是变了,只有在切换其他书签再切换回来才会触发刷新.watch也是同理.只有使用$forceUpdate才有用
        this.$forceUpdate()
      // console.log("refreshPage end id", this.$store.state.tabConfig[0].id);
    },
  },
};
</script>
<style lang='less' scoped>
/deep/.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/deep/.el-submenu__title > span {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;

  i {
    margin-right: 0;
    color: #f4f4f4;
  }
}
/deep/.el-menu--collapse .el-submenu__title span > span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  //   display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
   color: #f4f4f4 !important;
}

/deep/.el-menu--collapse .el-submenu__icon-arrow {
  display: none;
}
.bg {
  width: 100vw;
  height: 100vh;
  &-container {
    height: 100%;
    /deep/.el-scrollbar__view {
      height: 100%;
    }
  }
  &-aside {
    height: 100%;
    background: linear-gradient(
      145deg,
      #001529,
      rgb(56, 100, 194),
      rgb(73, 73, 209)
    );
    transition-duration: 0.5s;
  }
  .aside-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /deep/ .el-button {
      //   align-self: flex-end;
      //   margin-right: 14px;
    }
    /deep/ .el-button--text {
      font-size: 24px !important;
    }
  }
}
/deep/ .el-menu {
  background: transparent;
  border-right: none;
  width: 100%;
  .el-submenu__title {
    padding: 0 !important;
  }
  .el-menu-item {
    padding: 0 !important;
  }
  .el-submenu__icon-arrow {
    color: #f4f4f4;
    top: 31px;
  }
}
/deep/.el-submenu__title:hover {
  background-color: #2972be;
}
/deep/.el-menu-item.is-active {
  background: linear-gradient(
    45deg,
    #f4f4f4 0%,
    rgb(56, 100, 194),
    rgb(111, 111, 226)
  ) !important;
}
/deep/ .el-menu-item:focus {
  background: linear-gradient(
    45deg,
    #f4f4f4,
    rgb(56, 100, 194),
    rgb(111, 111, 226)
  ) !important;
}
/deep/.el-menu-item:hover {
  background: #2972be !important;
}

@keyframes turnZ {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}
.layout-tabs {
  /deep/.el-icon-refresh {
    margin-right: 5px;
  }
  /deep/.el-icon-refresh:hover {
    animation-name: turnZ;

    animation-duration: 3s;

    animation-iteration-count: 1;
  }
}
// 路由跳转动画
// .transitionRouter-enter-active,
// .transitionRouter-leave-active {
//     transition: all 0.4s;
// }

// .transitionRouter-enter,
// .transitionRouter-leave{
//     transform: translate3d(100%, 0, 0);
// }

// 路由动画

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms;
  position: absolute;
  z-index: -100;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}


.fade-out-enter-active{
  will-change: opacity;
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-delay: 0s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

</style>