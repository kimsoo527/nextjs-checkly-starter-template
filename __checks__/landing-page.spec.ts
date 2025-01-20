import { test, expect } from '@playwright/test'

test('Landing page', async ({ page }) => {
  const targetUrl = process.env.ENVIRONMENT_URL || 'https://otel-test-app.vercel.app'
  const response = await page.goto(targetUrl)
  expect(response?.status()).toBeLessThan(400)
})
