import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSerach,
    Addition,
    SearWrapper,
    Button,
    SearchInfo
 } from './style';

const Header = (props) => {
    return(
        <HeaderWrapper>
            <Logo href='/'/>{/* 这是一种写法 */}
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>                        
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearWrapper>
                    <CSSTransition
                        in={props.focused}
                        classNames="slide"
                        timeout={200}>
                        <NavSerach
                            className={props.focused ? 'focused' : '' }
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}>
                        </NavSerach>{/* 上述的几个组件有float属性，所以可以写在下面 */}
                    </CSSTransition>

                    <span className={props.focused ? 'focused iconfont' : 'iconfont' }>&#xe6dd;</span>
                    <SearchInfo></SearchInfo>
                </SearWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                <span className="iconfont">&#xe61b;</span>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}
const mapStateToProps = (state)=>{
    return {
        focused : state.getIn(["header",'focused'])
    }
}
const mapDispathToProps = (dispatch) =>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);