Feature: Feature of Free CRM Login Page 

# In DataTable, we can achieve the passing value without Examples and Scenario Outline
# with few changes in Feature and Step Definition file 
# In Feature File, just type data within the pipe symbol under the particular line, which means that data is applicable to that method alone
# In Step Definition, we have to call DataTable(call asmaps()) 
# Output is more readable when compare to examples - Scenario Outline
# with the help of for, we can iterate a particular method based on input provided 



Scenario: scenario is to automate the Free CRM Login Page 

	Given Check user able to access FreeCRM Site 
	When Check title page 
	Then Enter login credentials UserName as UserName and Password as Password 
		|	UserName	|	Password	|
		|	008rajkamal	|	Feb$2018@	|
	Then Check user landed in home page 
	Then Navigate to Add Contacts Page 
	Then Add contacts details listed Title and First_Name and Last_Name and Receive_Email 
		|	User_Name	|	Password	|	Title	|	First_Name	|	Last_Name	|	Receive_Email	|
		|	008rajkamal	|	Feb$2018@	|	Mr.		|	Popeye		|	The Sailor	|	No				|
		|	008rajkamal	|	Feb$2018@	|	Ms.		|	Olive		|	Ovyl		|	Yes				|
		|	008rajkamal	|	Feb$2018@	|	Mr.		|	Wimpy		|	Burger		|	No				|
	Then close the browser 
