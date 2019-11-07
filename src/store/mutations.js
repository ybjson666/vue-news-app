import { LOGIN,SET_USER,GET_BANNERS,GET_ARTICLES,GET_NEWS,GET_ARTIINFO,GET_NEWSINFO } from './mutation_types';

export default{
    [LOGIN](state,token){
        state.token=token
    },
    [SET_USER](state,user){
        state.user=user
    },
    [GET_BANNERS](state,banners){
        state.banners=banners
    },
    [GET_ARTICLES](state,articles){
        state.articles=articles
    },
    [GET_NEWS](state,news){
        state.news=news
    },
    [GET_NEWSINFO](state,newsInfo){
        state.newsInfo=newsInfo
    },
    [GET_ARTIINFO](state,artiInfo){
        state.artiInfo=artiInfo
    }
}
