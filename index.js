require('dotenv').config();
const puppeteer = require('puppeteer');

(async() => {

    //Gera uma nova instancia do browser
    const browser = await puppeteer.launch({
        headless: false,
    });
    //Abre uma nova aba
    const page = await browser.newPage();

    //Acessa à página especificada
    await page.goto('https://unsplash.com');

    //Seleciono o elemento para dar um click
    await page.click('[href="/login"')

    //Pedimos para inserir no campo os dados presentes em .env
    await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL)

    await page.type('#user_password', process.env.UNSPLASH_SENHA)

    await page.click('[type="submit"]')

    //await page.screenshot({ path: "print.png" });

    //Fecha o browser
    //await browser.close();
})();