class customAPIError extends Error{
    constructor(message, statusCode)
    {
        super(message)
        this.statusCode=statusCode
    }
}

module.exports={customAPIError}
// The code defines a custom error class customAPIError that extends the built-in Error class. This class is used to create specific API-related errors with an associated status code.
// The constructor of the customAPIError class takes two parameters: message and statusCode.
// The super(message) call inside the constructor is used to call the parent Error class constructor and set the error message.
// The statusCode property is then assigned to the error instance to store the status code associated with the error.