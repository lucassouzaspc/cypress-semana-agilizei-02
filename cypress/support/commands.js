// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
  cy.setCookie(
    'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
    'R6xmma6F4U6edNQuu67M0kKrl8cWflF0k%2F3deBOCevX40abLvmd2i0l6VOBc9F9aJ7zqbPlx4AI0gXdeISrq1V3yVgDCzwFUx1dlNKuSqG3XD%2F9inqU9Hddko%2Fn4Ua2IWdAjkjvQ43G8KInrRx5X53NIzso2SJFvTZ%2FM1L4DMDiaNKG9WzsWzPgPGG5Y5STP89nLflMLXLqHqbozJU3GyCz2ss6qcpyZC%2BAxGfqkJbyO%2FXzBimLm24EtzSfONTKxun8%2FjC9KF0SX55pUoo4nIru8bPcdnCIHARYzOqCnVnMsPaP9VBBXw02Zao5PRiavNf68%2Bp%2BV9PW3HO3jx5cS1ccH31d13GyFMWwP1Cgs%2FR51o7HgKPdApLANpTboj9hO1sJoGF0Pxx5JLONDEU5qZA%3D%3D000302'
  ) 
})