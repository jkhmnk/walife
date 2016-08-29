<style lang="less">
  @import 'styles/global.less';
</style>
<template>
  <!-- 路由外链   -->
  <router-view></router-view>
</template>

<script type="text/babel">
import store from './store'

export default {
  replace: false,
  store // 仅需要在根组件中注入 store 实例一次即可
}
</script>

