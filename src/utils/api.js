import service from './request';

export const getArticles=({offset,limited})=>{
    return service.post('/api/v1/articlelist',{
        offset,
        limited
    })
}
export const login=({username,password})=>{
    return service.post('/api/v1/login',{username,password})
}
export const getBanners=()=>{
    return service.post('/api/v1/bannerList')
}
export const getNews=({offset,limited})=>{
    return service.post('/api/v1/newsList',{
        offset,
        limited
    })
}
export const getNewsInfo=(id)=>{
    return service.post('/api/v1/newsInfo',{newsId:id})
}
export const getArtiInfo=(id)=>{
    return service.post('/api/v1/articleInfo',{articleId:id})
}