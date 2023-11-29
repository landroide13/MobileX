export default ErrorHandler = (err) =>{
    let error = err

    if(err.response && err.response.data.hasOwnProperty('message')){
        error = err.response.data
    }

    return new Error(error.message);
}