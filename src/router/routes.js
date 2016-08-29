export default (router) => {
  // 配置路由
  const options = {
    '/': {
      component: (reslove) => require(['../views/home/index.vue'], reslove),
    },
    '/error/404': {
      notLogin: true,
      component: (reslove) => require(['../views/error/404.vue'], reslove)
    }
  }
  router.map(options)
  router.redirect({
    '*': '/error/404'
  })
}

