import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e7cc1786 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _202aa560 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _0df1f0b2 = () => interopDefault(import('../pages/index-2.vue' /* webpackChunkName: "pages/index-2" */))
const _0dd5c1b0 = () => interopDefault(import('../pages/index-3.vue' /* webpackChunkName: "pages/index-3" */))
const _90f7927a = () => interopDefault(import('../pages/our-history.vue' /* webpackChunkName: "pages/our-history" */))
const _c8989784 = () => interopDefault(import('../pages/our-team.vue' /* webpackChunkName: "pages/our-team" */))
const _5461b983 = () => interopDefault(import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */))
const _06282b0c = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _4b3d5f44 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _333fb496 = () => interopDefault(import('../pages/single-post.vue' /* webpackChunkName: "pages/single-post" */))
const _6eaf9cd8 = () => interopDefault(import('../pages/single-project.vue' /* webpackChunkName: "pages/single-project" */))
const _e48701a0 = () => interopDefault(import('../pages/single-service.vue' /* webpackChunkName: "pages/single-service" */))
const _16c9a0b4 = () => interopDefault(import('../pages/testimonials.vue' /* webpackChunkName: "pages/testimonials" */))
const _a85c61fc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _e7cc1786,
    name: "about"
  }, {
    path: "/contact",
    component: _202aa560,
    name: "contact"
  }, {
    path: "/index-2",
    component: _0df1f0b2,
    name: "index-2"
  }, {
    path: "/index-3",
    component: _0dd5c1b0,
    name: "index-3"
  }, {
    path: "/our-history",
    component: _90f7927a,
    name: "our-history"
  }, {
    path: "/our-team",
    component: _c8989784,
    name: "our-team"
  }, {
    path: "/posts",
    component: _5461b983,
    name: "posts"
  }, {
    path: "/projects",
    component: _06282b0c,
    name: "projects"
  }, {
    path: "/services",
    component: _4b3d5f44,
    name: "services"
  }, {
    path: "/single-post",
    component: _333fb496,
    name: "single-post"
  }, {
    path: "/single-project",
    component: _6eaf9cd8,
    name: "single-project"
  }, {
    path: "/single-service",
    component: _e48701a0,
    name: "single-service"
  }, {
    path: "/testimonials",
    component: _16c9a0b4,
    name: "testimonials"
  }, {
    path: "/",
    component: _a85c61fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
