package com.app.erp.voucher;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VoucherImpService implements VoucherService {
    private final VoucherRepository repository;

    @Override
    public List<Voucher> findAll() {
        return repository.findAll();
    }

    @Override
    public Voucher findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found id"));
    }

    @Override
    @Transactional
    public Voucher save(Voucher entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(Voucher entity) {
        repository.delete(entity);
    }


}
