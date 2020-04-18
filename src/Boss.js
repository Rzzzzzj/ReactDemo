import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

//三个库
// - Transition
// - CssTransition
// - TransitionGroup

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toToggle = this.toToggle.bind(this)
    }
    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.isShow} //用于判断是否出现的状态
                    timeout={2000} //动画持续时间
                    classNames="boss-text"//classNames值放置重复
                    unmountOnExit//元素退场时删除Dom
                >
                    <div>Boss级任务-孙悟空</div>
                    </CSSTransition>
                    {/* <div className={this.state.isShow?'show':'hide'}>Boss-孙悟空</div> */}
                    <div><button onClick={this.toToggle}>召唤</button></div>
            </div>
         );
    }
    toToggle(){
                    this.setState({
                        isShow: this.state.isShow ? false : true
                    })
                }
}
 
export default Boss;