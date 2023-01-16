const pup = require('puppeteer');

const link = "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";

async function Buscar() {
    const browser = await pup.launch();
    const page = await browser.newPage();

    console.log("Start")


    await page.goto(link);
    console.log("Enter Url")

    //Wait for the page upload
    new Promise(r => setTimeout(r, 2000));

    const links = await page.evaluate(() => {
        let laptops = document.querySelectorAll(".title");

        //Save all lenovo's laptop links
        const links = [];
        laptops.forEach((item) => {
            if (item.title.includes("Lenovo")) {
                links.push(item.href);
            }
        });
        return links;
    });


    //Order data
    let laptops = [];
    for (let j = 0; j < links.length; j++) {
        await page.goto(links[j]);

        const laptop = await page.evaluate(() => {
            const buttons = document.querySelectorAll(".swatches button");

            //Select and save laptop prices by HDD size
            const PricesPerHDD = {};
            buttons.forEach((btn) => {
                btn.click();
                PricesPerHDD[btn.value] = document.querySelector(".price").innerText;
            });

            //select and display additional laptop data

            return {
                Model: document.querySelector(".caption").children[1].innerText,
                Description: document.querySelector(".description").innerText,
                PricesPerHDD,
                reviews: parseInt(document.querySelector(".ratings p").innerText),
                stars: document.querySelectorAll(".ratings span").length,
            };
        });

        laptops.push(laptop);
    }

    await browser.close();
    console.log("Done writing");

    return laptops;
}

module.exports = Buscar();