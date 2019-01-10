import * as Mongoose from 'mongoose';

interface IQueryOptions {
    populate?: any;
    select?: string;
    lean?: boolean;
    first?: boolean;
    limit?: number;
    sort?: any;
}

export default class MongoRepository<T> {

    constructor(private datasource: Mongoose.Model<any>) {}

    private prepareQuery(query: any, options: IQueryOptions): void {
        const { populate, lean, limit, sort, select } = options;
        if (populate) {
            query.populate(populate);
        }
        if (lean) {
            query.lean();
        }
        if (limit && limit !== 0) {
            query.limit(limit);
        }
        if (sort) {
            query.sort(sort);
        }
        if (select) {
            query.select(select);
        }
    }

    public createInstance(data: T): T {
        return new this.datasource(data);
    }

    public async save(data: T): Promise<T> {
        return await this.datasource.create(data);
    }

    public async getById(_id: string, options?: IQueryOptions) {
        let query = this.datasource.findById(_id);
        if (options) {
            this.prepareQuery(query, options);
        }
        return await query;
    }

    public async getByField(field: string, value: any, options: IQueryOptions = { first: false }): Promise<any> {
        let query = options.first
            ? this.datasource.findOne({ [field]: value })
            : this.datasource.find({ [field]: value });

        if (options) {
            this.prepareQuery(query, options);
        }
        return await query;
    }

    public async getAll(options?: IQueryOptions): Promise<any[]> {
        let query = this.datasource.find();
        if (options) {
            this.prepareQuery(query, options);
        }
        return await query;
    }

    public async updateById(_id: string, data: T, returnUpdated: boolean = true) {
        return await this.datasource.findOneAndUpdate({ _id }, data, { runValidators: true, new: returnUpdated });
    }

    public async updateByQuery(query: any, data: T, returnUpdated: boolean = true, insert: boolean = false ) {
        return await this.datasource.findOneAndUpdate(query, data, { runValidators: true, new: returnUpdated, upsert: insert });
    }

    public async search(queryString: any, options: IQueryOptions = { first: false }) {
        let query = options.first ? this.datasource.findOne(queryString) : this.datasource.find(queryString);

        if (options) {
            this.prepareQuery(query, options);
        }

        return await query;
    }

    public async deleteById(_id: string) {
        return await this.datasource.remove({ _id });
    }

    public async deleteByField(field: string, value: any) {
        await this.datasource.remove({ [field]: value });
    }

    public async countByQuery(queryString: any = {}) {
        return await this.datasource.count(queryString);
    }
}
