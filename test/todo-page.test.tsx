import React from "react"
import { act, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { TodoPage } from "../src/pages/todo-page"
// import { todoApi } from "../src/api/todo"

// beforeAll(() => {
//   const mockGetList = jest.fn()
//   mockGetList.mockResolvedValue({
//     data: [
//       { id: 1, content: "学习React", isDone: false },
//       { id: 2, content: "学习Vue", isDone: true }
//     ]
//   })
//   todoApi.getList = mockGetList
// })

test("测试 Todo 页面", async () => {
  await act(async () => {
    render(<TodoPage />)
  })
  await screen.findAllByText("我的Todo列表")
  await screen.findByText("学习React")
  const button = await screen.findByText("我知道了")
  await act(async () => {
    await button.click()
  })
  await screen.findByText("已阅")
})
