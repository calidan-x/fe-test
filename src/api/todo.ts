import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:5173/api"

export interface TodoItem {
  id: number
  content: string
  isDone: boolean
}

export const todoApi = {
  getList() {
    return axios.get("/todos")
  }
}
