import { ValidatorInterface } from './validator/validator.interface';
import 'reflect-metadata';

export const Validator = (validator: ValidatorInterface | { [key: string]: ValidatorInterface }, isArray?: boolean): PropertyDecorator => (
    target: object,
    property: string,
): void => {
    if (isArray) {
        let argsArray = Reflect.getMetadata('validator-array', target.constructor) || {};
        Object.keys(validator).forEach((k: string) => {
            argsArray = { ...argsArray, [property + ':' + k]: validator[k] };
        });

        Reflect.defineMetadata('validator-array', argsArray, target.constructor);
    } else {
        let args = Reflect.getMetadata('validator', target.constructor) || {};

        let group: boolean = false;
        Object.keys(validator).forEach((k: string) => {
            if (validator[k].title !== undefined) group = true;
        });

        if (!group) args = { ...args, [property]: validator };
        else
            Object.keys(validator).forEach((k: string) => {
                args = { ...args, [property + ':' + k]: validator[k] };
            });
        Reflect.defineMetadata('validator', args, target.constructor);
    }
};
