import React from 'react'
import TodoFooter from '../TodoFooter/TodoFooter'
import "./TodoList.css"

function TodoList({
    todos, setTodos
}) {

    const updateTask = (id) => {
        let updatedTasks = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
                return todo
            } else {
                return todo
            }
        });
        setTodos(updatedTasks)
    }

    const calcNumberOfIncompletedTasks = () => {
        let count = 0;
        todos.forEach(todo => {
            if(!todo.completed) count++
        })
        return count
    }

    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div data-testid="todo-list-body">
                    {
                        todos.map((todo, index) => (
                            <div 
                                key={index}
                                className={`todo-item ${todo.completed && "todo-item-active"}`} 
                                onClick={() => updateTask(todo.id)}
                                data-testid="task-container"
                            >
                                {todo.task}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <TodoFooter 
                    numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
                />
            </div>
        </div>
    )
}

export default TodoList
