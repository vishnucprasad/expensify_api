class NotFoundError extends Error {
    constructor(message = 'Not found error', _message = 'Not found') {
        super();
        this.error = {
            name: 'NotFoundError',
            message: message,
        };
        this.name = 'NotFoundError';
        this._message = _message;
        this.message = `${_message}: ${message}`;
        this.status = 404;
    }
}

module.exports = NotFoundError;