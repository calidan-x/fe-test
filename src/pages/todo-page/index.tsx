import { useEffect, useState } from "react"

import { TodoLine } from "../../components/todo-line"
import { TodoItem, todoApi } from "../../api/todo"

export const TodoPage = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [viewed, setViewed] = useState(false)

  useEffect(() => {
    todoApi.getList().then((res) => {
      setTodos(res.data)
    })
  }, [])

  return (
    <div>
      <h2>我的Todo列表</h2>
      <h3>{viewed && "已阅"}</h3>
      <div>
        {todos.map((todo) => (
          <TodoLine key={todo.id} todoItem={todo} />
        ))}
      </div>
      <button
        // style={{ display: "none" }}
        onClick={() => {
          setViewed(true)
        }}
      >
        我知道了
      </button>
    </div>
  )
}
