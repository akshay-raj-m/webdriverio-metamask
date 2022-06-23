const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the metamask home page$/, async () => {
    const var2 =  await browser.getWindowHandles();
    console.log(var2);
    await browser.switchToWindow(var2[0]);
    await browser.maximizeWindow();
});

When(/^I enter phrases$/, async () => {
        const var1  = await $("//button[@role='button']");
        await var1.click();
        const var3 = await $("//button[@role='button']");
        await var3.click();
        const var4 = $("//button[@role='button'][2]");
        await var4.click();
        const arr1 = ["waste","forget","doctor","hill","boil","autumn","spatial","inspire","like","company","favorite","report"];
        console.log(arr1[0]);
        for(let i=1;i<=12;i++){
            let var5 = "//div[@class='import-srp__srp']/div["+i+"]/div/div/input";
            let var6 = $(var5);
            await var6.setValue(arr1[i-1]);
        }
        const var7 = await $("//input[@id='password']");
        await var7.setValue("akshay123");
        const var8 = await $("//input[@id='confirm-password']");
        await var8.setValue("akshay123");
        const var9 = await $("//input[@class='check-box far fa-square']");
        await var9.click();
        const var10 = await $("//button[@type='submit']");
        await var10.click();
        const var11 = await $("//button[@role='button']");
        await var11.click();
        const var12 = await $("//button[@title='Close']");
        await var12.click();
        const accBtn = await $("//div[@class='identicon__address-wrapper']");
        
        
        for(let i=0; i<1; i++){
            await accBtn.click();
            const var18 = await $("//div[@class='account-menu']/div[6]");
            await var18.click();
            const var19 = await $("//div[@class='new-account-create-form__buttons']/button[2]");
            await var19.click();
        }

        await accBtn.click();
        const acc1 = await $("//div[@class='account-menu__account-info']");
        await acc1.click();

        const netSwi = await $("//div[@class='app-header__account-menu-container']/div/div");
        await netSwi.click();
        const show_hide = await $("//a[@href='#']");
        await show_hide.click();
        const testConvBtn = await $("//div[@class='settings-page__content-row'][7]/div[2]/div/label/div/div[2]/div");
        await testConvBtn.click();
        const settClose = await $("//div[@class='settings-page__header']/div/div[2]");
        await settClose.click();
        await netSwi.click();
        const rinkBtn = await $("//div[@class='network-dropdown-list']/li[4]/span");
        await rinkBtn.click();

        const var2 =  await browser.getWindowHandles();
        await browser.switchToWindow(var2[1]);


        await browser.url("https://faucets.chain.link/");
        const connectBtn = await $("/html/body/div[1]/header/div/div/button[1]");
        await connectBtn.click();
        const metama = await $("//div[@class='ConnectWalletModal_buttons__ldt8Z']/button");
        await metama.click();
        await browser.switchToWindow(var2[0]);
        await browser.refresh();
        const nextBtn = await $("//button[@class='button btn--rounded btn-primary']");
        await nextBtn.click();
        const connBtn = await $("//div[@class='page-container__footer']/footer/button[2]");
        await connBtn.click();
        await accBtn.click();
        const accHge = await $("//div[@class='account-menu__accounts']/div[2]");
        await accHge.click();
        

        // const reqTyp = await $("//iframe[@height='78']");
        // await reqTyp.waitForDisplayed();
        // await browser.pause(2000);
        // await reqTyp.moveTo();
        // await browser.pause(2000);
        // await reqTyp.click({x:3,y:100});

        //await browser.leftClick(reqTyp, 100, 100);
        ////div[contains(@class,'recaptcha-checkbox-border')][not(contains(@class,'Animation'))]
        // async function clickCheckbox(){


        // var frame1 = await $("//iframe[@height='78']");
        // await browser.switchToFrame(frame1);
        // await browser.setTimeout({ 'implicit': 10000 });
        // const frCom = await $("//style[@type='text/css']");
        // await frCom.click();
        // await browser.switchToParentFrame()

        await browser.switchToWindow(var2[1]);
        await browser.refresh();
        await browser.pause(10000);
        const SendReq = await $("//button[contains(@class,'button_primary')]");
        await SendReq.click();
        const closeBtn = await $("//button[contains(@class,'Box-sc-1vpmd2a-0 Button-sc-1sg3lik-0 kgcTca')]");
        await closeBtn.click();
        


        await browser.switchToWindow(var2[0]);




        
        // var X = await iframe.getLocation();
        // console.log(X);
        // console.log("X="+X.x);
        // console.log("y="+X.y);
        // await iframe.moveTo({x:20, y:30});



        // await iframe.moveTo(x[0],y[1]);
        await browser.pause(5000);
           // await browser.switchToFrame(iframe);
        //wait iframe.click(X)
        
        //await browser.switchToFrame(iframe);
        //await clickCheckbox();

        // const sndReq = await $("//button[@type='submit']");
        // await sndReq.click();
        // const boxClose = await $("//button[@class='Box-sc-1vpmd2a-0 Button-sc-1sg3lik-0 kgcTca']");
        // await boxClose.click();
          


        
        







        await browser.debug();
});

Then(/^I should create an account$/, async () => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});

