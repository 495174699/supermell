import axios from 'axios'
export function request(config) {

    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 10000
    })


    // 1.请求拦截
    instance.interceptors.request.use(config => {
            //config中的内容不符合服务器需求
            //希望在界面中显示动画
            // console.log(config);
            return config
        }, err => {
            console.log(err);
        })
        // 2.响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        // console.log(res.data);
        return res
    }, err => {
        console.log(err);
    })
    return instance(config)
}