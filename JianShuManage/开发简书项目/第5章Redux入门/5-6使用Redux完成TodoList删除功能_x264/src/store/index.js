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