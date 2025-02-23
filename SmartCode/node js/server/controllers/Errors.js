const ERRORS_MESSAGE = {
    SERVER_ERROR : "Something is wrong, please try again later !!!"
}


class Errors {
    static serverError(res, message = ERRORS_MESSAGE.SERVER_ERROR){
        res.status(500).json(message)
    }
}

module.exports = {
    Errors
}