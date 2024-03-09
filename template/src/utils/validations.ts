/* eslint-disable */

const emptyRegex: RegExp = /^$/;
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validator = {
    empty: (val: string): boolean => {
        return emptyRegex.test(val.trim());
    },
    email: (val: string): boolean => {
        return emailRegex.test(val.trim());
    }
};

const checkEmpty = (val: string, key: string): string => {
    if (validator.empty(val)) {
        return `Please enter ${key}`;
    }
    return '';
};

const checkMinLength = (val: string, minLength: number, key: string): string => {
    if (val.trim().length < minLength) {
        return `Please enter valid ${key}`;
    }
    return '';
};

export default function validate(data: { [key: string]: string }): string | boolean {
    const { 
        name,
        email, 
        password,
        otp
    } = data;

    if (name !== undefined) {
        const emptyValidationText = checkEmpty(name, "User name");
        if (emptyValidationText) { return emptyValidationText };

        const minLengthValidation = checkMinLength(name, 3, "User name");
        if (minLengthValidation) { return minLengthValidation };
    }

    if (email !== undefined) {
        const emptyValidationText = checkEmpty(email, "email");
        if (emptyValidationText) { return emptyValidationText };

        if (!validator.email(email)) { return "Please enter valid email" };
    }

    if (password !== undefined) {
        const emptyValidationText = checkEmpty(password, "password");
        if (emptyValidationText) { return emptyValidationText };

        const minLengthValidation = checkMinLength(password, 6, "password");
        if (minLengthValidation) { return minLengthValidation };
    }

    if (otp !== undefined) {
        const emptyValidationText = checkEmpty(otp, "Otp");
        if (emptyValidationText) { return emptyValidationText };

        const minLengthValidation = checkMinLength(otp, 4, "Otp");
        if (minLengthValidation) { return minLengthValidation }
    }

    return true;
}
