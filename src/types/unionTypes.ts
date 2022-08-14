function convertion(weight: number | string) {
  if (typeof weight === "number") return weight * 2;
  else return parseInt(weight) * 2;
}

convertion(10);
convertion("10");
