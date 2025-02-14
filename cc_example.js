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

//task 3

let sales = [250, 400, 150, 900, 1200];

function calculateTotalRevenue(sales) {
    return sales.reduce((total, sale) => total + sale, 0);
}

console.log(`Total Rev.2024: $${calculateTotalRevenue(sales)}`);

// task 4
let employee = { name: "John Doe", salary: 50000, position: "Manager" };

function updateSalary(employee, percentageIncrease) {
    return employee.salary += employee.salary * percentageIncrease;
}

console.log("updated Salary", updateSalary(employee, 0.1));
