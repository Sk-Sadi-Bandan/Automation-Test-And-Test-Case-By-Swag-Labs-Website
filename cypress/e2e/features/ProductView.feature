Feature: Open SwagLab End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | standard_user|  | secret_sauce |
     Then Click The Login Button with Valid Username & Password
    
 Scenario: Verify that the product-1 view
     When Click on product-1 view
     Then Click the product-1 addtocart
     Then Click the product-1 cartlist
     Then Click the product-1 checkout
     Then Enter the user shopping with fname lname zipcode
         | First Name |  | Last Name |  |  Zip/Postal Code |
         | Sk Sadi |  | Bandan |  | 3402 |
     Then Click the user shopping continue
     Then Click the user shopping finish
     Then Click the user shopping home

 Scenario: Verify that the shopping view
     When Click on shopping view
     Then Click the shopping checkout
     Then Enter the user shopping with firstname lastname zipcode
         | First Name |  | Last Name |  |  Zip/Postal Code |
         | Sk Sadi |  | Bandan |  | 3402 |
     Then Click the shopping continue
     Then Click the shopping finish
     Then Click the shopping home

 Scenario: Cart All Product
     When Click the lightadd addtocart
     Then Click the blacktshirtadd addtocart
     Then Click the jacketadd addtocart
     Then Click the onesieadd addtocart
     Then Click the redtshirtadd addtocart
     Then Click the all shopping cartlist
     Then Click the all shopping checkout
     Then Enter the customer shopping with fname lname zipcode
         | First Name |  | Last Name |  |  Zip/Postal Code |
         | Sk Sadi |  | Bandan |  | 3402 |
     Then Click the customer shopping continue
     Then Click the customer shopping finish
     Then Click the customer shopping home

 Scenario: Cart Edit Product
     When Click the lightadded addtocart
     Then Click the blacktshirtadded addtocart
     Then Click the jacketadded addtocart
     Then Click the onesieadded addtocart
     Then Click the selected shopping cartlist
     Then Click the light rmvtocart
     Then Click the onesie rmvtocart
     Then Click the edited shopping checkout
     Then Enter the customer information
         | First Name |  | Last Name |  |  Zip/Postal Code |
         | Sk Sadi |  | Bandan |  | 3402 |
     Then Click the customer continue
     Then Click the cancle order

 Scenario: Cart reselect Product
     When Click the addlight addtocart
     Then Click the addblacktshirt addtocart
     Then Click the reselect shopping cartlist
     Then Click the continue shopping
     Then Click the addjacket addtocart
     Then Click the addonesie addtocart
     Then Click the reselected shopping cartlist
     Then Click the present or privious shopping checkout
     Then Enter the customer info
         | First Name |  | Last Name |  |  Zip/Postal Code |
         | Sk Sadi |  | Bandan |  | 3402 |
     Then Click the customer info continue
     Then Click the customer shopping finished
     Then Click the customer go to home