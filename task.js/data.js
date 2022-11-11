// Sample Array
const employee = [
    {
      name: "Bala",
      salary: 10000,
      age: 28,
    },
    {
      name: "BalaSundhar",
      salary: 50000,
      age: 25,
    },
    {
      name: "BalaGanapathy",
      salary: 15000,
      age: 23,
    },
    {
      name: "Ganapathy",
      salary: 18000,
      age: 21,
    },
  ];
  
  const startsWithB = employee.filter((item) => item.name.startsWith("B"));
  console.log("startsWithB--->", startsWithB);
  
  const secondCondition = startsWithB.filter((item) => item.salary < 40000);
  console.log("secondCondition ---:>> ", secondCondition);
  
  const thirdCondition = employee.reduce((prev, current) => (prev.salary > current.salary ? prev : current));
  
  console.log("thirdCondition :>> ", thirdCondition);
  const fourthCondition = employee.sort((a, b) => b.age - a.age);

  console.log("fourthCondition :>> ", fourthCondition);
  const removeEmployee = employee.pop();

  console.log("removeEmployee :>> ", employee);

  const addEmployee = employee.push({
    name: "Tamil",
    salary: 28000,
    age: 22,
  });
  
  console.log("addEmployee :>> ", employee);

  let total = 0 ;
  employee.forEach(item =>
  {
    total = total + item.salary;  
  });
console.log(total);