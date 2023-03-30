const { Employees, Manager, SalesPerson, SoftwareEngineer } = require('./index');

describe("Employee tests without static methods", () => {
    const preston = new Employees("Preston", "Engineer", 100000);
    test("Can create instance of Employee class", () => {
        expect(preston instanceof Employees).toBe(true);
    })

    test("Can get Employee salary", () => {
        expect(preston.getSalary()).toBe(100000)
    })

    test("Can update salary", () => {
        preston.setSalary(105000)
        expect(preston.getSalary()).toBe(105000)
    })

    test("Can get current isHired status", () => {
        expect(preston.getStatus()).toBe(true);
    })

    test("Can fire Employee", () => {
        preston.setStatus("fire");
        expect(preston.getStatus()).toBe(false);
    })
})

