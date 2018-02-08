/*package com.qa.stepdefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefintion_DataTable_Map {
	
	WebDriver driver;
		
	@Given("^Check user able to access FreeCRM Site$")
	public void check_user_able_to_access_FreeCRM_Site(){
	    
		System.setProperty("webdriver.chrome.driver", "../CucumberAutomation/driverFiles/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://www.freecrm.com/index.html");
		String pageTitle_Launch = driver.getTitle();
		Assert.assertEquals("User able to access Free CRM Site", "#1 Free CRM for Any Business: Online Customer Relationship Software", pageTitle_Launch);
	}

	@When("^Check title page$")
	public void check_title_page(){
	    
		String pageTitle_Launch = driver.getTitle();
		Assert.assertEquals("User able to access Free CRM Site", "#1 Free CRM for Any Business: Online Customer Relationship Software", pageTitle_Launch);	
	}

	@Then("^Enter login credentials UserName as UserName and Password as Password$")
	public void enter_login_credentials(DataTable Credentials){
	
		
		for(Map<String, String> obj :Credentials.asMaps(String.class, String.class)){

		driver.findElement(By.name("username")).clear();
	    driver.findElement(By.name("username")).sendKeys(obj.get("UserName"));
	    driver.findElement(By.name("password")).clear();
	    driver.findElement(By.name("password")).sendKeys(obj.get("Password"));
	    driver.findElement(By.xpath("//input[@value ='Login']")).submit();
		}
	    String pageTitle_Home = driver.getTitle();
	    Assert.assertEquals("User had valid credentials to access portal", "CRMPRO", pageTitle_Home); 
	}

	@Then("^Check user landed in home page$")
	public void check_user_landed_in_home_page(){
	   
		  String pageTitle_Home = driver.getTitle();
		  Assert.assertEquals("User landed in home page of his/her account", "CRMPRO", pageTitle_Home);
	}
	
	@Then("^Navigate to Add Contacts Page$")
	public void Navigate_to_Add_Contacts_Page(){
	   
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contact')]"))).build().perform();    
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
		Assert.assertTrue(driver.findElement(By.id("first_name")).isDisplayed()); 
	}
	
	
	@Then("^Add contacts details listed Title and First_Name and Last_Name and Receive_Email")
	public void Add_contacts_details_listed_Title_and_First_Name_and_Last_Name_and_Receive_Email(DataTable ContactDetails){
	  
		for(Map<String,String> obj :ContactDetails.asMaps(String.class, String.class)){
	
		Select select = new Select(driver.findElement(By.name("title")));
		select.selectByVisibleText(obj.get("Title"));
				
		driver.findElement(By.id("first_name")).sendKeys(obj.get("First_Name"));	
		driver.findElement(By.id("surname")).sendKeys(obj.get("Last_Name"));	
		
		if(obj.get("Receive_Email").equals("Yes")){
			driver.findElement(By.xpath("//input[@name='receive_email' and @value ='Y']")).click();

		}else if(obj.get("Receive_Email").equals("No"))
		{
			driver.findElement(By.xpath("//input[@name='receive_email' and @value ='N']")).click();
		}
		
		driver.findElement(By.xpath("//input[@value ='Save']")).click();
		
		//driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contact')]"))).build().perform();    
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
		Assert.assertTrue(driver.findElement(By.id("first_name")).isDisplayed()); 
		
		}
	}
	
	
	@Then("^close the browser$")
	public void close_the_browser(){
	   
		  String pageTitle_Home = driver.getTitle();
		  Assert.assertEquals("User closing the browser", "CRMPRO", pageTitle_Home);
		  driver.close();
	}
	
}
*/