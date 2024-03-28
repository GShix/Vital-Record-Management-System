const checkFormSubmission =(req, res, next)=>{
    if (req.session && req.session.formSubmitted) {
        // User has submitted the form, proceed to next middleware
        next();
    } else {
        // User hasn't submitted the form, send an error response
        res.status(403).send('Access forbidden');
    }
}
module.exports = checkFormSubmission