type Student = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let student1: Student = {
  id: 1,
  name: "bayu",
  retire: (date: Date) => {
    console.log(date);
  },
};

let student2: Student = {
  id: 2,
  name: "tiyas",
  retire: (date: Date) => {
    console.log(date);
  },
};
