Feature: Feature of Free CRM Login Page 

#Since Login and Logout is mandatory let me add this as pre requisite through Hooks 
# Global Hooks : will run for all scenario mentioned in feature file
#Local Hooks: through the tag mentioned, it will be run for specific scenario , Method will run for specific scenario
#Order : We i have couple of precondition , through order i can give preference method, which need to get executed first

@FirstScenario 
Scenario: Login 

#Given Login to the page
	When ValidCredentials 
	Then Access Home Page 
	Then Navigate to Contact Details 
	And Add Contacts 
	Then Check the Contacts 
	#Then Logout
	
@SecondScenario 
Scenario Outline: Login2 
	When ValidCredentials 
	Then Access Home Page 
	Then Navigate to Contact Details 
	And Add Contacts 
	Then Check the Contacts 
	
	Examples: 
		|	Test1	|	Test3	|
		|	Test3	|	Test4	|
		
@ThirdScenario 
Scenario: Login3 

#Given Login to the page
	When ValidCredentials 
	Then Access Home Page 
	Then Navigate to Contact Details 
	And Add Contacts 
	Then Check the Contacts 
	#Then Logout
			
	