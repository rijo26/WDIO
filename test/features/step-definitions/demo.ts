import { Given, When, Then } from "@wdio/cucumber-framework";

//Strings
let url = "https://www.amazon.in"
let searchItem = "Laptop"
let win = browser.getWindowHandles()


//Web Elements
const search_text = $(`[id=twotabsearchtextbox]`)
const search_icon = $(`[id=nav-search-submit-text]`)
const three_stars = $(`section[aria-label='3 Stars & Up'] i`)
const chkBox_Dell = $(`li[id*=Dell] i`)
const chkBox_Samsung = $(`li[id*=Samsung] i`)
const see_more_link = $(`div#brandsRefinements > ul > li > span > div > a > span`)
const sort_by_dpdown = $(`span[id*=a-autoid] > span > span[class*=a-button-text]`)
const price_high_to_low = $(`a#s-result-sort-select_2`)
const first_result = $(`div[data-component-type=s-search-result] h2 a span`)
const product_details = $(`span[id=productTitle]`)
const tech_details = $(`table#productDetails_techSpec_section_1`)
const btn_buy_now = $(`[id=buy-now-button]`)

Given(/^Amazon page is opened$/, async function() {
    await browser.maximizeWindow()
    await browser.pause(2000)
    await browser.url(url)
    await browser.pause(2000)
    await browser.saveScreenshot('./Results/screenshots/HomePage.png')
})

When(/^Search with filter the laptop$/, async function(){
    await search_text.click()
    await search_text.setValue(searchItem)
    await browser.pause(2000)
    await search_icon.click()
    await browser.pause(2000)
    await browser.saveScreenshot('./Results/screenshots/LaptopSearch.png')
})

Then(/^Fetch the details of Expensive Laptop$/, async function(){
    await three_stars.click()
    await browser.pause(2000)
    await browser.scroll(0,250)
    await chkBox_Dell.click()
    await browser.pause(2000)
    await see_more_link.click()
    await browser.scroll(0,250)
    await browser.pause(2000)
    await chkBox_Samsung.click()
    await browser.pause(2000)
    await browser.saveScreenshot('./Results/screenshots/LaptopSearchResult.png')
    await sort_by_dpdown.click()
    await browser.pause(2000)
    await price_high_to_low.click()
    await browser.pause(2000)
    await browser.saveScreenshot('./Results/screenshots/LaptopSearchResultAfterSort.png')
    await browser.pause(2000)
    let title = await first_result.getText()
    await first_result.click()
    await browser.pause(8000)
    let new_url = await browser.getUrl()
    await browser.pause(2000)
    await browser.switchWindow(new_url)
    await browser.switchWindow(title)
    await browser.scroll(0,500)
    await browser.scroll(0,500)
    await browser.saveScreenshot('./Results/screenshots/HighestLaptopDetails.png')
    let c = await tech_details.getText()
    console.log(c);
})


