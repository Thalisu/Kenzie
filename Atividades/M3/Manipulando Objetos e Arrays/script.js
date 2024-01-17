const howManyDepartments = () => departmentList.length;
console.log(howManyDepartments());

const changeDepartmentName = (departmentName, newName) => {
  const department = departmentList.find(
    (department) => department.departmentName === departmentName
  );

  if (department) return { ...department, departmentName: newName };

  return "Department not found.";
};
console.log(changeDepartmentName("Financial", "SIM"));

const giveTheDepartmentABreak = (index) => {
  return departmentList[index]
    ? { ...departmentList[index], working: !departmentList[index].working }
    : "department doesn't exist";
};
console.log(giveTheDepartmentABreak(2));

const howManyEmployeesInDepartment = (departmentName) => {
  const department = departmentList.find(
    (department) => department.departmentName === departmentName
  );
  if (department) return department.employees.length;

  return "Department not found.";
};
console.log(howManyEmployeesInDepartment("Financial"));

const insertNewEmployeeInDepartment = (departmentName, newEmployee = {}) => {
  const department = departmentList.find(
    (department) => department.departmentName === departmentName
  );
  if (department)
    return {
      ...department,
      employees: department.employees.concat(newEmployee),
    };

  return "Department not found.";
};
console.log(
  insertNewEmployeeInDepartment("Financial", {
    name: "rodrigo",
    age: 21,
    responsibility: "Financial analyst",
    salary: 2800,
  })
);
