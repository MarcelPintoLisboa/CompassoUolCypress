///<reference types="cypress"/>

describe('test',()=>{

    it('Teste 1 Cadastro ',() =>{


 //Preencher o formulário Enter Vehicle  
 cy.get('#search_query_top').type('Faded Short Sleeve');
 
 cy.get('#searchbox > .btn').click();
 cy.screenshot();
 cy.get('.ajax_add_to_cart_button > span').click();
 cy.screenshot();
 cy.get('.button-container > .button-medium > span').click();
 cy.screenshot();
 cy.get('.cart_description > .product-name > a').should('contain.text', 'Faded Short Sleeve T-shirts');
 cy.screenshot();
 cy.get('.cart_description > .product-name > a').should('contain.text', 'Faded Short Sleeve T-shirts')
 cy.get('#product_price_1_1_0 > .price').should('contain.text', '$16.51');

});

})
