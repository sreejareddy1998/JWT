const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware

// The code defines an error handling middleware function errorHandlerMiddleware, which takes four parameters: err, req, res, and next. In Express.js, error-handling middleware is identified by the presence of four parameters.

// err: This parameter represents the error object that is passed to the middleware when an error occurs during the request processing.
// req: Represents the request object.
// res: Represents the response object.
// next: A callback function to pass control to the next middleware in the stack.
// Error Handling Logic:
// Inside the errorHandlerMiddleware, the first thing it does is log the error using console.log(err).
// The middleware then checks if the error is an instance of the customAPIError class using err instanceof customAPIError.
// If the error is an instance of customAPIError, it means it's a custom API error that was thrown intentionally. In this case, the middleware sets the HTTP status code to the one defined in the statusCode property of the error, and it sends a JSON response to the client with the error message in the msg property.
// If the error is not an instance of customAPIError, it is considered a generic unexpected error. In this case, the middleware sets the HTTP status code to 500 (Internal Server Error) and sends a plain text response with the message "Something went wrong try again later."

