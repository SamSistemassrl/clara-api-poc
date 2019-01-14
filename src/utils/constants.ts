class Constants {
    public static Bcrypt = {
        SALT_ROUNDS: 10
    };

    public static Server = {
        HOST: process.env.HOST || '0.0.0.0',
        PORT: process.env.PORT || 4000
    }

}

export default Constants;
