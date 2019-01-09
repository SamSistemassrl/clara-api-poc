class User {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static getUser(id) {
        return new User(id, 'Lucas', 'Lopez');
    }

}

module.exports = User;