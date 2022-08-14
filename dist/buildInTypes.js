"use strict";
let count = 20;
let course = "Typescript";
let isPublish = true;
let bebek;
function render(document) {
    console.log(document);
}
let array = [1, 2, 3];
let anyArray = [];
let tupples = [1, "ayam"];
let mySize = 2;
console.log(mySize);
function calculateTax() {
    return 10;
}
function calculateTax2(income) {
    if (income > 50000)
        return income * 2;
    return income * 1;
}
function calculateTax3(income, taxYear) {
    if (taxYear > 2022)
        return income * 2;
    return income * 1;
}
calculateTax3(10000, 2021);
function calculateTax4(income, taxYear) {
    if ((taxYear || 2022) > 2022)
        return income * 2;
    return income * 1;
}
calculateTax4(10000);
function calculateTax5(income, taxYear = 2022) {
    if (taxYear > 2022)
        return income * 2;
    return income * 1;
}
calculateTax5(10000);
let employee = {
    id: 1,
    name: "bayu",
    retire: (date) => {
        console.log(date);
    },
};
