import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends PureComponent {
   
    handleItemDelte = () => {
        const { handleItemDelte, index } = this.props;
        handleItemDelte(index);
    }

    render(){
        const { content, test} = this.props;
        return (
            <li 
                onClick={() => this.handleItemDelte()}
                // dangerouslySetInnerHTML={{__html: content}}
            >
                {test} - {content}
            </li>
        )     
    }
}


// 数据验证
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    handleItemDelte: PropTypes.func.isRequired,

}

// 默认值
TodoItem.defaultProps = {
    test:'hello world',
}

export default TodoItem;