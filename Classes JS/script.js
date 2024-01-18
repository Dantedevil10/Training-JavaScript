//em classes não precisa colocar o parametro Funão nas funçoes somente o nome das funções
//ex : função cair(){}
//fica cair(){}


class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);

    }
}

const product1 = new Product('Shirt' ,19.99 );

product1.displayProduct();