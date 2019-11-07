
export default{
    token:localStorage.getItem('token') || "",
    userInfo:JSON.parse(localStorage.getItem('userInfo')) || {},
    banners:[],
    articles:[],
    news:[],
    newsInfo:{},
    artiInfo:{}
}