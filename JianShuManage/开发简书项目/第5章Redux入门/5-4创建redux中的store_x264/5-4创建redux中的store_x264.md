#### 5-4创建redux中的store_x264
```jsx
   Store 的创建

   1. 安装 redux
      $ yarn add redux
        

   2. 创建 redux
        1. 创建 store 文件夹
            store
                 index.js
                     import { createStore } from 'redux';
                     import reducer from './reducer'; // 理解成一个笔记本，再传递给 store

                     // 调用 createStore 的方法
                     /**
                      * Store 是管理员，现在要把一个 redurces 的一个小本，传过来给 store;
                      */
                     const store = createStore( reducer );
                     export default store;
                
                  reducer.js
                     // 默认数据
                     const defaultState = {
                        inputValue: '123',
                        list: [1,2,3]
                     };

                     export default (state = defaultState, action) => {
                        // 返回 state
                        /**
                         * state 保函所有的内容, 并代表着整个 Store 笔记本里的数据， 现在是一个空的
                         * 此时，要把 reducer 传递给 store
                         *  reducer 负责存储整个项目应用中的数据，然后我把 reducer 传给 store, 我们创建的那个store它就知道仓库里面的数据，有多少， store 就去查看了。
                         * 
                         * 现在我们的仓库里有两个数据：
                         *  一个是：inputValue
                         *  另一个是：list 
                         *  我们就用 reducer 来管理
                         */
                        return state;
                     }
            
            2. 获取 store 数据
                   src
                     TodoList.js
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






```