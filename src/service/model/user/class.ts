class UserClass {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;

    constructor(id?, firstName?, lastName?, email?) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getFirstName(): string  {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

}

export default UserClass;
