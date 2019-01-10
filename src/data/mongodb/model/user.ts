import { prop, Typegoose } from "typegoose";
import Connector from '../connector';

const db = Connector.getConnection();

export class User extends Typegoose {

    @prop({ required: true })
    private id!: number;

    @prop({ required: true })
    private firstName!: string;

    @prop({ required: true })
    private lastName!: string;

}

export default new User().getModelForClass(User, {
    existingMongoose: db,
    schemaOptions: { collection: "users", timestamps: true },
});
