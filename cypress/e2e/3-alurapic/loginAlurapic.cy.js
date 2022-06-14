describe("Login e registro de usuários no alura pic", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });

  it("Verifica login de usuário valido", () => {
    cy.login(Cypress.env("userName"), Cypress.env("password"));
    cy.contains("a", "(Logout)").should("be.visible");
  });
  it("Verifica login de usuário invalido", () => {
    cy.login("alisson", "1234");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});
