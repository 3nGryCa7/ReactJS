function TodoItem(props) {

    function submitHandler(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value.trim();

        props.editItem(title || props.item.title);
    }
    
    return props.item.isEditing ? (
        <form className="todo-item" onSubmit={submitHandler}>
            <input type="text" className="todo-edit" defaultValue={props.item.title} name="title" />
            <button type="button" 
                className="button button-warning"
                onClick={props.changeItemMode}
            >
                取消
            </button>
            <button type="submit" 
                className="button button-success"
            >
                完成
            </button>
        </form>
    ) : (
        <div className="todo-item">
            <input type="checkbox"
                checked={props.item.isChecked}
                onChange={props.checkItem}
            />
            <span className="todo-title">{props.item.title}</span>
            <button type="button" 
                className="button button-warning"
                onClick={props.changeItemMode}
            >
                修改
            </button>
            <button type="button" 
                className="button button-danger"
                onClick={props.deleteItem}
            >
                刪除
            </button>
        </div>
    )
}

export default TodoItem;