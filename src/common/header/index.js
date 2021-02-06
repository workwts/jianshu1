import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList,SearchInfoItem} from './style'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'

class Header extends Component {
    getListArea (show){
        if(show){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>简书</SearchInfoItem>
                        <SearchInfoItem>生活</SearchInfoItem>
                        <SearchInfoItem>投稿</SearchInfoItem>
                        <SearchInfoItem>历史</SearchInfoItem>
                        <SearchInfoItem>PHP</SearchInfoItem>
                        <SearchInfoItem>考研</SearchInfoItem>
                        <SearchInfoItem>docker</SearchInfoItem>
                        <SearchInfoItem>EOS</SearchInfoItem>
                        <SearchInfoItem>微信小程序</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render (){
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
                            <NavSearch className={this.props.focused?"focused":""} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <span className={this.props.focused?"focused iconfont":"iconfont"}>&#xe60b;</span>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">
                        <span className="iconfont">&#xe678;</span>
                        写文章
                    </Button>
                    <Button className="writting">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused:state.getIn(['header','focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)