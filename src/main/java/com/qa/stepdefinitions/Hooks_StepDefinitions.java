/*package com.qa.stepdefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Hooks_StepDefinitions {
	
	@Before
	//@Given("^Login to the page$")
	public void login_to_the_page() {
		System.out.println("Login Page");
	}

	@Before("@SecondScenario")
	//@Given("^Login to the page$")
	public void login_to_the_page1() {
		System.out.println("Login Page");
	}
	
	@Before(order =1)
	//@Given("^Login to the page$")
	public void login_to_the_page2() {
		System.out.println("Login Page");
	}
	
	@Before(order =2)
	//@Given("^Login to the page$")
	public void login_to_the_page3() {
		System.out.println("Login Page");
	}
	
	@When("^ValidCredentials$")
	public void validcredentials() {
		System.out.println("ValidCredentials");
	}

	@Then("^Access Home Page$")
	public void access_Home_Page() {
		System.out.println("Access Home Page");

	}

	@Then("^Navigate to Contact Details$")
	public void navigate_to_Contact_Details() {
		System.out.println("Navigate to Contact Details");

	}

	@Then("^Add Contacts$")
	public void add_Contacts() {
		System.out.println("Add Contacts");

	}

	@Then("^Check the Contacts$")
	public void check_the_Contacts() {
		System.out.println("Check the Contacts");

	}
	
	@After(order = 0)
	//@Then("^Logout$")
	public void logout() {
		System.out.println("Logout");

	}
	
	@After (order = 1)
	//@Then("^Logout$")
	public void logout2() {
		System.out.println("Logout");

	}
	
	@After(order = 2)
	//@Then("^Logout$")
	public void logout3() {
		System.out.println("Logout");
	}

	@After(("@SecondScenario"))
	//@Then("^Logout$")
	public void logout1() {
		System.out.println("Logout");

	}

}
*/