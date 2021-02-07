import axios from 'axios'
import qs from 'qs'
// create an axios instance

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

console.log(111)

const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
	withCredentials: true, // send cookies when cross-domain requests	
	headers:{
		'content-Type' :'application/x-www-form-urlencoded'
	} ,
	timeout: 50000, // request timeout
})

// request interceptor
service.interceptors.request.use(
	config => {
		// do something before request is sent

		// if (store.getters.token) {
		// 	// let each request carry token
		// 	// ['X-Token'] is a custom headers key
		// 	// please modify it according to the actual situation
		// 	config.headers['X-Token'] = getToken()
		// }
		// console.log('request config',config)
		// const transParams = {
		// 	Data :  JSON.stringify(config.data)
		// };
		if(!(config.data instanceof FormData)){
			config.data = qs.stringify(config.data)
		}
		return config
	},
	error => {
		// do something with request error
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	(response) => {
		const res = response.data
		/* 获取服务器响应头文件名,单独处理 */
		if(response.headers['content-disposition']){
			const contentDisposition = response.headers['content-disposition']
			const filename = (contentDisposition.substring(contentDisposition.indexOf('filename'))).split('=')[1]
			// console.log('fileName',filename);
			return {res,filename }
		}
		// if the custom code is not 0, it is judged as an error.
		if (res.code && res.code !== 0) {
			// console.log(123456)
			return Promise.reject('error')
		} else {
			return res
		}
	},
	error => {
		// console.log('err' + error) // for debug
		return Promise.reject(error)
	}
)


export default service;
