import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import matchers, {
  TestingLibraryMatchers,
} from '@testing-library/jest-dom/matchers'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { routes } from './router'

beforeEach(cleanup)
expect.extend(matchers)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
    interface Matchers<R = void, T = {}>
      extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
  }
}

export function renderRoute(location: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })
  render(<RouterProvider router={router} />)
}