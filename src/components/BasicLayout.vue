<template>
  <div class="bg">
    <el-container class="bg-container">
      <el-scrollbar style="height: 100%">
        <el-aside class="bg-aside" :width="isCollapse ? '95px' : '200px'">
          <div class="aside-wrapper">
            <el-button
              @click="isCollapse = !isCollapse"
              type="text"
              :icon="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            />
            <el-menu
              text-color="#909090"
              :unique-opened="true"
              active-text-color="#001529"
              :collapse="isCollapse"
            >
              <!-- 遍历路由生成菜单 -->
              <template v-for="menu in menus">
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
                  :index="menu.path"
                  @click="menuClick(menu)"
                >
                  <i
                    v-if="menu.meta.icon"
                    :key="menu.meta.icon"
                    :class="menu.meta.icon"
                  ></i>
                  <span>{{ menu.name }}</span>
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
              <i @click.stop="refreshPage(tab)" class="el-icon-refresh"></i>
              {{ tab.name || $route.name }}
            </span>
          </el-tab-pane>
        </el-tabs>
        <!-- 页面主体 -->
        <el-main>
          <!-- 路由,遍历所有书签,但是通过v-if控制展示 -->
          <template v-for="tab in tabConfig">
            <div
              v-show="tab.path == activeKey"
              :key="tab.id"
              style="height: 100%"
            >
              <keep-alive>
                <router-view
                  v-if="tab.path == $route.path"
                  :key="tab.id"
                ></router-view>
              </keep-alive>
            </div>
          </template>
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
      isCollapse: true,
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
  },

  mounted() {},

  created() {
    console.log("constantRouterMap>>>", generator(constantRouterMap));
    this.menus = generator(constantRouterMap);
  },

  methods: {
    //点击菜单
    menuClick(item) {
      this.$store.commit("ADD_TAB", item);
      this.$router.push({
        path: item.path,
      });
    },
    // 关闭书签
    removee(val) {
      this.$store.commit("DEL_TAB", val);
    },
    // 切换书签
    changeActiveKey({ name }) {
      console.log("changeActiveKey", name);
      this.$store.commit("CHANGE_TABKEY", name);
    },
    // 刷新书签
    refreshPage(val){
        this.$store.commit("REFRESH_TAB", val);
    },
  },
};
</script>
<style lang='less' scoped>
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
      align-self: flex-end;
      margin-right: 14px;
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
    top: 31px;
  }
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
</style>