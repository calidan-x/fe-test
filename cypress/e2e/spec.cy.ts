describe("template spec", () => {
  it("测试Todo页面", () => {
    cy.visit("http://127.0.0.1:5173/")
    cy.get("h2").contains("我的Todo列表")

    cy.get("button").click()
    cy.get("h3").contains("已阅")

    cy.get(".todo-item").contains("学习React")
  })
})
