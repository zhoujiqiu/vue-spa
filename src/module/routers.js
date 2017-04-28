/**
* 配置路由
**/
const Index = resolve => {
  require.ensure(['./index.vue'], () => {
    resolve(require('./index.vue'))
  })
}
const List = resolve => {
  require.ensure(['./list.vue'], () => {
    resolve(require('./list.vue'))
  })
}
const Detail = resolve => {
  require.ensure(['./detail.vue'], () => {
    resolve(require('./detail.vue'))
  })
}
const routers = [
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]
export default routers
