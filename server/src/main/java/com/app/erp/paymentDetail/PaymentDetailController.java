package com.app.erp.paymentDetail;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accounts/paymentDetail")
@RequiredArgsConstructor
public class PaymentDetailController {
    private final PaymentDetailService service;


    @GetMapping
    public List<PaymentDetail> PaymentDetails() {
        return service.findAll();
    }


    @GetMapping("/{id}")
    public PaymentDetail PaymentDetailById(@PathVariable Long id) {
        return service.findById(id);
    }

    
}