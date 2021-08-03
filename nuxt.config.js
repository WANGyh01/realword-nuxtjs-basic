module.exports = {
  router: {
    linkActiveClass: 'active', // 默认激活类名
    extendRoutes (routes, resolve) {
      // 清除默认路由表（基于pages目录的）
      routes.splice(0)

      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '',
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            }, {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            // {
            //   path: '/register',
            //   name: 'register',
            //   component: resolve(__dirname, 'pages/login/')
            // }
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            }, {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            }, {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            }, {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            },
          ]
        }
      ])
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // 注册插件
  plugins: [
    // '~/plugins/request.js', // ～开头，表示从根路径出发
    // '~/plugins/dayjs.js'
  ]
}
