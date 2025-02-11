//task 1

let products = [
    { Name: "labtop", price: 1200, category: "electronics" },
    { Name: "Notebook", price: 5, category: "stationary" },
];

function GetProductsByCategory(products, category){
    return products.filter(product => product.category === category)
}
console.log(GetProductsByCategory(products, "electronics"))

//task 2
console.log(products);
console.log("*".repeat(20))
function applydiscount (products, discountRate){
    return products.map(product => ({
      ...product,
      price: product.price - (product.price * discountRate)
    }))
};
console.log(applydiscount(products, .1))
console.log("*".repeat(20))
console.log(products);
