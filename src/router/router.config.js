// 路由和菜单统一在router.config.js处理
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/login'
import Home from '@/pages/home/home';
import BasicLayout from 'fromCom/BasicLayout.vue'


/* 
目前脚手架中所有的路由都通过 router.config.js来统一管理，在 vue-router 的配置中我们增加了一些参数，如 hideChildrenInMenu,meta.title,meta.icon,meta.permission，来辅助生成菜单。其中：
https://blog.csdn.net/qq_36437172/article/details/107074350
hideChildrenInMenu 用于隐藏不需要在菜单中展示的子路由。用法可以查看 分步表单 的配置。
hidden 可以在菜单中不展示这个路由，包括子路由。效果可以查看 other 下的路由配置。
meta.title 和 meta.icon分别代表生成菜单项的文本和图标。
meta.permission 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示 *（默认情况下）。
meta.hidden 可以强制子菜单不显示在菜单上(和父级 hideChildrenInMenu 配合)
meta.hiddenHeaderContent 可以强制当前页面不显示 PageHeader 组件中的页面带的 面包屑和页面标题栏
菜单根据 router.config.js生成，具体逻辑在 src/store/modules/permission.js 中的 actions.GenerateRoutes 方法实现。
 */

export const asyncRouerMap = [];

// 路由的name必须与组件页面的name一致,这样才能使用include去动态缓存路由
export const constantRouterMap = [
 
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: {
      hidden: true,
      title: '',
      icon:'el-icon-s-grid'
    },
    children: [{
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/home/homeChildOne',
        name: 'homeChildOne',
        component: () => import('@/pages/home/homeChildOne.vue'),
      },
      {
        path: '/home/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
      }
    ]
  }
]
