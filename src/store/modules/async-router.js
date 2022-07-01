import { asyncRouerMap,constantRouterMap } from '@/router/router.config.js';
import {
  generator
} from '@/router/generator-routers.js';

const  permission = {
    state: {
        routers:constantRouterMap,
        addRouters:[]
    },
    mutations:{
        SET_ROUTERS:(state,routers)=>{
            state.addRouters = routers
            state.routers= constantRouterMap.concat(asyncRouerMap).concat(routers)
        }
    },
    actions:{
        GenerateRoutes({commit},data){
            
        }
    }
}


// console.log('permission', permission)

export default permission
