$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/demoblaze.feature");
formatter.feature({
  "name": "Buying new items",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding and buying new items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to the demoblaze.com page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_navigates_to_the_demoblaze_com_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to \"Laptops\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_navigates_to_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user select the \"Sony vaio i5\" laptop",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_select_the_laptop(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user adds to cart the selected item",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_adds_to_cart_the_selected_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user go back to \"Home\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_go_back_to_mainPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to \"Laptops\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_navigates_to_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user select the \"Dell i7 8gb\" laptop",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_select_the_laptop(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user adds to cart the selected item",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_adds_to_cart_the_selected_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user go back to \"Cart\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_go_back_to_mainPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user delete the \"Dell i7 8gb\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_delete_the(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to Place Order",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.theUserNavigatesToPlaceOrder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user types own \"Ali\" to the \"Name\" field in the Place Order form",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_types_own_to_the_field_in_the_Place_Order_form(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user types own \"Turkey\" to the \"Country\" field in the Place Order form",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_types_own_to_the_field_in_the_Place_Order_form(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user types own \"Istanbul\" to the \"City\" field in the Place Order form",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_types_own_to_the_field_in_the_Place_Order_form(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user types own \"2422123212321234\" to the \"Credit card\" field in the Place Order form",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_types_own_to_the_field_in_the_Place_Order_form(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user types own \"June\" to the \"Month\" field in the Place Order form",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_types_own_to_the_field_in_the_Place_Order_form(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user types own \"2000\" to the \"Year\" field in the Place Order form",
  "keyword": "When "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_types_own_to_the_field_in_the_Place_Order_form(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the \"Purchase\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user confirms price \"790 USD\" from confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.theUserConfirmsPriceFromConfirmationMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks OK button and finish the process",
  "keyword": "And "
});
formatter.match({
  "location": "com.demoblaze.step_definitions.ShoppingStepDef.theUserClicksOKButtonAndFinishTheProcess()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});