import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Advice from '@/pages/Advice'
import CreateArticle from '@/pages/CreateArticle'
import Article from '@/pages/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/technique',
      name: 'Technique',
      component: Advice
    },
    {
      path: '/postArticle',
      name: 'PostArticle',
      component: CreateArticle
    },
    {
      path: '/artile',
      name: 'Article',
      component: Article
    }
  ]
})
