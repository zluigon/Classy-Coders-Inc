class Employees {
  #salary;
  #isHired;

  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.#salary = salary;
    this.#isHired = true;
  }

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
}

module.exports = {
  Employees,
};
