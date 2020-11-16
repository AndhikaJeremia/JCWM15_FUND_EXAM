let database = [
    {
        id: 1,
        username: "alee",
        email: "alee@gmail.com",
        role: "admin",
    },
    {
        id: 2,
        username: "jennie",
        email: "jenniebp@gmail.com",
        role: "user",
    },
    {
        id: 3,
        username: "elsa",
        email: "elsa@disney.com",
        role: "user",
    },
]

class Data {
    constructor(id, username, email, role) {
        this.id = id,
        this.username = username,
        this.email = email,
        this.role = role
    }
}