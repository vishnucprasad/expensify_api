class UnauthorizedError extends Error {
    constructor(message = 'Unauthorized Error', _message = 'unauthorized') {
        super();
        this.error = {
            name: 'UnauthorizedError',
            message: message,
        };
        this.name = 'UnauthorizedError';
        this._message = _message;
        this.message = `${_message}: ${message}`;
        this.status = 401;
    }
}

module.exports = UnauthorizedError;