import {sync} from 'vuex-router-sync'
// resource
import './api/resource'
// VueValidator
import './validator'
// router
// 如果与 vue-router 同时使用，必须在调用 router#map, router#start 等实例方法前安装验证器。
import router from './router'

import App from './App.vue'
// store
import store from './store'

// 将store与router同步
sync(store, router)

// 设置字体大小
import setFontSize from './utils/setFontSize'

// 设置字体大小
setFontSize()

// 现在我们可以启动应用了！
// 路由器会创建一个 Root 实例，并且挂载到 body 元素上。
router.start(App, 'body')
