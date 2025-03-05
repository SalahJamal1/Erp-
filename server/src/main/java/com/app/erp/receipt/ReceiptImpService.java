package com.app.erp.receipt;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReceiptImpService implements ReceiptService {
    private final ReceiptRepository repository;

    @Override
    public List<Receipt> findAll() {
        return repository.findAll();
    }

    @Override
    public Receipt findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we cannot found the id"));
    }

    @Override
    public Receipt save(Receipt entity) {
        return repository.save(entity);
    }

    @Override
    public void delete(Receipt entity) {
        repository.delete(entity);
    }
}
