import { createStore } from 'redux';
import reducer from './reducer'; // 理解成一个笔记本，再传递给 store

// 调用 createStore 的方法
/**
 * Store 是管理员，现在要把一个 redurces 的一个小本，传过来给 store;
 */
const store = createStore( reducer );
export default store;