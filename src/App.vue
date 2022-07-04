<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  name: "App",
  created() {
    // 监听路由
    this.$router.beforeEach((to, from, next) => {
      // to and from are both route objects. must call `next`.
      // console.log("路有变化", "to", to, "from", from, "next", next);
      // 进度条
      NProgress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      // to and from are both route objects.
      NProgress.done();
    });

    // 防止刷新页面store丢失
    // 在页面加载时读取sessionStorage里的状态信息
    let storeCurrent = window.sessionStorage.getItem("store");
    if (storeCurrent !== null) {
      this.$store.replaceState(
        Object.assign({}, this.$store.state, JSON.parse(storeCurrent))
      );
      sessionStorage.removeItem("store");
    }
    // // pagehide 解决ios移动端不支持beforeunload,安卓端两个都可以用
    // // 在页面刷新时将vuex里的信息保存到sessionStorage里
    //  window.addEventListener('beforeunload', () => {
    //   sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    // })
    // 页⾯显⽰（pageshow）和页⾯隐藏（pagehide）事件
    window.addEventListener("pagehide", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
    // https://blog.csdn.net/weixin_42349568/article/details/122827399
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
