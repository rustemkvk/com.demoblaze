Feature: Buying new items
@wip
  Scenario: Adding and purchasing new items
    Given The user navigates to the demoblaze.com page
    When The user navigates to "Laptops" menu
    And The user select the "Sony vaio i5" laptop
    And The user adds to cart the selected item
    And The user go back to "Home"

    When The user navigates to "Laptops" menu
    And The user select the "Dell i7 8gb" laptop
    And The user adds to cart the selected item

    When The user go back to "Cart"
    And The user delete the "Dell i7 8gb"
    And The user navigates to Place Order

    When The user types own "Ali" to the "Name" field in the Place Order form
    When The user types own "Turkey" to the "Country" field in the Place Order form
    When The user types own "Istanbul" to the "City" field in the Place Order form
    When The user types own "2422123212321234" to the "Credit card" field in the Place Order form
    When The user types own "June" to the "Month" field in the Place Order form
    When The user types own "2000" to the "Year" field in the Place Order form
    And The user clicks the "Purchase" button

    Then The user confirms price "790 USD" from confirmation message
    And The user clicks OK button and finish the process



