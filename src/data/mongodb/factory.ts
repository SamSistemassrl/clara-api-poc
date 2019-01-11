class Factory<T> {

    private model: T;

    constructor(model: T) {
        this.model = model;
    }
    public getModelFromEntity(entity): T {

        for (const key in entity['_doc']) {
            if (!entity[key]) continue; // If the field is null or undefined.
            if ( this.isNotAProperty(key) ) continue; // If the field is a mongoose-generated field.

            const setter: string = this.obtainSetter(key);

            this.model[setter](entity[key]);
        }

        return this.model;
    }

    private obtainSetter(field): string {
        const prefix = 'set';
        const firstLetterCapitalized = field.charAt(0).toUpperCase();
        const fieldWithoutFirstLetter = field.slice(1, field.length);

        return prefix + firstLetterCapitalized + fieldWithoutFirstLetter;
    }

    // TODO:
    private isNotAProperty(field): boolean {
        return field === "_id" || field === "__v" || field === "updatedAt" || field === "createdAt";
    }
}

export default Factory;
