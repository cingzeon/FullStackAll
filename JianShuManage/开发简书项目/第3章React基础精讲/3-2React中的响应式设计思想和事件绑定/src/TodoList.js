import React, { PureComponent, Fragment } from 'react';

class TodoList extends PureComponent {
    // super 继承了react的 PureComponent 组件
    constructor(props){
        super(props);
        this.state = {
            inputValue: 'hello',
            list: [],
        }
    }

    handleInputChange = (e) => {
        console.log('handleInputChange', e.target.value);
       
        this.setState({
            inputValue:e.target.value,
        })
    }

    handleButtonClick = () => {
        const { inputValue } = this.state;
        const pars = [];
        pars.push(inputValue);
        this.setState({
            list:pars,
        })
    }

    render () {
        const {list} = this.state;
        return (
            <Fragment>
                <input 
                    defaultValue={this.state.inputValue}
                    onChange={this.handleInputChange}
                 />

                <button onClick={this.handleButtonClick}>提交</button>
                <ul>
                    {
                        list.length > 0 ? this.state.list.map((item,index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        }):null
                    }                    
                </ul>
            </Fragment>        
        )
    }
}

export default TodoList;