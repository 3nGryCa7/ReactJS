import React from "react";

import TodoItem from "./TodoItem";

function TodoList(props) {
    return (
        <div className="todos">
            {
                props.todos.map(function (todo, index) {
                    return (
                        <TodoItem key={index} item={todo}
                            checkItem={() => props.checkItem(index)}
                            deleteItem={() => props.deleteItem(index)}
                            changeItemMode={() => props.changeItemMode(index)}
                            editItem={todo => props.editItem(index, todo)}
                        />
                    );
                })
            }
        </div>
    );
}

export default TodoList;