package com.app.erp.payment;

import com.app.erp.exception.AppError;
import com.app.erp.paymentDetail.PaymentDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/accounts/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService service;


    @GetMapping
    public List<Payment> Payments() {
        return service.findAll();
    }


    @GetMapping("/{id}")
    public Payment PaymentById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Payment createPayment(@RequestBody Payment entity) {
        BigDecimal totalDebit = entity.getPaymentDetails().stream().map(PaymentDetail::getDebit)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCredit = entity.getPaymentDetails().stream().map(PaymentDetail::getCredit)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        if (!totalDebit.equals(totalCredit)) {
            throw new AppError("The total for debit is not equals total for credit ");
        } else return service.save(entity);
    }
}