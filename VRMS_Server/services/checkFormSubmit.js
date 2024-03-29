// catch asynchronous error
module.exports = (fun)=>{
    return (req,res,next)=>{
        // console.log(fun)
        fun(req,res,next).catch((err)=>{
             return res.status(500).json({
                message:err.message,
                fullError: err
            })
        })
    }
}