### 4-4React中的虚拟DOM
```jsx
    什么是虚拟DOM?

        1. state 数据
            constructor(props){
                super(props);
                this.state = {
                    inputValue: '',
                    list: [],
                }
            }

        2. 模板
            render () {
                return (
                    <Fragment>
                        <div>
                            <label htmlFor={'insertArea'}>输入内容：</label>
                            <input
                                id='insertArea'
                                className='input'
                                defaultValue={this.state.inputValue}
                                onChange={this.handleInputChange}
                            />
                            <button onClick={this.handleBtnClick}>提交</button>
                        </div>
                    <Test content={this.state.inputValue} />
                        <ul>
                            {this.getTodoItem()}           
                        </ul>
                    </Fragment>        
                )
            }

        3. 数据 + 模板 结合，生成真实的DOM，来显示

        4. state 发生改变

        5. 数据 + 模版 结合，生成真实的DOM，替换原始的DOM

    缺陷：
        第一次生成了一个完整的DOM片段
        第二次生成了一个完整的DOM片段
        第三次的DOM替换第一次的DOM，非常耗性能

        1. state 数据
        2. JSX 模版
        3. 数据 + 模板 结合， 生成真实的DOM，来显示
        4. state 发生改变
        5. 数据 + 模板 结合，生成真实DOM，并不直接替换原始的DOM
        6. 新的 DOM(DocumentFragment) 和原始的 DOM 做比对，找差异
        7.找出 input 框发生了变化 
        8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素 

    缺陷：
        性能的提升并不明显
        1. state 数据
        2. JSX 模板
        3. 数据 + 模板 结合，生成真实的DOM，来显示
            <div id='abc'>
                <span>hello world</span>
            </div>
        4. 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实DOM) (损耗了性能)
            ['div', {id: 'abc'}, ['span', {}, 'hello world']]
        5. state 发生变化
        6. 数据 + 模板 生成新的虚拟DOM (极大的提升了性能)
            ['div', {id: 'abc'}, ['span', {}, 'bye bye']]
        7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容  (极大的提升了性能)
        8. 直接操作DOM，改变span中的内容


```