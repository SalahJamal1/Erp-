package com.app.erp.payment;

import java.util.List;

public interface PaymentService {
    List<Payment> findAll();

    Payment findById(Long id);

    Payment save(Payment entity);

    void delete(Payment entity);


}
