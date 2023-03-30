![logo](https://user-images.githubusercontent.com/44912347/202244850-18dbf275-11cf-44b5-9500-b2fcb5d44d05.jpg)

# Classy Coders Inc. 👩‍💻

In a tech-driven world, the importance of skilled employees cannot be overstated. Enter "Classy Coders Inc", a software development company on a mission to revolutionize the way businesses operate. As a budding developer, you've just landed a job at this esteemed establishment and are tasked with creating a series of classes that represents employees at the company and will underlie the systems they are building.

They have provided you with the following class diagram that represents their current workforce.

![Classy Coders Inc Class Diagram](./assets/EmployeeClassDiagram.png)

## `Employees`

Create a class `Employee` that has the following properties and methods:
- `name`: A string representing the name of the employee.
- `position`: A string representing the position of the employee.
- `salary`: A *private* number representing the salary of the employee.
- `isHired`: A private field that initializes with a value of `true`.
- `getSalary()`: A method that returns the `salary` of the employee.
- `setSalary(amount)`: A method that updates the `salary` of the employee.
- `status(command)`: A method that updates `isHired` to:
    - `true` if `command` is `"hire"`
    - `false` if `command` is `"fire"`

## `Manager`

Create a subclass `Manager` that extends `Employee` and has the following additional property and methods:
- `department`: A string representing the department the manager is in charge of.
- `employeesManaged`: A *private* property that holds an array of `Employees` the manager manages.
- `getDepartment()`: A method that returns the department of the manager.
- `setDepartment(department)`: A method that returns the department of the manager.

## `SoftwareEngineer`

Create a class of `SoftwareEngineer` that extends `Employee` and has the following additional properties and methods:
- `programmingLanguages`: A *private* property that holds an array of programming languages the software engineer knows.
- `getLanguages()`: A method to return the `programmingLanguages` that the engineer knows.
- `setLanguage(language)`: A method to update the `programmingLanguages` with a new language to the array.


## `SalesPerson`

Create a class of `SalesPerson` that extends `Employee` and has the following additional properties and methods:
- `clients`: A property that holds an array of clients the salesperson manages.
- `totalSales`: A private field that contains the value of total sales the employee has performed.
- `getSalesNumbers()`: A method that returns the `totalSales` for the salesperson.
- `makeSale(amount)`: A method that updates the `totalSale` with the `amount`.

## Updating `Employee` Class with Static Values
- `allEmployees`: A static property that initializes as an empty array. Every time a new `Employee` is created they are added to the end of this array.
- `getEmployees`: A static method that returns the array of `allEmployees`.
- `setEmployees(Employee)`: A static method that updates the array of `allEmployees` when a new employee is created.
- `getTotalPayroll(employees)`: A static method that returns the total salaries of all employees that are stored in the `allEmployees` array.

## Stretch: Go Above and Beyond 🚀
1. **Error Handling**: Add error handling to the `setSalary` method of the Employee class. If the salary is less than `0`, throw an error with the message `"Salary cannot be negative"`.
2. **Promotions**: Add a `promote` method to the `Employee` class. This method should take in a new job title as an argument and update the employee's job title and salary accordingly. Implement this method in the `Manager` subclasses as well, as they may have additional promotion criteria.
3. **Performance Metrics**: Add performance metrics to the `Employee` class. Each employee should have a set of metrics such as sales numbers for salespeople, project completion rate for software engineers, and employee retention rate for managers. Implement a method to calculate and return the performance score based on these metrics. Design a method that use this score to determine bonuses and/or promotions.