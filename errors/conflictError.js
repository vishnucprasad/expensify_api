class ConflictError extends Error {
    constructor(message = 'Conflict error', _message = 'Conflict occurred') {
        super();
        this.error = {
            name: 'ConflictError',
            message: message,
        };
        this.name = 'ConflictError';
        this._message = _message;
        this.message = `${_message}: ${message}`;
        this.status = 409;
    }
}

module.exports = ConflictError;