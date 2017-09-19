// /**
//  * Created by Chris on 17/5/26.
//  */
import axios from 'axios'
// axios.defaults.headers.post['http_origin'] = 'Access-Control-Allow-Origin';
// axios.defaults.baseURL = 'http://134.96.161.143:9301';
axios.defaults.timeout = 10000;
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        // console.log('Api--ok');
        // console.log(response)
        resolve(response.data);
      })
      .catch((error) => {
        // console.log(error)
        reject(error)
      })
  }).catch((error) => {

  })
}

export default {
  // 获取我的页面的后台数据
  // mineBaseMsgApi() {
  //   console.log('进入api.js')
  //   return fetch('http://134.96.161.143:9301/public/adaptation/auth/login',params);
  // },
  loginApi(url,params) {
    return fetch(url, params)
  },
  widgetApi(url,params) {
    // let urls = 'http://134.96.161.143:9301/widget/data'+url;
    let urls = 'http://134.96.161.143:9301/test/data'+url;
    return fetch(urls, params)
  },
  oldTurnApi(params) {
    let urls = 'http://134.96.161.143:9301/public/adaptation/auth/sso';
    return fetch(urls, params)
  },
  ftpTurn(url,params) {
    let urls = 'http://134.96.161.143:9301'+url;
    return fetch(urls, params)
  }
}
