import * as constants from './constants'; 
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list:[],
    page:1,
    totalPage:1,
    mouseIn:false,
    mouseHover: false
});

export default (state = defaultState, action ) => {
    switch(action.type){
        case constants.SEARCH_FOCUS: 
            //immutaable对象的set方法，会结合之前immutable对象的值
            //和设置的值，返回一个全新的对象
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        case constants.MOUSE_HOVER:
            return state.set('mouseHover',true);
        case constants.MOUSE_UNHOVER:
            return state.set('mouseHover',false);
        default:
            return state;
    }
}