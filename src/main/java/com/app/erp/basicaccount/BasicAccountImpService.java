package com.app.erp.basicAccount;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BasicAccountImpService implements BasicAccountService {
    private final BasicAccountRepository repository;

    @Override
    public List<BasicAccount> findAll() {
        return repository.findAll();
    }

    @Override
    public BasicAccount findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public BasicAccount save(BasicAccount entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(BasicAccount entity) {
        repository.delete(entity);
    }
}
