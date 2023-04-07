import { setupServer } from "msw/node"
import { handlers } from "./src/mock"

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
