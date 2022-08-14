// build in types
let count: number = 20;
let course: string = "Typescript";
let isPublish: boolean = true;
let bebek;

// any types
function render(document: any) {
  console.log(document);
}

// arrays
let array: number[] = [1, 2, 3];
let anyArray = [];

// tupples => for fix and sort array length
let tupples: [number, string] = [1, "ayam"];

// enums => represent a list of related constant
//PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// functions
function calculateTax(): number {
  return 10;
}
function calculateTax2(income: number): number {
  if (income > 50000) return income * 2;
  return income * 1;
}
function calculateTax3(income: number, taxYear: number): number {
  if (taxYear > 2022) return income * 2;
  return income * 1;
}
calculateTax3(10000, 2021);

function calculateTax4(income: number, taxYear?: number): number {
  if ((taxYear || 2022) > 2022) return income * 2;
  return income * 1;
}
calculateTax4(10000);

function calculateTax5(income: number, taxYear = 2022): number {
  if (taxYear > 2022) return income * 2;
  return income * 1;
}
calculateTax5(10000);

// objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "bayu",
  retire: (date: Date) => {
    console.log(date);
  },
};
