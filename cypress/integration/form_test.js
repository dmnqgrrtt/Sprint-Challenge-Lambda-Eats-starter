describe('Test our form inputs', function () {
    this.beforeEach(function () {
        cy.visit('http://localhost:3000/pizza')
    })
    
    it('first test', function () {
       
        cy.get('[data-cy="name"]')
            .type("Michael Jordan")
            .should("have.value", "Michael Jordan");
        cy.get('[data-cy="size"]')
            .select("Large")
            .should("have.value", "Large");
        cy.get('[data-cy="tomato"]')
            .click()
            .should("be.checked");
         cy.get('[data-cy="pepp"]')
            .click()
            .should("be.checked");
        cy.get('[data-cy="sausage"]')
            .click()
            .should("be.checked");
        cy.get('[data-cy="xcheese"]')
            .click()
            .should("be.checked");
        cy.get('[type="submit"]')
            .click();
        
                  

    });
});