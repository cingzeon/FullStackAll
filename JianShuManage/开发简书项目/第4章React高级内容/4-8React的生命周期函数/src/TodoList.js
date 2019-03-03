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


    // 1. 在组件即将被挂载到页面之前的时刻自动执行
    componentWillMount(){
        console.log('1. component Will Mount 正在加载中.....');
    }

    // 2. 在组件即将被挂载到页面之后的时刻自动执行
    componentDidMount(){
        console.log('2. component Did Mount 加载完毕.....');
    }


    // 3. 组件被更新之前，他会自动被执行
    shouldComponentUpdate(){
        console.log('3. should Component Update 组件被更新之前');
        return true; // return 是里面要更新
        // return false // false 组件是不需要更新
    } 

    // 4. 组件被更新之前，它会自动执行，但是他在 shouldComponentUpdate 之后被执行，
        /*如果 shouldComponentUpdate 返回 true 它才执行
        如果 shouldComponentUpdate 返回 false 这个函数就不会被执行了。*/   
    componentWillUpdate(){
        console.log('4. component Will Update 组件被更新之前，它会自动执行')
    }

    // 5. 组件更新完成之后，他会被执行
    componentDidUpdate(){
        console.log('5. component Did Update 组件更新完成后');
    }

    // 6. 一个组件要从父组件接受参数，
       /*
        只有父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行 
        如果这个组件第一次存在于父组件中，不会执行
        如果这个组件之前已经存在于父组件中，才会被执行
       */
    componentWillReceiveProps(){
        console.log('6. component Will Receive Props  一个组件要从父组件接受参数');
    }

    // 7. 当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount(){
        console.log('7. component Will Unmount');
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

    // 数据发重变化的时候调用 render 函数 
    render () {
        console.log('render')

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