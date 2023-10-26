describe("Transactions", () => {


  //! hooks -> executar antes ou depois / de cada ou de todos os testes 
  //* before
  //* after
  //* beforeEach


  beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");
  });


  it('register an entry', () => {
    

    createTransaction("Freela", 250);

    cy.get("tbody tr td.description ").should("have.text", "Freela"); //* asserção
  });




  it('register an exit', () => {

    createTransaction("Cinema", -45);
    cy.get("tbody tr td.description ").should("have.text", "Cinema"); //* asserção
    
});



  it('delete transaction', () => {
    createTransaction("Freela", 100)
    createTransaction("Mesada", 10)



    //cy.contains(".description", "Freela",) //td -> referencia
    //.parent() //tr
    //.find('img') // elemento que a  gente precisa  
    // .click()

    cy.contains(".description", "Freela")
    .siblings()
    .children('img')
    .click()



    cy.get('tbody tr').should("have.length", 1);
  });
});




function createTransaction(descricao, valor) {
    cy.visit("https://devfinance-agilizei.netlify.app/#");

    cy.contains("Nova Transação").click();
    cy.get("#description").type(descricao);
    cy.get("#amount").type(valor);
    cy.get("#date").type("2023-10-15"); // yyyy-mm-dd

    cy.contains("button", "Salvar").click();
}

