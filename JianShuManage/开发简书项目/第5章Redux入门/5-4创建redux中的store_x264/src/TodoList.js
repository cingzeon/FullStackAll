import React, { Component } from 'react';
import {Input, Button, List, Row } from 'antd';
// 引入仓库里的数据
import store from './store';

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

    }

    render(){
        // const data = [
        //     'Racing car sprays burning fuel into crowd.',
        //     'Japanese princess to wed commoner.',
        //     'Australian walks 100km after outback crash.',
        //     'Man charged over missing wedding girl.',
        //     'Los Angeles battles huge wildfires.',
        //   ];
        

        return  (
            <div style={{margin:10}}>
                <Row>
                    <Input value={this.state.inputValue} placeholder='todo info' style={{width:300, marginRight:10}}/>
                    <Button type="primary">提交</Button>
                </Row>
                <Row>
                    <List
                        style={{marginTop:10, width:300}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    /> 
                </Row>
            </div>
        )
    }
}

export default TodoList;