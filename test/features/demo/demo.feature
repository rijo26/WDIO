Feature: Amazon Search Item
    Feature Description : Search for the costliest laptop of either HP or Dell and Fetch the details of the laptop

    @demo
    Scenario: Run the Amazon Website and Search Item and Fetch details
        Given Amazon page is opened
        When Search with filter the laptop
        Then Fetch the details of Expensive Laptop
