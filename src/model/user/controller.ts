const User = require('./user.ts');

class UserController {
    constructor(){}

    getUser = (id) => {
        return new User(id, 'Jorge', 'Lopez');
    };
}

exports.module = new UserController();