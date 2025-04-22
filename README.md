# Automated Testing Project with Playwright

This project uses **Playwright** for end-to-end testing of a web application. Tests are modular and organized into **fixtures**, **helpers**, and **navigation functions** to keep the code clean, reusable, and scalable.

## Project Structure

```
├── fixtures/
│   ├── users.js           # Test user data
│   └── data.js            # Sample data for tests
├── helpers/
│   ├── login.js           # Reusable login function
│   ├── navigation.js      # Helper functions for in-app navigation
│   └── utils.js           # General utility functions
├── tests/
│   └── example.test.js    # Example test file
├── playwright-report/     # Automatically generated test reports
└── test-results/          # Raw results of test execution
```

## Requirements

- **Node.js** installed
- Install dependencies via:

```bash
npm install
```

## Fixtures

### `fixtures/users.js`

Defines a `testUsers` object with mock user credentials for login.

```javascript
export const testUsers = {
  student: { username: 'student01', password: 'pass123' },
  admin: { username: 'admin01', password: 'admin123' }
};
```

#### Usage:

```javascript
import { testUsers } from '../fixtures/users';

await login(page, testUsers.student.username, testUsers.student.password);
```

### `fixtures/data.js`

Contains sample data to simulate application scenarios.

```javascript
export const sampleQuestions = [
  { question: 'What is 2 + 2?', correctAnswer: '4' },
  { question: 'Capital of France?', correctAnswer: 'Paris' }
];
```

## Helpers

### `helpers/login.js`

Reusable login function:

```javascript
export async function login(page, username, password) {
  await page.goto('https://u-app.com/login');
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('button[type="submit"]');
}
```

#### Usage:

```javascript
import { login } from '../helpers/login';

test('Login and navigate', async ({ page }) => {
  await login(page, 'usuario1', '1234');
  // Continue with your test...
});
```

### `helpers/navigation.js`

Reusable navigation utility to jump to specific sections:

```javascript
export async function goToUnit(page, unitName) {
  await page.click(`text=${unitName}`);
}
```

### `helpers/utils.js`

Utility functions for waiting, formatting, etc.

```javascript
export function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
```

#### Usage:

```javascript
import { delay } from '../helpers/utils';

await delay(2000);
```

## Example Test

```javascript
import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';
import { testUsers } from '../fixtures/users';
import { goToUnit } from '../helpers/navigation';

test('Login and navigate to a specific unit', async ({ page }) => {
  await login(page, testUsers.student.username, testUsers.student.password);
  await expect(page).toHaveURL('https://u-app.com/dashboard');

  await goToUnit(page, 'Unit 1');
  await expect(page).toHaveURL('https://u-app.com/unit/1');
});
```

## Reports

After running your tests, Playwright will generate reports in the following directories:

- **`playwright-report/`**: HTML test reports
- **`test-results/`**: Raw test data including screenshots

You can view the report with:

```bash
npx playwright show-report
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.test.js
```

Run tests only in **Chromium**:

```bash
npx playwright test --project=chromium
```

## Best Practices

- Keep helpers and fixtures organized for reusability.
- Use meaningful test names and clear assertions.
- Group similar tests and use setup/teardown if needed.
- Commit your test suite with clear commit messages, such as:

```bash
git commit -m "Add initial Playwright tests"
```
