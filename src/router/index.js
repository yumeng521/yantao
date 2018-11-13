import Vue from 'vue'
import Router from 'vue-router'
import BottomNav from '@/components/bottomNav'
import My from '../pages/my'
import Friend from '../pages/friend'
import Chat from '../pages/chat'
import Follow from '../pages/follow'
import Collect from '../pages/collect'
import Loda from '../pages/loda'
import MySchool from '../pages/mySchool'
import Course from '../pages/course'
import Setup from '../pages/setup'
import AboutYan from '../pages/aboutYan'
import huadong from '../pages/huadong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BottomNav',
      component: BottomNav
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend,
      meta:{
        title:"好友"
      }
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      meta: {
        title: "Springhug"
      }
    },
    {
      path: '/follow',
      name: 'Follow',
      component: Follow,
      meta: {
        title: "关注"
      }
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect,
      meta: {
        title: "我的收藏"
      }
    },
    {
      path: '/loda',
      name: 'Loda',
      component: Loda,
      meta: {
        title: " "
      }
    },
    {
      path: '/mySchool',
      name: 'MySchool',
      component: MySchool,
      meta: {
        title: "我的院校 "
      }
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
      meta: {
        title: "我的课程 "
      }
    },
    {
      path: '/setup',
      name: 'Setup',
      component: Setup,
      meta: {
        title: "个人设置 "
      }
    },
    {
      path: '/aboutYan',
      name: 'AboutYan',
      component: AboutYan,
      meta: {
        title: "关于我们 "
      }
    },
    {
      path: '/huadong',
      name: 'huadong',
      component: huadong,
      meta: {
        title: " "
      }
    }
  ]
})
