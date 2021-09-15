Feature: Did I add to cart?
  Adding products to cart and checking

  Scenario: I went to the product page on the e-commerce site
    Given while on the product page
    When i add a Product to the cart
    Then the product must be in the cart