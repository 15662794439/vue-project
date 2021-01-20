import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/username/login',
    method: 'post',
    data
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/detail',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
