Feature: Open SwagLab End to End

Background: Open Website With Valid url
     Given Open Browser and Visit Website
     When Enter the user login with valid username & password
         | Username |  | Password |
         | standard_user|  | secret_sauce |
     Then Click The Login Button with Valid Username & Password
    
 Scenario: Verify that the menubar is working
     When Click on menubar option
     Then Click the about button
     #Then Click the signin button
     #Then Enter the user login with username & password from about option
     #    | Username |  | Password |
     #    | standard_user|  | secret_sauce |
     #Then Click The Login Button with Valid Username & Password from about option