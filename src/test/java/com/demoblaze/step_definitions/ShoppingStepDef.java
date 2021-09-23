package com.demoblaze.step_definitions;

import com.demoblaze.pages.BasePage;
import com.demoblaze.pages.DashBoardPage;
import com.demoblaze.pages.Shopping;
import com.demoblaze.utilities.BrowserUtils;
import com.demoblaze.utilities.ConfigurationReader;
import com.demoblaze.utilities.Driver;
import io.cucumber.java.en.*;
import org.openqa.selenium.Alert;


public class ShoppingStepDef  {

//navigate to the demoblaze.com
    @Given("The user navigates to the demoblaze.com page")
    public void the_user_navigates_to_the_demoblaze_com_page() {
    Driver.get().get(ConfigurationReader.get("url"));
    }
//navigate to categories
    @When("The user navigates to {string} menu")
    public void the_user_navigates_to_menu(String category) {
        new Shopping().navigateCategories(category);
    }
// navigate to laptops
    @When("The user select the {string} laptop")
    public void the_user_select_the_laptop(String laptop) {
    new Shopping().navigateLaptops(laptop);
}
// add to cart the selected items
    @When("The user adds to cart the selected item")
    public void the_user_adds_to_cart_the_selected_item(){
    new Shopping().addToCart();
    BrowserUtils.waitFor(1);
    Alert alert = Driver.get().switchTo().alert();
    alert.accept();
    BrowserUtils.waitFor(1);
    Driver.get().navigate().back();
}
//navigate to any page
    @When("The user go back to {string}")
    public void the_user_go_back_to_mainPage(String tabs) {
    new Shopping().navigateTabs(tabs);
    }
// delete the items
    @When("The user delete the {string}")
    public void the_user_delete_the(String item){
      new Shopping().deleteItem(item);
        BrowserUtils.waitFor(1);
    }
//Click the Place Order
    @And("The user navigates to Place Order")
    public void theUserNavigatesToPlaceOrder() {
    new Shopping().placeOrder();
    }
//user Fill outs the Place order information
    @When("The user clicks the {string} button")
    public void the_user_clicks_the_button(String purchaseOrClose) {
    new Shopping().purchaseOrClose(purchaseOrClose);
    }
    @When("The user types own {string} to the {string} field in the Place Order form")
    public void the_user_types_own_to_the_field_in_the_Place_Order_form(String information1, String information2) {
    new Shopping().fillOutPlaceOrder(information1, information2);
    }
//Verify the price and purchaseId
   @Then("The user confirms price {string} from confirmation message")
    public void theUserConfirmsPriceFromConfirmationMessage(String price) {
    new Shopping().confirmPurchase(price);
    }
///Click the ok button and finish the purchasing
    @And("The user clicks OK button and finish the process")
    public void theUserClicksOKButtonAndFinishTheProcess() {
        new Shopping().OKbuttonEnd.click();
    }
}
