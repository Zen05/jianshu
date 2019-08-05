import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {Link} from 'react-router-dom';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSerach,
    Addition,
    SearWrapper,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
 } from './style';


 class Header extends Component{
    getListArea = () => {
        const {focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = ( page-1)*10; i < page*10; i++){
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }
        if(focused || mouseIn) {
            return(
                <SearchInfo  
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe865;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
     render(){
         var { focused,handleInputFocus,handleInputBlur,list,login,logout,mouseHover,handleMouseHover,handleMouseUnhover  } = this.props;
         console.log(mouseHover);
         
         return(
            <HeaderWrapper>
                <Link to={'/'}>
                    <Logo/>{/* 这是一种写法 */}
                </Link>
                <Nav>
                    <NavItem className='left active'>  
                        <span className="iconfont iconfontSize" >&#xe786;</span>
                        首页
                    </NavItem>
                    <NavItem 
                        className={mouseHover ? 'left focused' : 'left'}
                        onMouseEnter={ handleMouseHover }
                        onMouseLeave={ handleMouseUnhover }
                    >下载App</NavItem>
                    {
                        login ? 
                        <NavItem className='right' onClick={logout}>退出</NavItem> : 
                        <Link to='/login'>
                            <NavItem className='right'>登录</NavItem>
                        </Link>
                    }
                    <NavItem className='right'>                        
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            classNames="slide"
                            timeout={200}>
                            <NavSerach
                                className={focused ? 'focused' : '' }
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}>
                            </NavSerach>{/* 上述的几个组件有float属性，所以可以写在下面 */}
                        </CSSTransition>

                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom' }>&#xe6dd;</span>
                        {this.getListArea()}
                    </SearWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writting'>
                        <span className="iconfont">&#xe61b;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
         ) 
     }
 }

const mapStateToProps = (state)=>{
    return {
        focused : state.getIn(["header",'focused']),
        list: state.getIn(["header",'list']),
        page: state.getIn(["header","page"]),
        mouseIn: state.getIn(["header","mouseIn"]),
        totalPage: state.getIn(["header","totalPage"]),
        login: state.getIn(['login','login']),
        mouseHover: state.getIn(['header','mouseHover'])
    }
}
const mapDispathToProps = (dispatch) =>{
    return {
        handleInputFocus(list){
            (list.size===0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        },
        handleMouseHover(){
            dispatch(actionCreators.mouseHover())
        },
        handleMouseUnhover(){
            dispatch(actionCreators.mouseUnhover())
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);