import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    overflow:hidden;
    margin: 2px auto;
`;

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    
`;
export const HomeRight = styled.div`
    width: 290px;
    float: right;
`;
export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
    .more-topic{
        display:block;
        margin-left: 18px;
        margin-top:25px;
        float:left;
        color:#555;
        font-size:12px;
    }
`;

export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-top:18px;
    font-size:12px;
    background:#f7f7f7;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right:10px;
    .topic-pic{
        display:block;
        float:left;
        heigth:32px;
        width:32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height:24px;
        font-size: 13px;
        color: #999;
    }
    .otherMsg {
        font-size: 12px;
        line-height: 12px;
        color: #b4b4b4;
    }
    .d1 {
        color:#ea6f5a;
        line-height: 12px;
        margin-right: 10px;
    }
    .d2 {
        color: #b4b4b4;
        margin-right: 10px;
        font-size: 12px;
    }
    .d3 {
        font-size: 13px;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 290px;
`;

export const RecommendItem = styled.div`
    width: 290px;
    height: 50px;
    background: url(${(props)=>props.imgUrl});
    background-size: 100% 100%;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const LoadMore = styled.div`
    width:100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`
export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size:14px;
`;
