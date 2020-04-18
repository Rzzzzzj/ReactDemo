import React, { Component, Fragment } from 'react'
import './style.css'
// import axios from 'axios'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import { CSSTransition , TransitionGroup} from 'react-transition-group'


class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背', '躺式采耳']
        }
    }

    //axios请求数据
    // componentDidMount(){
    //     axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
    //         .then((res)=>{
    //             console.log('数据获取成功'+JSON.stringify(res))
    //         })
    //         .catch((error)=>console.log('获取数据失败'+error))
    // }

    // UNSAFE_componentWillMount(){
    //     console.log('组件即将挂载到页面的时刻')
    // }
    
    // componentDidMount(){
    //     console.log('组件挂载完成')
    // }

    // shouldComponentUpdate(){
    //     console.log('1-shouldComponentUpdate')
    //     return true
    //     //true 执行 false不执行
    // }

    // UNSAFE_componentWillUpdate(){
    //     console.log('2-UNSAFE_componentWillUpdate')
    // }

    // componentDidUpdate(){
    //     console.log('4-componentDidUpdate')
    // }



    render() {
        // console.log('3-render-----组件挂载中')
        return (
            //flex
            <Fragment>
                <div>
                    <label htmlFor="rzj" >增加服务:</label>

                    <input
                        id="rzj"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        //ref绑定Dom元素
                        ref={(input) => { this.input = input }}
                    />

                    <button onClick={this.addList.bind(this)}>增加服务</button></div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                    {
                        //循环
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={2000}
                                    classNames='boss-text'
                                    unmountOnExit
                                    appear={true}
                                    key={index+item}
                                >
                                {/* <li
                                //     key={index + item}
                                //     onClick={this.deleteItem.bind(this,index)}
                                //     //解析html文本框内的代码
                                //     dangerouslySetInnerHTML={{__html:item}}
                                // >
                                // </li> */}

                                <XiaojiejieItem
                                    content={item}
                                    key={index + item}
                                    index={index}
                                    // avname='波多野结衣'
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                                </CSSTransition>

                            )
                        })
                    }
                    </TransitionGroup>
                </ul>

                <Boss/>
            </Fragment>
        )
    }
    //输入列表
    inputChange() {
        // console.log(e.target.value);

        // this.setState(e){
        //     inputValue:e.target.value
        // }
        //等同于上面的写法
        this.setState({
            inputValue: this.input.value
        })
    }
    //增加列表 
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            // 两者相同 list: ['基础按摩', '精油推背', this.state.inputValue],
            inputValue: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
            //异步函数回调
        })
        
    }
    //删除列表项
    deleteItem(index) {
        // console.log(index)
        let list1 = this.state.list
        list1.splice(index, 1)
        this.setState({
            list: list1
        })
    }

}
export default Xiaojiejie