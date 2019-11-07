import axios from 'axios';
import { Toast } from 'mint-ui'

const isDev=process.env.NODE_ENV==='development';
const baseUrl="http://rap2api.taobao.org/app/mock/234057";


const service=axios.create({
    baseURL:isDev ? baseUrl:'http://rap2api.taobao.org/app/mock/234057',

})

service.interceptors.request.use((config)=>{
    
    config.data=Object.assign({},config.data,{
        token:localStorage.getItem('token')
    })
    return config
})
service.interceptors.response.use((res)=>{
    if(res.data.code===200){
        return res.data.data
    }else{
        Toast({
            message: res.data.errMsg,
            iconClass: 'mintui mintui-field-warning'
        })
        //全局处理

    }
})

export default service;