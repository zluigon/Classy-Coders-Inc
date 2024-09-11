const { Employees } = require("./Employees");
class Manager extends Employees {
  #empolyeesManaged;

  constructor(name, title, salary, department) {
    super(name, title, salary);
    this.department = department;
    this.#empolyeesManaged = [];
  }

  getEmployeesManaged() {
    return this.#empolyeesManaged;
  }

  setEmployeesManaged(employee) {
    this.#empolyeesManaged.push(employee);
  }
}

module.exports = {
  Manager,
};
