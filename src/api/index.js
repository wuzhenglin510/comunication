const axios = require('axios')

const prefixUrl = 'http://111.230.134.11:80'

export async function doRegister (registerForm, accessCode) {
  let params = {
    registerForm,
    accessCode
  }
  return axios.post(`${prefixUrl}/user.register`, params)
}

export async function doLogin (loginForm, accessCode) {
  let params = {
    loginForm,
    accessCode
  }
  return axios.post(`${prefixUrl}/user.login`, params)
}

export async function doPostArticle (articleForm, token, accessCode) {
  return axios.post(`${prefixUrl}/article.post`, {
    articleForm, token, accessCode
  })
}

export async function doGetArticle (articleId, accessCode) {
  return axios.post(`${prefixUrl}/article.get`, {
    articleId, accessCode
  })
}

export async function doListArticle (classify, token, accessCode) {
  let params = {accessCode}
  if (token) params.token = token
  if (classify) params.classify = classify
  return axios.post(`${prefixUrl}/article.list`, params)
}

export async function doPostComment (comment, token, accessCode) {
  let params = {comment, accessCode}
  if (token) params.token = token
  return axios.post(`${prefixUrl}/article.comment.post`, params)
}

export async function doListComment (articleId, accessCode) {
  return axios.post(`${prefixUrl}/article.comment.list`, {articleId, accessCode})
}

export async function doUpload (formdata, accessCode) {
  formdata.append('accessCode', accessCode)
  let resposne = await axios(
    {
      url: `${prefixUrl}/pic.upload`,
      method: 'post',
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data' }
    }
  )
  return `${prefixUrl}/${resposne.data}`
}
