import axios from 'axios';
import * as constants from './constants';

const changeDetaill = (title,content) =>({
    type: constants.CHANGE_DETAIL,
    title,
    content     
})

export const getDetail = (id) => {
    return (dispatch) =>{
        axios.get('/api/detail.json?id='+ id).then((res)=>{
            const result = res.data.data;
            dispatch(changeDetaill(result.title,result.content));
            // console.log(result.title);
        });
    }
}
