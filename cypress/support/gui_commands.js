Cypress.Commands.add("login", (nome, senha) => {
  cy.get('input[formcontrolname="userName"]').type(nome);
  cy.get('input[formcontrolname="password"]').type(senha, { log: false });
  cy.get('.btn[type="submit"]').click();
});

Cypress.Commands.add("cadastrar", (email, fullName, userName, password) => {
  cy.contains("a", "Register now").click();
  cy.get('input[formcontrolname="email"]').type(email);
  cy.get('input[formcontrolname="fullName"]').type(fullName);
  cy.get('input[formcontrolname="userName"]').type(userName);
  cy.get('input[formcontrolname="password"]').type(password, { log: false });
  cy.contains(".btn", "Register").click();
});
