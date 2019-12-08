class Engineer {
    constructor(name, id, title, email, github) {
        this.name = name;
        this.id= id;
        this.title = title;
        this.email = email;
        this.github = github;
    }
    getRole() {
        console.log(`${Engineer}`);
    }
}

const engineer = new Engineer("Eleanor", 5667, "Engineer", "eleanorb@fakemail.com", "ellybaker");