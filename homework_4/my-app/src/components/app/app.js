import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddForm from '../add-form';

import './app.css';

class App extends Component {
	maxId = 100;

	createTodo(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		};
	}

	state = {
		todoData: 	[ 
						this.createTodo('Learn HTML'), 
						this.createTodo('Learn CSS') ,
						this.createTodo('Learn JavaScript'), 
						this.createTodo('Learn React'),
						this.createTodo('Learn Redux')
					],
		todoStatus:	[	
						this.createTodo('Learn HTML'), 
						this.createTodo('Learn CSS') ,
						this.createTodo('Learn JavaScript'), 
						this.createTodo('Learn React'),
						this.createTodo('Learn Redux')
					]
	};

	searchPanel = (label) => {
		this.setState((prevState) => {
			const nextState = prevState.todoData.filter((item) => item.label.toLowerCase().includes(label.toLowerCase()))
			if(label === '') {
				return {
					todoStatus: prevState.todoData
				}
			} else {
				return {
					todoStatus: nextState
				}
			}
		});
	}

	toggleStatus = (value) => {
		if(value === 'all') {
			this.setState((prevState) => {
				return {
					todoStatus: prevState.todoData
				}
			});
		}

		if(value === 'active') {
			this.setState((prevState) => {
				const nextState = prevState.todoData.filter((item) => item.done === false);
				return {
					todoStatus: nextState
				}
			});
		}

		if(value === 'done') {
			this.setState((prevState) => {
				const nextState = prevState.todoData.filter((item) => item.done === true);
				return {
					todoStatus: nextState
				}
			});
		}
	}

	deleteItem = (id) => {
		this.setState((prevState) => {
			return {
				todoData: prevState.todoData.filter((item) => item.id !== id),
				todoStatus: prevState.todoData.filter((item) => item.id !== id)
			};
		});
	};

	toggleImportant = (id) => {
		this.setState((prevState) => {
			const nextState = prevState.todoData.map((item) => {
				if (item.id === id) {
					item.important = !item.important;
				}
				return item;
			});
			return {
				todoData: nextState,
				todoStatus: nextState
			};
		});
	};

	toggleDone = (id) => {
		this.setState((prevState) => {
			const nextState = prevState.todoData.map((item) => {
				if (item.id === id) {
					item.done = !item.done;
				}
				return item;
			});
			return {
				todoData: nextState,
				todoStatus: nextState
			};
		});
	};

	addTodo = (label) => {
		this.setState((prevState) => {
			return {
				todoData: prevState.todoData.concat(this.createTodo(label)),
				todoStatus: prevState.todoData.concat(this.createTodo(label))
			};
		});
	};

	render() {
		const todoData = this.state.todoStatus;
		const todo = todoData.filter((item) => !item.done).length;
		const done = todoData.length - todo;
		return (
			<div className='todo-app'>
				<AppHeader toDo={todo} done={done} />
				<div className='top-panel d-flex'>
					<SearchPanel onSearchPanel={this.searchPanel} />
					<ItemStatusFilter onToggleStatus={this.toggleStatus} />
				</div>

				<TodoList todos={todoData} onDelete={this.deleteItem} onToggleImportant={this.toggleImportant} onToggleDone={this.toggleDone} />
				<AddForm onAdded={this.addTodo} />
			</div>
		);
	}
}

export default App;
