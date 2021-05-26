export class ValidationArray {
    isUnique = (value: any[]): boolean => {
        const unique: any[] = value.filter((item: any, index: number, self: string[]) => self.indexOf(item) === index);
        return unique.length === value.length;
    };

    in = (check: any[], value: any[]): boolean => {
        let error: boolean = false;
        value.forEach((v: any) => {
            if (!check.includes(v)) error = true;
        });

        return !error;
    };
}
