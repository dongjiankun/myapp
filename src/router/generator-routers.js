// 前端理由表
const constantRouterComponents = {
  BasicLayout: () => import('@/pages/home/homeChildOne.vue')
}

// 树形结构数据 => vue-router 层级路由器
export const generator = (routerMap, parent) => {
  return routerMap.map(item => {
    const {
      title,
      show,
      hideChildren,
      hiddenHeaderContent,
      target,
      icon,
      url,
      keepAlive
    } = item.meta || {}
    const currentRouter = {
      //路由设置了path则使用path,没有则动态拼接
      path: item.path || `${( parent && parent.path ) || ''}/${item.key}`,
      // 路由名称(唯一)
      name: item.name || item.key || '',
      // 路由对应组件,动态导入
      component: constantRouterComponents[item.component || item.key] || (() => import(`@/pages/${item.component}`)),
      // layout
      layout: constantRouterComponents[item.component || item.key] || (() => import(`@/pages/${item.component}`)),
      // meta:页面标题,菜单图标
      meta: {
        keepAlive: keepAlive ? keepAlive : true,
        title: title,
        icon: icon || undefined,
        hiddenHeaderContent: hiddenHeaderContent,
        target: target,
        permission: item.name,
        url: url || ''
      }
    }

    //是否隐藏菜单
    if(show===false){
        currentRouter.meta.hidden = true
    }
    //是否隐藏子菜单
    if(hideChildren){
        currentRouter.hideChildrenInMenu = true
    }
    //重定向
    item.redirect && (currentRouter.redirect = item.redirect)

    //是否有子菜单,递归处理
    if(item.children && item.children.length > 0) {
        currentRouter.children = generator(item.children,currentRouter)
    }
    return currentRouter
  })
}
