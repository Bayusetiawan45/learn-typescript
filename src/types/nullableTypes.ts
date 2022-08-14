function great(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("hallo");
}

great(undefined);
