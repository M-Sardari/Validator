export type ValidatorMessageType =
    | 'undefined'
    | 'invalid'
    | 'empty'
    | 'email'
    | 'mobile'
    | 'min'
    | 'max'
    | 'length'
    | 'minLength'
    | 'maxLength'
    | 'arrayUnique'
    | 'arrayCount'
    | 'arrayMinCount'
    | 'arrayMaxCount';
// | 'domain';

export const ValidatorMessage: { [key in ValidatorMessageType]: string } = {
    undefined: '{{title}} مشخص نشده است.',
    invalid: '{{title}} صحیح مشخص نشده است.',
    empty: 'مشخص کردن {{title}} الزامی است.',
    email: '{{title}} باید به صورت آدرس ایمیل مشخص شده باشد.',
    mobile: '{{title}} باید به صورت شماره موبایل مشخص شده باشد.',

    min: '{{title}} نمی‌تواند کمتر از {{check}} باشد.',
    max: '{{title}} نمی‌تواند بزرگتر از {{check}} باشد.',

    length: '{{title}} باید {{check}} کاراکتر باشد.',
    minLength: '{{title}} باید حداقل دارای {{check}} کاراکتر باشد.',
    maxLength: '{{title}} می‌تواند حداکثر دارای {{check}} کاراکتر باشد.',

    arrayUnique: 'امکان مشخص کردن گزینه تکراری در {{title}} وجود ندارد.',
    arrayCount: 'تعداد {{title}} باید {{check}} مورد باشد.',
    arrayMinCount: 'تعداد {{title}} باید حداقل {{check}} مورد باشد.',
    arrayMaxCount: 'تعداد {{title}} می‌تواند حداکثر {{check}} مورد باشد.',

    //domain: '{{title}} صحیح مشخص نشده است یا بدون www. وارد شود',
};
