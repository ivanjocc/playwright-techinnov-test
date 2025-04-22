fixtures

users.js
export const testUsers = {
	student: { username: 'student01', password: 'pass123' },
	admin: { username: 'admin01', password: 'admin123' }
};

How to use the testUsers object in your test file:

import { testUsers } from '../fixtures/user-fixtures';
await login(page, testUsers.student.username, testUsers.student.password);

data.js
export const sampleQuestions = [
	{ question: 'What is 2 + 2?', correctAnswer: '4' },
	{ question: 'Capital of France?', correctAnswer: 'Paris' }
];


helpers

login.js
Reusable functions

export async function login(page, username, password) {
	await page.goto('https:u-app.com/login');
	await page.fill('#username', username);
	await page.fill('#password', password);
	await page.click('button[type="submit"]');
}


How to use the login function in your test file:

import { login } from '../helpers/login';

test('Login and navigate', async ({ page }) => {
  await login(page, 'usuario1', '1234');
  // continue with the test..
});


navigation.js
Features that help you quickly jump to specific sections of your app without repeating code.

export async function goToUnit(page, unitName) {
	await page.click(`text=${unitName}`);
}

utils.js
Small utilities, such as waiting for items, checking status, formatting dates, etc.

export function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}