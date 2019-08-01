class CustomError extends Error {
    constructor(code = 'GENERIC', status = 500, ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }

        this.code = code;
        this.statuse = statuse;
    }
}

module.exports = CustomError;