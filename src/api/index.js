const axios = require('axios')

const prefixUrl = 'http://localhost:80'

export async function doRegister (registerForm) {
  return axios.post(`${prefixUrl}/user.register`, registerForm)
}

export async function doLogin (loginForm) {
  return axios.post(`${prefixUrl}/user.login`, loginForm)
}

export async function doPostArticle (articleForm, token) {
  return axios.post(`${prefixUrl}/article.post`, {
    articleForm, token
  })
}
