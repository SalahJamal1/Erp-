package com.app.erp.exception;


public class AppError extends RuntimeException {

    public AppError(String message) {
        super(message);
    }

    public AppError(String message, Throwable cause) {
        super(message, cause);
    }

    public AppError(Throwable cause) {
        super(cause);
    }
}
