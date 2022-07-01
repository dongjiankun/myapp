import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './router.config.js'

Vue.use(Router)

// 重写router的push方法,解决跳转自身报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if ( onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: constantRouterMap
})
