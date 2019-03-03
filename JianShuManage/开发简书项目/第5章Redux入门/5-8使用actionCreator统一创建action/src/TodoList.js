import React, { Component } from 'react';
import {Input, Button, List, Row } from 'antd';
// 引入仓库里的数据
import store from './store';

// 调用 actionCreate的方法
import { getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreate';

// 引入type 类型 的 常量
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';

class TodoList extends Component{
    /**
     * store 存储了公用的数据，我们就可以尝试去获取这公用的数据， 怎么获取呢。我们可以 constructor 尝试去输出公用数据
     */
    constructor(props){
        super(props);
        this.state = store.getState(); // this.state 的数据来源于 store.getState() 的数据
        // 可以通过 console.log() 去输出 store 的公用数据, 通过 store.getState() 获取公用的数据 
        // console.log(store.getState());
        console.log(this.state);
        
        // 做一个方法处理, 定义了 store 的改变，当 store 发生了改变，handleStoreChange 的方法就会被执行
        store.subscribe(this.handleStoreChange)

    }

    render(){        
        return  (
            <div style={{margin:10}}>
                <Row>
                    <Input 
                        value={this.state.inputValue}
                        placeholder='todo info' 
                        style={{width:300, marginRight:10}}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </Row>
                <Row>
                    <List                        
                        style={{marginTop:10, width:300}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                        <List.Item
                            actions={[<Button  onClick={() => this.handleItemDelete(index)}>删除</Button>]}
                        >
                           <span>{item}</span>
                        </List.Item>)}
                    /> 
                </Row>
            </div>
        )
    }

    // handleStoreChange 的方法 
    handleStoreChange = () => {
        console.log('store changed');
        // 改变 store 的里数据
        /**
         * 这句话是什么意思？ 当我感知到Store发生变化的时候，
         * 我就去调用 store.getState() 的方法，从store里面去重新取回数据；然后调用 this.setState 方法，
         * 替换掉当前这样的一条数据， 这样子的话，我这里的数据就和 store 的数据 同步了，就成了最新的数据了。
         */
        this.setState(store.getState()); 
    }

    handleInputChange = (e) => {
        // 通过 action 方法，去改变 store 里的 reducer 的数据
        /**
         * type 就是说 通过 change_input_value（change改变input里的value里的数据）
         */

        /*
        const action = {
            type:CHANGE_INPUT_VALUE, // 我要跟 store 说一句话，你去帮改变input的value 的值， 然后呢。再把 value 属性里的值，传递给过去
            value:e.target.value,      // 现在的值是，e.target.value, 然后呢。再把 value 的值，传递给过去
        }
        */

        const action = getInputChangeAction(e.target.value);

        // 通过 dispatch 传递过去
        store.dispatch(action);
        console.log(e.target.value);

        
    }

    // 通过提交的方式必变 store 里的数据
    handleBtnClick = () => {
        /*const action = {
            type:ADD_TODO_ITEM,            
        };*/
        const action = getAddItemAction();
        store.dispatch(action);
    }

    //  删除当前选中自己的数据
    handleItemDelete = (index) => {
        /*const action = {
            type:DELETE_TODO_ITEM,
            index,
        }*/

        const action = getDeleteItemAction(index)
        store.dispatch(action);
        console.log(action);
    }
}

export default TodoList;