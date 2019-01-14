class UserClass {
    private fullName: string;
    private email: string;
    private password: string;

    constructor(fullName?, email?, password?) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }

    getFulName(): string {
        return this.fullName;
    }

    setFullName(fullName: string) {
        this.fullName = fullName;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }

}

export default UserClass;
