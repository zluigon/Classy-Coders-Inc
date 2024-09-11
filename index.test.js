const { Employees, Manager, SalesPerson, SoftwareEngineer } = require('./index');

describe("Employees tests without static methods", () => {
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

    test("Throws errow with negative salary", ()=>{
        expect(() => {
            preston.setSalary(-25).toThrow("Salary cannot be negative");
        })
    })
})

describe("Manager tests", () => {
    const preston = new Employees("Preston", "Engineer", 100000);
    const jenna = new Manager("Jenna", "Head of Engineers", 120000, "Software Engineering", 10);

    test("Can create instance of Manager that is a subclass of Employees", () => {
        expect(jenna instanceof Manager).toBe(true);
        expect(jenna instanceof Employees).toBe(true);
    })

    test("Can get the managers department", () => {
        expect(jenna.getEmployeesManaged()).toEqual([]);
    })

    test("Can update a Managers department", () => {
        jenna.setEmployeesManaged(preston);
        expect(jenna.getEmployeesManaged()).toEqual([preston]);
    })
})

describe("Software Engineer Tests", () => {
    const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, ["JavaScript", "Java", "Python"]);
    
    test("Can create instance of SoftwareEngineer that is a subclass of Employees", () => {
        expect(programmer instanceof Employees).toBe(true)
        expect(programmer instanceof SoftwareEngineer).toBe(true)
    })

    test("Can get all programmingLanguages", () => {
        expect(programmer.getProgrammingLanguages()).toEqual(["JavaScript", "Java", "Python"])
    })

    test("Can update programmingLanguages", () => {
        programmer.setProgrammingLanguages("C#"); 
        expect(programmer.getProgrammingLanguages()).toEqual (["JavaScript", "Java", "Python", "C#"]);
    })
})

describe("SalesPerson Tests", () => {
    const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"])

    test("Can create instance of SalesPerson that is a subclass of Employees", () => {
        expect(malik instanceof SalesPerson).toBe(true);
        expect(malik instanceof Employees).toBe(true);
    })

    test("Can get totalSales with getSalesNumber", () => {
        expect(malik.getSalesNumber()).toBe(0);
    })

    test("Can update totalSales with makeSale", () => {
        malik.makeSale(10500);
        malik.makeSale(20000);
        expect(malik.getSalesNumber()).toBe(30500);
    })

    test("Finds and returns client", () =>{
        expect(malik.findClient("MySpace")).toBe("MySpace");
    })
})

describe("Employee Static Properties and Methods Tests", () => {
    test("getEmployees returns array of all employees", () => {
        expect(Employees.getEmployees().length).toBe(5)
    })

    test("getTotalPayroll returns salary of all employees created", () => {
        expect(Employees.getTotalPayroll()).toBe(515000)
    })
})