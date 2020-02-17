import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './todo-list-item.css';

class TodoListItem extends Component {
	render() {
		const { label, onDelete, done, important, onToggleDone, onToggleImportant } = this.props;

		const style = {
			color: important ? 'steelblue' : 'black',
			fontWeight: important ? 'bold' : 'normal'
		};

		let classNames = 'todo-list-item';

		if (done) {
			classNames += ' done';
		}

		return (
			<span className={classNames}>
				<span className='todo-list-item-label' style={style} onClick={onToggleDone}>
					{label}
				</span>

				<button type='button' className='btn btn-outline-success btn-sm float-right' onClick={onToggleImportant}>
					<FontAwesomeIcon icon={faExclamation} />
				</button>
				<button type='button' className='btn btn-outline-danger btn-sm float-right' onClick={onDelete}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</span>
		);
	}
}

export default TodoListItem;
