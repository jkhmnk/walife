import Vue from 'vue'
import Vuex from 'vuex'
// modules
import modules from './modules'
// middlewares
import middlewares from './middlewares'

// 重要，告诉 Vue 组件如何处理 Vuex 相关的配置
Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  middlewares,
  /**
   * 要开启严格模式，只需要在创建 Vuex store 实例时传入 strict: true
   * 在严格模式中，每当 Vuex state 在 mutation handlers 外部被改变时都会抛出错误。
   * 不要在生产环境中开启严格模式！ 为了检测在不合适的地方发生的状态修改, 严格模式会对 state 树进行一个深观察 (deep watch)。
   * 所以为了避免不必要的性能损耗，请在生产环境中关闭严格模式。
   */
  strict: process.env.NODE_ENV !== 'production'
})

if (module.hot) {
  // 使 modules 成为可热重载模块
  module.hot.accept(['./modules'], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
    const newModules = require('./modules').default
    // 加载新模块
    store.hotUpdate({
      modules: newModules
    })
  })
}

export default store
