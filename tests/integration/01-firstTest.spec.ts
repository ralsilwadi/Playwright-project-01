import {test, expect} from "@playwright/test";



test.describe('First Test Suite', () => {

  test('Refresh, navigate back and forward', async({ page }) => {

    // Navigate to a page
    await page.goto('https://techglobal-training.com/')

    // Refresh the page
    await page.reload()

    // Navigate to another page
    await page.goto('https://techglobal-training.com/frontend')

    // Navigate back
    await page.goBack()

    // Navigate forward
    await page.goForward()
  })

  test('Validate page title', async({ page }) => {

    // Navigate to a page
    await page.goto('https://techglobal-training.com/')

    // const title = await page.title()

    // expect(title).toBe('TechGlobal Training | Home')

    await expect(page).toHaveTitle('TechGlobal Training | Home')
  })

  test('Validate url', async({ page }) => {
    await page.goto('https://techglobal-training.com/');
    await expect(page).toHaveURL('https://www.techglobal-training.com/')
  })


  test('My First Test', async({ page }) => {

    await page.goto('https://techglobal-training.com/');
   
    const myLogo = page.locator('#logo')

    await myLogo.click()

    await expect(myLogo).toBeVisible()

  })


})
