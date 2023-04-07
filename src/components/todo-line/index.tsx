import { TodoItem } from "../../api/todo"

interface Props {
  todoItem: TodoItem
}

export const TodoLine = ({ todoItem }: Props) => {
  return (
    <div className="todo-item">
      <input type="checkbox" onChange={() => {}} checked={todoItem.isDone} />
      {todoItem.content}
    </div>
  )
}
