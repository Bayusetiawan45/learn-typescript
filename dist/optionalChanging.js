"use strict";
function getCostumer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCostumer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear());
