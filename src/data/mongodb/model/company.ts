import { prop, Typegoose } from "typegoose";
import Connector from '../connector';

const db = Connector.getConnection();

export class Company extends Typegoose {

    @prop({ required: true })
    private id!: number;

    @prop({ required: true })
    private name!: string;

}

export default new Company().getModelForClass(Company, {
    existingMongoose: db,
    schemaOptions: { collection: "companies", timestamps: true },
});
