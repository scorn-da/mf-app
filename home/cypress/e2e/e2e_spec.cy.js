describe("My first E2E Test", () => {
  it('Should add an item to the cart', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#app').click();
    cy.get('#showlogin').click();
    cy.get('#loginbtn').click();
    cy.get('.flex-end > #showcart').click();
    cy.get('#clearcart').click();
    cy.get('#showcart > #showcart').click();
    cy.get('#addtocart_1').click();
    cy.get('a:nth-child(3)').click();
    cy.get('#grand_total').should("contain", " $5.99");
  });
});