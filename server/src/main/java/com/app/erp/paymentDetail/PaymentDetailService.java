package com.app.erp.paymentDetail;


import java.util.List;

public interface PaymentDetailService {
    List<PaymentDetail> findAll();

    PaymentDetail findById(Long id);

    PaymentDetail save(PaymentDetail entity);

    void delete(PaymentDetail entity);


}
