import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    //组件第一次存在于Dom中，函数是不会被执行
    //如果已经存在Dom中，函数才会被执行,较难使用，很少使用
    // UNSAFE_componentWillReceiveProps(){
    //     console.log('child-UNSAFE_componentWillReceiveProps')
    // }

    // componentWillUnmount(){
    //     console.log('child-componentWillUnmount')
    // }

    //最新版本的react不支持改优化
    //componentWillUpdate(nextProps,nextState){
    //     if(nextProps.content!==this.props.content){
    //         return true;
    //     }else{
    //         return false;
    //     }
        
    // }

    render() {
        console.log('child-render')
        return (
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务-{this.props.content}
            </li>
        );
    }
    handleClick() {
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

//默认服务值
XiaojiejieItem.defaultProps = {
    avname:'松岛枫'
}

export default XiaojiejieItem;