const baseURL = 'http://web.source.91yunshi.com/' //api地址
const isLogin = window.localStorage.getItem('token');//用户信息
const token = JSON.parse(isLogin)//用户信息
export default {
  baseURL,
  token

}