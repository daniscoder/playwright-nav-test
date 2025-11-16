import { test, expect } from '@playwright/test';

test('should navigate to Home page and verify h1', async ({ page }) => {
    await page.goto('/');

    const h1 = await page.locator('h1');
    await expect(h1).toHaveText('Home');
    await expect(page).toHaveURL(/\/index\.html$/);
});

test('should navigate to About page via link and verify h1', async ({ page }) => {
    await page.goto('/');

    const aboutLink = page.locator('nav a', { hasText: 'About' });
    await aboutLink.click();

    await page.waitForLoadState('domcontentloaded');

    const h1 = await page.locator('h1');
    await expect(h1).toHaveText('About');
    await expect(page).toHaveURL(/\/about\.html$/);
});

test('should navigate to Contact page via link and verify h1', async ({ page }) => {
    await page.goto('/');

    const contactLink = page.locator('nav a', { hasText: 'Contact' });
    await contactLink.click();

    await page.waitForLoadState('domcontentloaded');

    const h1 = await page.locator('h1');
    await expect(h1).toHaveText('Contact');
    await expect(page).toHaveURL(/\/contact\.html$/);
});
