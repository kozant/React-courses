import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    
    const todos = [
        {
            id: 1, 
            title: 'Learn HTML'
        },
        {
            id: 2, 
            title: 'Learn CSS'
        },
        {
            id: 3, 
            title: 'Learn JavaScript'
        },
        {
            id: 4, 
            title: 'Learn React'
        }
    ];

    return (
        <ul className="list-group" id="tasks">
            {
                todos.map(item => <TodoItem title = {item.title}  key = {item.id}/>)
            }
            
        </ul>
    );
};
