import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
   
    handleItemDelte = () => {
        const { handleItemDelte, index } = this.props;
        handleItemDelte(index);
    }


    // setState 是异步的函数
    shouldComponentUpdate(nextProps, nextState){
        // 如果 nextProps.content 不等于 this.props.content 就更新，如果两个相等，就不更新
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render(){
        console.log('child render');
        const { content } = this.props;
       
        return (
            <li 
                onClick={() => this.handleItemDelte()}
            >
                {content}
            </li>
        ) 
        
    }
}


// 数据验证
TodoItem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handleItemDelte: PropTypes.func.isRequired,

}


export default TodoItem;