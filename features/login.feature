Feature: Metamask Automation

  Scenario Outline: As a user, I can create metamask account

    Given I am on the metamask home page
    When I enter phrases
    Then I should create an account

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
