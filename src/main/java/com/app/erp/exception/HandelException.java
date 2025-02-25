package com.app.erp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;
import java.util.Date;

@ControllerAdvice
public class HandelException {
    @ExceptionHandler
    public ResponseEntity<ResponseError> handelException(AppError err) {
        ResponseError errorRes = new ResponseError(Date.from(Instant.now()), err.getMessage(), HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(errorRes, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<ResponseError> handelException(Exception err) {
        ResponseError errorRes = new ResponseError(Date.from(Instant.now()), err.getMessage(), HttpStatus.BAD_REQUEST.value());
        return new ResponseEntity<>(errorRes, HttpStatus.BAD_REQUEST);
    }

}
