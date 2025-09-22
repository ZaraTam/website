/**
 * Jest setup file for Google Analytics tracking tests
 */

// Mock window.scrollTo for smooth scrolling tests
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true
});

// Mock console.log to avoid noise during tests
const originalConsoleLog = console.log;
console.log = jest.fn();

// Setup global expect matchers
expect.extend({
  toHaveBeenCalledWithGAEvent(received, eventName, eventData) {
    const pass = received.mock.calls.some(call => {
      return call.length >= 2 &&
             call[0] === 'event' &&
             call[1] === eventName &&
             (eventData ? JSON.stringify(call[2]) === JSON.stringify(eventData) : true);
    });

    if (pass) {
      return {
        message: () => `Expected gtag not to have been called with event "${eventName}"`,
        pass: true,
      };
    } else {
      return {
        message: () => `Expected gtag to have been called with event "${eventName}"${eventData ? ` and data ${JSON.stringify(eventData)}` : ''}`,
        pass: false,
      };
    }
  },
});

// Cleanup after each test
afterEach(() => {
  // Clear all mocks
  jest.clearAllMocks();

  // Reset DOM
  document.body.innerHTML = '';

  // Reset location mock
  Object.defineProperty(window, 'location', {
    value: {
      hostname: 'localhost',
      pathname: '/',
      search: ''
    },
    writable: true
  });
});

// Global teardown
afterAll(() => {
  // Restore console.log
  console.log = originalConsoleLog;
});