### 5-5Action和Reducer的编写
```jsx
    1. 安装 Redux DevTools
        网址：`https://chrome.google.com/webstore/search/redux%20devtools?hl=zh-CN`
        
    2. 使用 `https://github.com/zalmoxisus/redux-devtools-extension#usage`
    
        使用 Redux DevToosl 工具
            import { createStore } from 'redux';
            import reducer from './reducer'; // 理解成一个笔记本，再传递给 store

            // 调用 createStore 的方法
            /**
             * Store 是管理员，现在要把一个 redurces 的一个小本，传过来给 store;
             */
            const store = createStore( 
                reducer,
                // 这里说明：如果 window.__REDUX_DEVTOOLS_EXTENSION__ 下面安装了 Redux DevToosl, 那么我们就在这个页面就使用 window.__REDUX_DEVTOOLS_EXTENSION__() 这个工具
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 使用  Redux DevTools 工具， 
            );
            export default store;
```