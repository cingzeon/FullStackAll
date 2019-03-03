import React, { Component } from 'react';
import {Input, Button, List, Row } from 'antd';
class TodoList extends Component{
    render(){
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
          ];

        return  (
            <div style={{margin:10}}>
                <Row>
                    <Input placeholder='todo info'  style={{width:300, marginRight:10}}/>
                    <Button type="primary">提交</Button>
                </Row>
                <Row>
                    <List
                        style={{marginTop:10, width:300}}
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    /> 
                </Row>
            </div>
        )
    }
}

export default TodoList;