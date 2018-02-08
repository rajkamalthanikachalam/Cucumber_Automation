$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Automation/CucumberAutomation/src/main/java/com/qa/featurefiles/LoginFeature_WithoutExample.feature");
formatter.feature({
  "line": 1,
  "name": "Feature of Free CRM Login Page",
  "description": "",
  "id": "feature-of-free-crm-login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Without Example"
    }
  ],
  "line": 4,
  "name": "scenario is to automate the Free CRM Login Page",
  "description": "",
  "id": "feature-of-free-crm-login-page;scenario-is-to-automate-the-free-crm-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Check user able to access FreeCRM Site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Check title page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter login credentials \"008rajkamal\" as UserName and \"Feb$2018@\" as Password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Check user landed in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefintion_WithoutExample.check_user_able_to_access_FreeCRM_Site()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefintion_WithoutExample.check_title_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "008rajkamal",
      "offset": 25
    },
    {
      "val": "Feb$2018@",
      "offset": 55
    }
  ],
  "location": "LoginStepDefintion_WithoutExample.enter_login_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefintion_WithoutExample.check_user_landed_in_home_page()"
});
formatter.result({
  "status": "skipped"
});
});