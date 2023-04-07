import React from "react"
import { act, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { TodoPage } from "../src/pages/todo-page"

test("测试 Todo 页面", async () => {
  render(<TodoPage />)
  await screen.findAllByText("我的Todo列表")
  await screen.findByText("学习React")
  const button = await screen.findByText("我知道了")
  await act(async () => {
    await button.click()
  })
  await screen.findByText("已阅")
})
