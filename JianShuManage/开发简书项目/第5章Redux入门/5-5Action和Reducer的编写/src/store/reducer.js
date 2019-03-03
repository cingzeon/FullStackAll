// 默认数据
const defaultState = {
    inputValue: '123',
    list: [1,2,3]
};

/**
 *  reducer 可以接受 state, 但是绝不能修改 state ，只能通过拷贝一份一出来，再去改变。才可以
 */
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

     /**
      * state 是传过来的数据，
      * action 是传过来的那一句话 change_input_value
      * 
      * 这里已拿到地，传过来的那一句话、和传过来的数据
      */
     // 可以这样去写
     if(action.type === "change_input_value"){
         // 在这里做一个深拷贝
         const newState = JSON.parse(JSON.stringify(state));
         // 然后再改变 newSstate.inputValue 里的数据, newState.inputValue 就是 当前页面的 defautlState.inputValue里的数据 
         newState.inputValue = action.value;
         // 再返回 newState 数据 给了 store, store变化了，但是组件应该更新
         return newState;
     }

     if(action.type === "add_todo_item"){
         // 复制一份 当前的 state 的数据
         const newState = JSON.parse(JSON.stringify(state));
         newState.list.push(newState.inputValue);
         newState.inputValue = '';
         console.log(newState);
         return newState;
     }
    return state;
}