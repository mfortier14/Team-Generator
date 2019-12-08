class Employee {
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }
    getRole() {
        console.log(`${Employee}`);
    }
};

const employee = new Employee("Chester", 4554, "Consultant", "chester.fakemail.com");

employee.getRole();
    

