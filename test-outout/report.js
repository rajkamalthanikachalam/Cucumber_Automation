$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Automation/CucumberAutomation/src/main/java/com/qa/featurefiles/Hooks.feature");
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
      "value": "#Since Login and Logout is mandatory let me add this as pre requisite through Hooks"
    },
    {
      "line": 4,
      "value": "# Global Hooks : will run for all scenario mentioned in feature file"
    },
    {
      "line": 5,
      "value": "#Local Hooks: through the tag mentioned, it will be run for specific scenario , Method will run for specific scenario"
    },
    {
      "line": 6,
      "value": "#Order : We i have couple of precondition , through order i can give preference method, which need to get executed first"
    }
  ],
  "line": 9,
  "name": "Login",
  "description": "",
  "id": "feature-of-free-crm-login-page;login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@FirstScenario"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Given Login to the page"
    }
  ],
  "line": 12,
  "name": "ValidCredentials",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Access Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Navigate to Contact Details",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Add Contacts",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Check the Contacts",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 17,
      "value": "#Then Logout"
    }
  ],
  "line": 20,
  "name": "Login2",
  "description": "",
  "id": "feature-of-free-crm-login-page;login2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SecondScenario"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "ValidCredentials",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Access Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Navigate to Contact Details",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Add Contacts",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Check the Contacts",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "feature-of-free-crm-login-page;login2;",
  "rows": [
    {
      "cells": [
        "Test1",
        "Test3"
      ],
      "line": 28,
      "id": "feature-of-free-crm-login-page;login2;;1"
    },
    {
      "cells": [
        "Test3",
        "Test4"
      ],
      "line": 29,
      "id": "feature-of-free-crm-login-page;login2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Login2",
  "description": "",
  "id": "feature-of-free-crm-login-page;login2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SecondScenario"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "ValidCredentials",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Access Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Navigate to Contact Details",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Add Contacts",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Check the Contacts",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 32,
  "name": "Login3",
  "description": "",
  "id": "feature-of-free-crm-login-page;login3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@ThirdScenario"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 34,
      "value": "#Given Login to the page"
    }
  ],
  "line": 35,
  "name": "ValidCredentials",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Access Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Navigate to Contact Details",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Add Contacts",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Check the Contacts",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});