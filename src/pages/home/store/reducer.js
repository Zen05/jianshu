import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    articlePage:1,
    showScroll:false,
    bannerList:[]
});

const changeHomeState = (state, action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
}

const addArticleList = (state, action)=>{
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    }) 
}

export default (state = defaultState, action ) => {
    switch(action.type){
        case constants.CHANGE_HOME_DATA: 
            //immutaable对象的set方法，会结合之前immutable对象的值
            //和设置的值，返回一个全新的对象
            // return state.set('focused',true);
            return changeHomeState(state, action);
        case constants.ADD_ARTICLE_LIST: 
            return addArticleList(state, action)
        case constants.TOGGLE_TOP_SHOW: 
            return state.set('showScroll',action.show)
            // state.set('articleList',state.get('articleList').concat(action.list))          
        default:
            return state;
    }
}