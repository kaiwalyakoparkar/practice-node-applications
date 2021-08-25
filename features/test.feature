Feature: API is running

  Scenario: Check Home endpoint
    Given I make a GET request to "http://localhost:3000/api/v1/blogs"
    When I receive a response
    Then response should have a status 200

  Scenario: Check Invali endpoint
    Given I make a GET request to "http://localhost:3000/"
    When I receive a response
    Then response should have a status 404