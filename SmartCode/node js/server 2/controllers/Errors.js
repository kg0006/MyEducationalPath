const ErrorsMessage = {
    SERVER_ERROR: 'Something is wrong, please try again later !!!', 
    // Общая ошибка сервера. Возвращается, когда что-то пошло не так на стороне сервера, но точная причина неизвестна.
    
    NOT_FOUND_ID_ERROR: "Document with the provided ID was not found", 
    // Ошибка "не найдено". Возвращается, если документ с указанным идентификатором (ID) не существует в базе данных.
    
    BAD_REQUEST_ERROR: "Invalid request data", 
    // Ошибка "плохой запрос". Возвращается, если данные запроса некорректны или не соответствуют ожидаемому формату.
    
    UNAUTHORIZED_ERROR: "Unauthorized access", 
    // Ошибка "неавторизованный доступ". Возвращается, если пользователь не прошел аутентификацию или не имеет действительных учетных данных.
    
    FORBIDDEN_ERROR: "Access forbidden", 
    // Ошибка "доступ запрещен". Возвращается, если пользователь аутентифицирован, но не имеет прав для выполнения данного действия.
};

class Errors {
    static serverError(res, message = ErrorsMessage.SERVER_ERROR) {
        res.set('Content-Type', 'application/json');
        res.status(500).json({ msg: message });
    }

    static notFoundError(res, message = ErrorsMessage.NOT_FOUND_ID_ERROR) {
        res.set('Content-Type', 'application/json');
        res.status(404).json({ msg: message });
    }

    static badRequestError(res, message = ErrorsMessage.BAD_REQUEST_ERROR) {
        res.set('Content-Type', 'application/json');
        res.status(400).json({ msg: message });
    }

    static unauthorizedError(res, message = ErrorsMessage.UNAUTHORIZED_ERROR) {
        res.set('Content-Type', 'application/json');
        res.status(401).json({ msg: message });
    }

    static forbiddenError(res, message = ErrorsMessage.FORBIDDEN_ERROR) {
        res.set('Content-Type', 'application/json');
        res.status(403).json({ msg: message });
    }
}

module.exports = { Errors, ErrorsMessage };