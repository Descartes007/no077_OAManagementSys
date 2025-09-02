import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gerenbianqian from '@/views/modules/gerenbianqian/list'
    import gongzuoshenpi from '@/views/modules/gongzuoshenpi/list'
    import news from '@/views/modules/news/list'
    import richeng from '@/views/modules/richeng/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryBumen from '@/views/modules/dictionaryBumen/list'
    import dictionaryGangwei from '@/views/modules/dictionaryGangwei/list'
    import dictionaryGerenbianqian from '@/views/modules/dictionaryGerenbianqian/list'
    import dictionaryGongzuoshenpi from '@/views/modules/dictionaryGongzuoshenpi/list'
    import dictionaryGongzuoshenpiYesno from '@/views/modules/dictionaryGongzuoshenpiYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryRicheng from '@/views/modules/dictionaryRicheng/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBumen',
        name: '部门',
        component: dictionaryBumen
    }
    ,{
        path: '/dictionaryGangwei',
        name: '岗位',
        component: dictionaryGangwei
    }
    ,{
        path: '/dictionaryGerenbianqian',
        name: '便签类型',
        component: dictionaryGerenbianqian
    }
    ,{
        path: '/dictionaryGongzuoshenpi',
        name: '工作类型',
        component: dictionaryGongzuoshenpi
    }
    ,{
        path: '/dictionaryGongzuoshenpiYesno',
        name: '工作审批状态',
        component: dictionaryGongzuoshenpiYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryRicheng',
        name: '日志类型',
        component: dictionaryRicheng
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/gerenbianqian',
        name: '个人便签',
        component: gerenbianqian
      }
    ,{
        path: '/gongzuoshenpi',
        name: '工作审批',
        component: gongzuoshenpi
      }
    ,{
        path: '/news',
        name: '通知公告',
        component: news
      }
    ,{
        path: '/richeng',
        name: '日志信息',
        component: richeng
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
