class Manager {
    constructor(name, id, title, email, officeNumber) {
        this.name = name;
        this.title = title;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log(`${Manager}`);
    }
}

const manager = new Manager("Jason", 3337, "Manager", "jasonl@fakemail.com", 603-978-4447);

manager.getRole();