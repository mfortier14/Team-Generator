class Employee {
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }
    getName() {
        console.log(`${this.name}`);
    }

    getId() {
        console.log(`${this.id}`);
    }

    getEmail() {
        console.log(`${this.email}`);
    }
}

getRole() {
    return Employee();
}
