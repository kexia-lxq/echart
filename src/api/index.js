import axios from '../utils/axios'
const api={
  home:'/api/report/home_block',//首页板块接口
}

export function home(data) {
  console.log('pppp')
    return axios.post('/api/report/home_block',data).then(res => {
      console.log('oooo')
      console.log(res);
    }).catch(error =>(Promise.reject(error)))
  }
  