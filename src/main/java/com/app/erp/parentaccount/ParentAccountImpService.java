package com.app.erp.parentAccount;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ParentAccountImpService implements ParentAccountService {
    private final ParentAccountRepository repository;

    @Override
    public List<ParentAccount> findAll() {
        return repository.findAll();
    }

    @Override
    public ParentAccount findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public ParentAccount save(ParentAccount entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(ParentAccount entity) {
        repository.delete(entity);
    }
}
