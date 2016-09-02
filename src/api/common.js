import Vue from 'vue'
import uuid from 'node-uuid'
// router
import router from '../../src/router/index.js'

// utils
import sign, {createNonceStr} from '../utils/sign'

import {add, min} from '../store/actions/loading.js'
import store from './../store/index.js'

// localStorage accessToken的key
const ACCESS_TOKEN = '_ACCESS_TOKEN'

// 保存accessToken
export const saveAccessToken = (accessToken) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken)
}

// 获取accessToken
export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN)
}

export const request = ({method = 'post', url, data, options = {}} = {}) => {
  url = `/rest${url}`
  const requestId = uuid.v1().replace(/-/g, '')
  const accessToken = options.accessToken === null ? createNonceStr() : options.accessToken || getAccessToken()
  delete options.accessToken
  const signParams = sign(accessToken)
  options.params = {
    requestId,
    ...signParams,
...options.params,
}

  add(store) // loading数量加1
  return Vue.http[method](url, data, options)
      .catch(response => {
      min(store) // loading数量减1
      console.error(response)
  return Promise.reject({code: 500, msg: '服务器繁忙'})
})
.then((response) => {
    min(store)
    // 如果code 不等于200，当作异常处理
    const {data} = response
    if (data && data.code === 200) {
    return data.data
  }
  if (data && data.code === 403) { // 无权访问 用户无有效角色(删除角色)
    alert(data.msg)
    return data.msg
  }
  if (data && data.code === 401) { // 客户端未登录
    alert(data.msg)
    router.go('/login')
    return data.msg
  }
  if (data && data.code === 460) { // 用户不存在
    alert(data.msg)
    router.go('/login')
    return data.msg
  }
  return Promise.reject(data)
})
}
