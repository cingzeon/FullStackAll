import React, { PureComponent, Fragment } from 'react';

class TodoList extends PureComponent {
    render () {
        return (
            <Fragment>
                <input />
                <button>提交</button>
                <ul>
                    <li>学英语</li>
                    <li>Learning React</li>
                </ul>
            </Fragment>        
        )
    }
}

export default TodoList;