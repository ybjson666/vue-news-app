import { login,getBanners,getArticles,getNews,getArtiInfo,getNewsInfo } from '../utils/api';

import { LOGIN,SET_USER,GET_BANNERS,GET_ARTICLES,GET_NEWS,GET_ARTIINFO,GET_NEWSINFO } from './mutation_types';

export default {
    async req_login({commit},[{username,password},callBack]){
        const res =await login({username,password});
        const { token ,id , avatar ,nickname }=res;
        let userInfo={};
        userInfo.id=id;
        userInfo.avatar=avatar;
        userInfo.nickname=nickname;

        localStorage.setItem("userInfo",JSON.stringify(userInfo));
        localStorage.setItem('token',token);

        // const token="dff";
        commit(LOGIN,token);
        commit(SET_USER,userInfo);
        callBack();
    },
    async req_banners({commit},[callBack]){
        const res=await getBanners();
        const banners= res.banners;
        commit(GET_BANNERS,banners);
        callBack();
    },
    async req_articles({commit,state},[{offset,limited},isRefresh]){
        const res=await getArticles({offset,limited});
        let articles=[];
        if(isRefresh){
            articles=res.list
        }else{
            articles=state.articles.concat(res.list);
        }
        commit(GET_ARTICLES,articles);
    },
    async req_news({commit,state},[{offset,limited},isRefresh]){
        const res=await getNews({offset,limited});
        let news=[];
        if(isRefresh){
            news=res.news
        }else{
            news=state.news.concat(res.news);
        }
        commit(GET_NEWS,news);
    },
    async req_newsInfo({commit},id){
        const res=await getNewsInfo(id);
        const newsInfo= res.news;
        commit(GET_NEWSINFO,newsInfo);
    },
    async req_artiInfo({commit},id){
        const res=await getArtiInfo(id);
        const articleInfo= res.article;
        commit(GET_ARTIINFO,articleInfo);
    }
}