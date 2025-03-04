package com.app.erp.payment;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentImpService implements PaymentService {
    private final PaymentRepository repository;

    @Override
    public List<Payment> findAll() {
        return repository.findAll();
    }

    @Override
    public Payment findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public Payment save(Payment entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(Payment entity) {
        repository.delete(entity);
    }


}
