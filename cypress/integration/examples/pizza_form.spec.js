describe('Pizza order form tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const specialInput = () => cy.get('input[name=special]')

    const sausage = () => cy.get('input[name=sausage]')
    const onions = () => cy.get('input[name=onions]')
    const peppers = () => cy.get('input[name=peppers]')
    const olives = () => cy.get('input[name=olives]')

    const submitButton = () => cy.get('button')

    it('can add text to text boxes', () => {
        nameInput()
            .should('have.value', '')
            .type('Customer')
            .should('have.value', 'Customer')
        
        specialInput()
            .should('have.value', '')
            .type('Half sausage, half peppers')
            .should('have.value', 'Half sausage, half peppers')
    })

    it('can select multiple toppings', () => {
        sausage()
            .should('not.be.checked')
            .click()
            .should('be.checked')
        
        onions()
            .should('not.be.checked')
            .click()
            .should('be.checked')
        
        peppers()
            .should('not.be.checked')
            .click()
            .should('be.checked')
        
        olives()
            .should('not.be.checked')
            .click()
            .should('be.checked')
        
        sausage().should('be.checked')
        onions().should('be.checked')
        peppers().should('be.checked')
    })

    it('can submit form', () => {

        submitButton().should('be.disabled')

        nameInput().type('Tommy')
        cy.get('select[name=size]').select('Small - 8"')
        cy.get('input[value=marinara]').click()
        sausage().click()
        peppers().click()
        specialInput().type('Half sausage, half peppers')

        submitButton().should('not.be.disabled')
        submitButton().click()
    })
})