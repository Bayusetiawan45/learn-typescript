function render(document: unknown) {
  // Narrowing
  if (typeof document === "string") {
    document.toUpperCase();
  }
  //   document.fly()
  //   document.whatEverYouWant()
}
