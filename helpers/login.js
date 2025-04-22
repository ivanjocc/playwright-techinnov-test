export async function login(page, email, password) {
	await page.goto('https://wcag-portal.azurewebsites.net/login');
	await page.fill('#form__username', email);
	await page.fill('#form__password', password);
	await page.click('button[type="submit"]');
	await page.waitForURL('**/dashboard');
}
