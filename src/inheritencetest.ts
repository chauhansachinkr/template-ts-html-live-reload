import { Department } from "./department";
export class ITDepartment extends Department {
    budget: number;
    constructor(name: string, employees: string[], budget: number) {
        super(name, employees);
        this.budget = budget
    }
}
