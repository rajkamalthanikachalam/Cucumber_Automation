Feature: Feature of Free CRM Login Page

#With Example
Scenario Outline: scenario is to automate the Free CRM Login Page

Given Check user able to access FreeCRM Site
When Check title page
Then Enter login credentials "<User_Name>" as UserName and "<Password>" as Password 
Then Check user landed in home page
Then Navigate to Add Contacts Page
Then Add contacts details listed "<Title>" and "<First_Name>" and "<Last_Name>" and "<Receive_Email>" 
Then close the browser

Examples:

	|	User_Name	|	Password	|	Title	|	First_Name	|	Last_Name	|	Receive_Email	|
	|	008rajkamal	|	Feb$2018@	|	Mr.		|	Popeye		|	The Sailor	|	No				|
	|	008rajkamal	|	Feb$2018@	|	Ms.		|	Olive		|	Ovyl		|	Yes				|
	|	008rajkamal	|	Feb$2018@	|	Mr.		|	Wimpy		|	Burger		|	No				|
