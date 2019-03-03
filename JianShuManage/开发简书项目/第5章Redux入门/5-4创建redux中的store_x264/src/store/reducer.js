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