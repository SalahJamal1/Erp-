package com.app.erp.mainAccount;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MainAccountImpService implements MainAccountService {
    private final MainAccountRepository repository;

    @Override
    public List<MainAccount> findAll() {
        return repository.findAll();
    }

    @Override
    public MainAccount findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public MainAccount save(MainAccount entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(MainAccount entity) {
        repository.delete(entity);
    }
}
