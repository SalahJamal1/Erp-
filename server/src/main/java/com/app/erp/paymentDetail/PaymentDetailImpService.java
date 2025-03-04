package com.app.erp.paymentDetail;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentDetailImpService implements PaymentDetailService {
    private final com.app.erp.PaymentDetailDetail.PaymentDetailRepository repository;

    @Override
    public List<PaymentDetail> findAll() {
        return repository.findAll();
    }

    @Override
    public PaymentDetail findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public PaymentDetail save(PaymentDetail entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(PaymentDetail entity) {
        repository.delete(entity);
    }


}
