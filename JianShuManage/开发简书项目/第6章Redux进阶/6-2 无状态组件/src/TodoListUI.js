import React from 'react';
import {Input, Button, List, Row } from 'antd';

// 无状态组件
const TodoListUI = (props) => {
    const { handleInputChange, handleBtnClick, inputValue, list, handleItemDelete} = props;
        return (
            <div style={{margin:10}}>
                <Row>
                    <Input 
                        value={inputValue}
                        placeholder='todo info' 
                        style={{width:300, marginRight:10}}
                        onChange={handleInputChange}
                    />
                    <Button type="primary" onClick={handleBtnClick}>提交</Button>
                </Row>
                <Row>
                    <List                        
                        style={{marginTop:10, width:300}}
                        bordered
                        dataSource={list}
                        renderItem={(item, index) => (
                        <List.Item
                            actions={[<Button  onClick={(index) => handleItemDelete(index)}>删除</Button>]}
                        >
                           <span>{item}</span>
                        </List.Item>)}
                    /> 
                </Row>
            </div>
        )
}

/*
class TodoListUI extends Component{
    render(){
        const { handleInputChange, handleBtnClick, inputValue, list, handleItemDelete} = this.props;
        return (
            <div style={{margin:10}}>
                <Row>
                    <Input 
                        value={inputValue}
                        placeholder='todo info' 
                        style={{width:300, marginRight:10}}
                        onChange={handleInputChange}
                    />
                    <Button type="primary" onClick={handleBtnClick}>提交</Button>
                </Row>
                <Row>
                    <List                        
                        style={{marginTop:10, width:300}}
                        bordered
                        dataSource={list}
                        renderItem={(item, index) => (
                        <List.Item
                            actions={[<Button  onClick={(index) => handleItemDelete(index)}>删除</Button>]}
                        >
                           <span>{item}</span>
                        </List.Item>)}
                    /> 
                </Row>
            </div>
        )
    }
}
*/

export default TodoListUI;