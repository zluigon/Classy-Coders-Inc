class Employees {
  #salary;
  #isHired;

  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.#salary = salary;
    this.#isHired = true;

    Employees.allEmployees.push(this);
  }

  static allEmployees = [];

  getSalary() {
    return this.#salary;
  }

  setSalary(amount) {
    this.#salary = amount;
  }

  getStatus() {
    return this.#isHired;
  }

  setStatus(cmd) {
    if (cmd === "hire") {
      this.#isHired = true;
    } else if (cmd === "fire") {
      this.#isHired = false;
    }
  }

  static getEmployees() {
    return Employees.allEmployees;
  }

  static getTotalPayroll() {
    return Employees.allEmployees.reduce(
      (total, employee) => total + employee.getSalary(),
      0
    );
  }
}

module.exports = {
  Employees,
};
