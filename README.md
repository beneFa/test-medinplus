# Sauce Demo - Cypress E2E Test

## Description

This project contains an end-to-end test implemented with Cypress on the Sauce Demo website.

The test covers the following features:
- Login with a standard user
- Add two products to the cart
- Verify the number of products and the cart contents
- Complete the checkout process
- Verify the products in the order summary
- Complete the order
- Verify the order confirmation

## Prerequisites

- Node.js (with npm)

## Installation

Clone the repository and install the project dependencies:

```bash
npm install
```

Cypress is included as a development dependency and will be installed automatically.

## Running the tests

### Headless mode

Run the E2E test from the command line:

```bash
npm test
```

## Test scenario

The test is executed on the Sauce Demo website using the standard user provided by the application.

It validates the complete purchase workflow, from authentication to successful order confirmation.