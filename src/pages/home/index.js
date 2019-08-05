import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style.js'

class Home extends PureComponent {
    handleScrollTop(){
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic/>
                    <List/>
                </HomeLeft> 
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>   
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }
                             
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }

}
const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData(){
       dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>300){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});
export default connect(mapState,mapDispatch)(Home)