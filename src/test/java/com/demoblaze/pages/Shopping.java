package com.demoblaze.pages;

import com.demoblaze.utilities.BrowserUtils;
import com.demoblaze.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Shopping extends BasePage{

//last process for purchasing
    @FindBy (css = "div.sa-confirm-button-container")
    public WebElement OKbuttonEnd;

//All Methods
    public void navigateCategories(String categoryName){
        String path="//*[contains(text(),'"+categoryName+"')]";
        Driver.get().findElement(By.xpath(path)).click();
    }
    public void navigateLaptops(String laptopName){
        String path="//*[contains(text(),'"+laptopName+"')]";
        Driver.get().findElement(By.xpath(path)).click();
    }
    public void addToCart(){
        Driver.get().findElement(By.xpath("//a[contains(text(),'Add to cart')]")).click();
    }
    public void navigateTabs(String tabName){
        String path="//a[contains(text(),'"+tabName+"')]";
        Driver.get().findElement(By.xpath(path)).click();
    }
    public void deleteItem(String item){
        String path="//td[contains(text(),'"+item+"')]/following-sibling::td[2]/a[contains(text(),'Delete')]";
        Driver.get().findElement(By.xpath(path)).click();
    }
    public void placeOrder(){
       Driver.get().findElement(By.xpath("//*[text()='Place Order']")).click();
    }
    public void fillOutPlaceOrder(String information1,String information2){
        String path="//label[@id='totalm']/../div/label[contains(text(),'"+information2+"')]/following-sibling::input";
        WebElement info =Driver.get().findElement(By.xpath(path));
        info.sendKeys(information1);
    }
    public void purchaseOrClose(String purchaseOrClose){
        Driver.get().findElement(By.xpath("//button[contains(text(),'"+purchaseOrClose+"')]")).click();
    }
    public void confirmPurchase(String price){
        BrowserUtils.waitFor(1);
        WebElement confirmation = Driver.get().findElement(By.cssSelector("p.lead.text-muted"));
        Assert.assertTrue(confirmation.getText().contains(price));
        BrowserUtils.waitFor(2);
    }


}
