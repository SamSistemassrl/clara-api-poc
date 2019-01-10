class User {
    private id: number;
    private firstName: string;
    private lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    public static getUser(id): User {
        return new User(id, 'Lucas', 'Lopez');
    }

}

export default User;
