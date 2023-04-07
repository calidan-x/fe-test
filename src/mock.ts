// 使用 mockjs 进行数据mock
// import Mock from "mockjs"

// Mock.mock(/todos/, "get", (req) => {
//   console.log(req)
//   return [
//     { id: 1, content: "学习React", isDone: false },
//     { id: 2, content: "学习Vue", isDone: true }
//   ]
// })

// 使用msw
import { rest, setupWorker } from "msw"

export const handlers = [
  rest.get("*/api/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, content: "学习React", isDone: false },
        { id: 2, content: "学习Vue", isDone: true }
      ])
    )
  })
]

if (process.env.NODE_ENV === "development") {
  const worker = setupWorker(...handlers)
  worker.start()
}
