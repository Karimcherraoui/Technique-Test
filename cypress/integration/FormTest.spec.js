/* eslint-disable no-undef */
describe("FormComponent", () => {
  it("should fill out the form and submit", () => {
    cy.visit("./FormComponent"); 

    cy.get("#email").type("test@example.com");
    cy.get("#card").type("1234 5678 9012 3456");
    cy.get("#date").type("12/25");
    cy.get("#cvv").type("123");
    cy.get("#name").type("John Doe");
    cy.get("#country").select("USA");
    cy.get("#zipCode").type("12345");


    cy.get("form").submit();

    cy.contains("Payment successful");
  });
});
