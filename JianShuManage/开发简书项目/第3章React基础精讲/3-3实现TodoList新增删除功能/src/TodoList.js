import React, { PureComponent, Fragment } from 'react';

class TodoList extends PureComponent {
    // super 继承了react的 PureComponent 组件
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        }
    }

    handleInputChange = (e) => {
        console.log('handleInputChange', e.target.value);
        this.setState({
            inputValue:e.target.value,
        })      
    }

     // 点击增加数据
    handleBtnClick = () => {
        if(this.state.inputValue){
            // 点击进行增加数据
            this.setState({
                list:[...this.state.list, this.state.inputValue], // ...this.state.list 和 this.state.inputValue 生成一个新的数组，再将this.state.inputValue 加入进来
                inputValue:''
            })
            console.log('lit',[...this.state.list, this.state.inputValue]);
        }else{
            alert('请输入内容');
        }
        
    }


    // 点击删除当前的数据
    handleItemDelte = (index) => {
        /**
         * immutable
         *  state 不充许我们做任何的改变
         */

        const list = [...this.state.list];
        // 删除当前下标的一个
        list.splice(index, 1);
        this.setState({
            list:list,
        })
        console.log('点击删除当前的数据', index);
    }

    render () {
        const {list} = this.state;
        return (
            <Fragment>
                <input 
                    defaultValue={this.state.inputValue}
                    onChange={this.handleInputChange}
                 />

                <button onClick={this.handleBtnClick}>提交</button>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <li 
                                    key={index} 
                                    onClick={() => this.handleItemDelte(index)}
                                >
                                    {item}
                                </li>
                            )
                        }) 
                    }                 
                </ul>
            </Fragment>        
        )
    }
}

export default TodoList;