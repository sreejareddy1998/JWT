const customAPIError= require('../errors/custom-error');
const errorHandlerMiddleware = (err, req,res,next)=>{
    console.log(err);
    if(err instanceof customAPIError)
    {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).send('Something went wrong try again later');
}

module.exports=errorHandlerMiddleware