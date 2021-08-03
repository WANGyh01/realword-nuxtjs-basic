import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5984b51e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _7b289bd3 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _71c7e396 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _a4b46dd2 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _4db5db61 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _a4335cfc = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5984b51e,
    children: [{
      path: "",
      component: _7b289bd3,
      name: "home"
    }, {
      path: "/profile/:username",
      component: _71c7e396,
      name: "profile"
    }, {
      path: "/settings",
      component: _a4b46dd2,
      name: "settings"
    }, {
      path: "/editor",
      component: _4db5db61,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _a4335cfc,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
