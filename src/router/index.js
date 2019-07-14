import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import Cake from '@/components/Cake'
import Home from '@/components/Home'
import IceCream from '@/components/IceCream'
import Coffee from '@/components/Coffee'
import Gift from '@/components/Gift'
import Car from '@/components/Car'
import Card from '@/components/Card'
import Login from '@/components/Login'
import MessageCenter from '@/components/MessageCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/cake",
      component: Cake
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    },
    {
      path: "/iceCream",
      component: IceCream
    },
    {
      path: "/coffee",
      component:Coffee
    },
    {
      path: "/gift",
      component: Gift
    },
    {
      path: "/car/:id",
      name: "car",
      component: Car
    },
    {
      path: "/card",
      name: "card",
      component: Card
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
     
      path: "/message-center",
      name: "message-center",
      component: MessageCenter
    }

  ]
})
