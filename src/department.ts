/**
 * 
 * Sample class
 */
export class Department {
    private name: string;
    private employees: string[];
    constructor(name: string, employees: string[]) {
        this.name = name
        this.employees = employees
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }

}


// const dep = new Department('telecom', ['mask', 'jobs'],)
// dep.addEmployee("sachin");
// console.log(dep)


