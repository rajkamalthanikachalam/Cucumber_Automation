Feature: Feature of Free CRM Login Page 

@Mandatory
Scenario: Login  

	Given Login to the page

@Mandatory	
Scenario: ValidCredentials  

	Given ValidCredentials

@Mandatory	@Optional
Scenario: Access Home Page  

	Given Access Home Page

@Mandatory	@Optional	
Scenario: Navigate to Contact Details  

	Given Navigate to Contact Details

@Optional	
Scenario: Add Contacts  

	Given Add Contacts

@Mandatory	
Scenario: Check the Contacts  

	Given Check the Contacts
@Optional	
Scenario: Navigate to userinformation page  

	Given Navigate to userinformation page

@Optional	
Scenario: check Added Contacts are able to view  

	Given check Added Contacts are able to view

@Mandatory	
Scenario: Logout  

	Given Logout

@Mandatory	
Scenario: close  

	Given close
	

	