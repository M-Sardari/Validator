export class ValidationType {
    isEmpty = (value: any): boolean => {
        return value === '' || value === null || value === undefined;
    };

    isString = (value: any): boolean => {
        if (value === undefined || value === null) return false;
        return typeof value === 'string';
    };

    isBoolean = (value: any): boolean => {
        if (value === undefined || value === null) return false;
        return typeof value === 'boolean';
    };

    isNumber = (value: any): boolean => {
        if (value === undefined || value === null) return false;
        return typeof value === 'number' && !isNaN(value);
    };

    isDate = (value: any): boolean => {
        if (value === undefined || value === null) return false;
        if (Object.prototype.toString.call(value) !== '[object Date]') return false;
        const date: Date = value;
        return !isNaN(date.getTime());
    };

    isArray = (value: any): boolean => {
        if (value === undefined || value === null) return false;
        return Array.isArray(value);
    };

    isObject = (value: any): boolean => {
        if (value === undefined || value === null) return false;
        return typeof value == 'object' && !this.isArray(value) && !this.isDate(value);
    };
}
