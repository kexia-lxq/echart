import axios from 'axios';
import { Message } from 'element-ui';
import { getCookie } from '@/utils/cookie'

// Request 拦截器
axios.interceptors.request.use(
  // 在发送请求之前做些什么
  config => {
    if (getCookie('token')) {
      config.headers['X-Token'] = getCookie('token');
      console.log(getCookie('token'));
    }
    return config;
  },
  // 对请求错误做些什么
  error => Promise.reject(error)
);

// Response 拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const data = response.data;
    if (data.statusCode === 200) {
      return Promise.resolve(data.content);
    } else if (data.content.code === 2001) {
      // 2001 code 码代表列表查询为空
      const content = {
        record_count: 0,
        record_list: [],
      };
    }
    return response
  }, 
  (error) => {
    let message = '系统异常，请稍后再试';
    Message({
      // 提示框
      showClose: true,
      message,
      type: 'error'
    });
  return Promise.reject(error);
});

export default axios;
