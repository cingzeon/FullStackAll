import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';
class TodoList extends Component {
    // super 继承了react的 PureComponent 组件
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        }
    }


    // 在组件被挂载到页面上之后。被执行。
    componentDidMount(){
        // 获取请求数据
        /*let result = {};
        this.ajax().then((res) => {
            result = res;
        })*/

        axios.get('/api/todolist')
        .then((res) => {
            // 成功调用 .then 的方法
            console.log('succes', res);
        }).catch((error) => {
            // 失败调用 .catch 的方法
            console.log('error',error);
        })
    }

    handleInputChange = (e) => {

        // 新版的写法   
        const value = e.target.value;
        this.setState(() => ({
                inputValue:value,
            })
        )

       
    }

     // 点击增加数据
    handleBtnClick = () => {
        // 新版的写法
        this.setState((prevState) => ({
            list:[prevState.inputValue, ...prevState.list], // ...this.state.list 和 this.state.inputValue 生成一个新的数组，再将this.state.inputValue 加入进来
            inputValue:'',
        }));
        
           }


    // 点击删除当前的数据
    handleItemDelte = (index) => {
        // 新版的写法
        this.setState((prveState) => {
            const list = [...prveState.list];
            list.splice(index, 1);
            return { list };
        })

    }


    // 组件
    getTodoItem = () => {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem 
                    key={index}
                    content={item}
                    index={index}
                    handleItemDelte={this.handleItemDelte}
                />
            )
        })
    }

    // 数据发重变化的时候调用 render 函数 
    render () {
        return (
            <Fragment>
                <div>
                    <label htmlFor={'insertArea'}>输入内容：</label>
                     {/* this.input 是指向(input)当前的 input元素 */}
                    <input
                        id='insertArea'
                        className='input'
                        defaultValue={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                {/* this.ul 是指向(ul)当前的 ul元素 */}
                <ul>
                    {this.getTodoItem()}           
                </ul>
            </Fragment>        
        )
    }
}

export default TodoList;