package com.qa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = false, // Helps to find mapping between feature file and Step definition, which means all tag mentioned in feature file is defined in Step definition or not. Display in Console output(when run through Junit)
		features = "C:/Automation/CucumberAutomation/src/main/java/com/qa/featurefiles/Tags.feature",	// Defines where feature file is located, if we have multiple feature file mention the folder path
		glue={"com.qa.stepdefinitions"}, // Defines the path of Step definition, if we have multiple step definition file mention the folder path
		format = {"pretty", "html:test-outout","junit:junitOutput/junit.xml"}, // Helps to print the output report in required format like "JSON : JSON_Output/TestOuput" i.e., "Type of format : Name of File/Name of folder to created/placed"
		monochrome = true, //Display the output in console in a more readable format (when run through Junit)
		strict = true, // It fails execution, if undefined steps are there in Step Definition file(when run through Junit - Pending Exception will be raised)
		
		//tags = {"@Mandatory, @Optional"} //In this case (OR Operation), either one of tags mentioned test case will run
		//tags = {"@Mandatory", "@optional"} // In this case(And Operation), both mentioned tags must be mentioned in test case to execute
		tags = {"~@Mandatory", "@optional"} // In this case ~ operator, will exclude the test case with tag name
		)
public class Tags_Runner {

}
