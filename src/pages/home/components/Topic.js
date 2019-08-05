import React, { Component } from 'react';
import { TopicWrapper,TopicItem } from '../style';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

class Topic extends Component {
    render(){
        const {list} = this.props;
        return (
            <TopicWrapper>
               
                <Carousel autoplay>
                    <div>
                        <img src='http://localhost:3000/img/banner_img1.png'></img>
                    </div>

                    <div>
                        <img src='http://localhost:3000/img/banner_img2.png'></img>
                    </div>
                </Carousel>
                {
                    list.map((item)=>{
                        return (                            
                            <TopicItem key={item.get('id')}>
                                <img
                                    className='topic-pic'
                                    src={item.get('imgUrl')}
                                    alt=''/>
                                {item.get('title')}
                            </TopicItem> 
                        )
                    })
                }
                <TopicItem>
                    <img
                        className='topic-pic'
                        src='http://localhost:3000/img/img.jpg'
                        alt=''/>
                    社会热点
                </TopicItem> 
               
                <a className='more-topic' href='/'>更多热门专题 ></a>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state)=>({
    list:state.getIn(['home','topicList']),
    banner:state.getIn(['home','bannerList'])
})

export default connect(mapStateToProps,null)(Topic);