type Customer = {
  birthday?: Date;
};

function getCostumer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCostumer(1);
// optional property access operator
console.log(customer?.birthday?.getFullYear());

// optional element access operator ex: array customer
// customer?.[0]

// optional call
let log: any = null;
log?.("a");
