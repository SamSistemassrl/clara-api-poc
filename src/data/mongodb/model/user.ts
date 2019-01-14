import { prop, Typegoose } from "typegoose";
import Connector from '../connector';

const db = Connector.getConnection();

export class User extends Typegoose {

    @prop({ required: true })
    private fullName!: string;

    @prop({ required: true })
    private email!: string;

    @prop({ required: true })
    private password!: string;

}

export default new User().getModelForClass(User, {
    existingMongoose: db,
    schemaOptions: { collection: "users", timestamps: true },
});
