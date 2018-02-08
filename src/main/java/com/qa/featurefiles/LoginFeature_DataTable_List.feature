Feature: Feature of Free CRM Login Page 

#In DataTable, we can achieve the passing value without Examples and Scenario Outline
#with few changes in Feature and Step Definition file 
# In Feature File, just type data within the pipe symbol under the particular line, which means that data is applicable to that method alone
# In Step Definition, we have to call DataTable(call raw()) , which return List<List<String> and call by index value
# Output is not readable when compare to examples - Scenario Outline
# we have to create a method for data passed under the each line 

Scenario: scenario is to automate the Free CRM Login Page 

	Given Check user able to access FreeCRM Site 
	When Check title page 
	Then Enter login credentials UserName as UserName and Password as Password 
		|	008rajkamal	|	Feb$2018@	|
	Then Check user landed in home page 
	Then Navigate to Add Contacts Page 
	Then Add contacts details listed Title and First_Name and Last_Name and Receive_Email 
		|	Mr.		|	Popeye		|	The Sailor	|	No				|
	Then close the browser 
