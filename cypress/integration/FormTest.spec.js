/* eslint-disable no-undef */
describe("FormComponent", () => {
  it("should fill out the form and submit", () => {
    cy.visit("./FormComponent");

    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="cardNumber"]').type("1234 5678 9012 3456");
    cy.get('input[name="expirationDate"]').type("12/25");
    cy.get('input[name="cvv"]').type("123");
    cy.get('input[name="name"]').type("John Doe");
    cy.get('select[name="country"]').select("AE");
    cy.get('input[name="zip"]').type("12345");

    cy.get('button[type="submit"]').click();
    cy.contains('Payment successful').should('be.visible');
  });
});
