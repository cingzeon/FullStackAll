import React, { PureComponent, Fragment } from 'react';

class TodoItem extends PureComponent {
    constructor(props){
        super(props);
    }
    handleItemDelte = (index) => {
        const { handleItemDelte } = this.props;
        handleItemDelte(index);
    }

    render(){
        const { content, index} = this.props;
        return (
            <li 
                onClick={() => this.handleItemDelte(index)}
                dangerouslySetInnerHTML={{__html: content}}
            />
        )     
    }
}

export default TodoItem;