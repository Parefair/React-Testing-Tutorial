// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import './jest.polyfills'
import { server } from './mocks/node'

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Reset any request handlers that we may add during the tests.
// So they don't affect other tests.
beforeEach(() => server.resetHandlers())

// Clean up after the tests are finished
afterAll(() => server.close())
