"use strict";
//Q1
//1. Define a type alias of product.........
//name (string
//price (number)
//inventory(objec
//stock(number)
//colouroption(string)
// 2. create an array namedproduct containing atleast three product object 
//Each project object should include a name, price ,stockand colour
//3. implement a function can change colour that takes a product object and
// a new colour as input . This function should update
//the colour property of the product and adjust the price based on the new colour 
//implement ur own logic 
//increased by 10 % for red ,decreased by 5% for blue
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        name: "laptop",
        price: 90000,
        inventory: {
            stock: 150,
            colourOption: ["black", "blue"],
        },
    },
    {
        name: "mobile",
        price: 45000,
        inventory: {
            stock: 65,
            colourOption: ["Red", "black"],
        },
    },
    {
        name: "headphones",
        price: 250,
        inventory: {
            stock: 200,
            colourOption: ["black", "white"],
        },
    },
];
function changeColour(products, newColour) {
    products.inventory.colourOption.push(newColour);
    if (newColour === "Red") {
        products.price -= products.price * 0.05;
    }
    else if (newColour === "Black") {
        products.price += products.price * 0.15;
    }
    else if (newColour === "blue") {
        products.price += products.price * 0.95;
    }
    else if (newColour === "silver") {
        products.price -= products.price * 0.10;
    }
    else {
        console.log(`sorry! this ${newColour} is not available`);
    }
    ;
}
function displayProductDetail(products) {
    products.forEach(products => {
        console.log(`Name: ${products.name}`);
        console.log(`price:${products.price}`);
        console.log(`stock:${products.inventory.stock}`);
        console.log(`Available colour:${products.inventory.colourOption}`);
    });
}
changeColour(products[0], "black");
changeColour(products[1], "silver");
changeColour(products[2], "red");
displayProductDetail(products);
const employees = [
    {
        name: "mehrin",
        hoursWorked: 22,
        hourlyRate: 15,
        salery: 0,
    },
    {
        name: "bilal",
        hoursWorked: 15,
        hourlyRate: 12,
        salery: 0,
    },
    {
        name: "kaleem",
        hoursWorked: 14,
        hourlyRate: 11,
        salery: 0,
    },
    {
        name: "ali",
        hoursWorked: 22,
        hourlyRate: 16,
        salery: 0,
    },
];
function calculatesalary(employee) {
    let basicsalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        //Apply 10% bonus
        basicsalary += basicsalary * 0.10;
        console.log(`bonus is given`);
    }
    employee.salery = basicsalary;
    return basicsalary;
}
for (let emp of employees) {
    calculatesalary(emp);
}
for (let emp of employees) {
    console.log(`Employee: ${emp.name},salary:${emp.salery.toFixed(2)}`);
}
;
