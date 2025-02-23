const ErrorsMessage = {
  SERVER_ERROR: "Something is wrong, please try again later !!!",
  NOT_FOUND_ID_ERROR: "Document with the provided ID was not found",
  BAD_REQUEST_ERROR: "Invalid request data",
  UNAUTHORIZED_ERROR: "Unauthorized access",
  FORBIDDEN_ERROR: "Access forbidden",
};

class Errors {
  static serverError(res, message = ErrorsMessage.SERVER_ERROR) {
    res.set("Content-Type", "application/json");
    res.status(500).json({ msg: message });
  }

  static notFoundError(res, message = ErrorsMessage.NOT_FOUND_ID_ERROR) {
    res.set("Content-Type", "application/json");
    res.status(404).json({ msg: message });
  }

  static badRequestError(res, message = ErrorsMessage.BAD_REQUEST_ERROR) {
    res.set("Content-Type", "application/json");
    res.status(400).json({ msg: message });
  }

  static unauthorizedError(res, message = ErrorsMessage.UNAUTHORIZED_ERROR) {
    res.set("Content-Type", "application/json");
    res.status(401).json({ msg: message });
  }

  static forbiddenError(res, message = ErrorsMessage.FORBIDDEN_ERROR) {
    res.set("Content-Type", "application/json");
    res.status(403).json({ msg: message });
  }
}

module.exports = { Errors, ErrorsMessage };
