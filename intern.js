class Intern {
    constructor(name, id, title, email, school) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.school = school;
    }
    getSchool() {
        console.log(`${this.school}`);
    }

    getRole() {
        console.log(`${Intern}`);
    }
}

const intern = new Intern("Kelsey", 8833, "Intern", "kelseym@fakemail.com", "Stanford");

intern.getRole();