# banco-web-tests

This project aims to automate web application tests using Cypress and JavaScript, focusing on code organization.

## Objective

Automate test scenarios for the Banco Web application, using best practices for organization, custom commands, and report generation.

## Project Components

- **Cypress**: Main framework for end-to-end test automation.
- **Custom Commands**: Personalized commands to reuse common logic across tests, located in `cypress/support/commands/`.
- **cypress-mochawesome-reporter**: Generates detailed HTML reports of the executed tests.
- **Folder Structure**:
  - `cypress/e2e/`: Automated test scripts.
  - `cypress/fixtures/`: Support data for the tests.
  - `cypress/support/`: Configurations and custom commands.
  - `cypress/reports/`: Reports generated after test execution.

## Prerequisites

- Node.js installed
- Clone and run the [API](https://github.com/juliodelimas/banco-api) and the [Web application](https://github.com/juliodelimas/banco-web)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/pedroborgespj/banco-web-tests.git
   cd banco-web-tests
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Test Execution

- Run tests in headless mode:
  ```bash
  npm test
  ```
- Run tests with the Cypress graphical interface:
  ```bash
  npm run cy:open
  ```
- To run in headed mode (with a visible browser):
  ```bash
  npm run cy:headed
  ```

## Reports

After the tests are executed, the HTML report will be available at `cypress/reports/html/index.html`.

## Test Structure

- `cypress/e2e/login.cy.js`: Login tests.
- `cypress/e2e/transferencia.cy.js`: Bank transfer tests.

## Custom Commands

The custom commands are organized into:
- `cypress/support/commands/common.js`: General utility commands.
- `cypress/support/commands/login.js`: Login-related commands.
- `cypress/support/commands/transferencia.js`: Commands for transfer operations.

To use a custom command in your tests, simply call `cy.<commandName>()`.

## Notes

- Make sure that both the API and the web application are running before executing the tests.
- Access credentials and data examples are located in `cypress/fixtures/`.

---