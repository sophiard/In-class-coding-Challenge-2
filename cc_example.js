//task 1

let products = [
    { Name: "labtop", price: 1200, category: "electronics" },
    { Name: "Notebook", price: 5, category: "stationary" },
];

function GetProductsByCategory(products, category){
    return products.filter(product => product.category === category)
}
console.log(GetProductsByCategory(products, "electronics"))