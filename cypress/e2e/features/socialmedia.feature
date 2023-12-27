Feature: Open SwagLab End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | standard_user|  | secret_sauce |
     Then Click The Login Button with Valid Username & Password

Scenario: Verify that the social media link is working
     When Click on linkedin option
     Then Click on facebook option
     Then Click on twitter option