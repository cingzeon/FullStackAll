import React, { PureComponent, Fragment } from 'react';
import TodoItem from './TodoItem';

import './style.css';
class TodoList extends PureComponent {
    // super 继承了react的 PureComponent 组件
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        }
    }

    handleInputChange = (e) => {
         // ref
         const value = this.input.value;

        // 新版的写法   
        // const value = e.target.value;
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
        
        // ref
        console.log(this.ul); // 获取 ul下面的元素
        console.log(this.ul.querySelectorAll('li').length);

        /*
        // 旧版的写法
            this.setState({
                list:[this.state.inputValue, ...this.state.list], // ...this.state.list 和 this.state.inputValue 生成一个新的数组，再将this.state.inputValue 加入进来
                inputValue:'',
            });
        */
    }


    // 点击删除当前的数据
    handleItemDelte = (index) => {
        /*
            const list = [...this.state.list];
            list.splice(index, 1);
            //旧版的写法
            this.setState({
                list:list,
            });
        */

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
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                {/* this.ul 是指向(ul)当前的 ul元素 */}
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}           
                </ul>
            </Fragment>        
        )
    }
}

export default TodoList;