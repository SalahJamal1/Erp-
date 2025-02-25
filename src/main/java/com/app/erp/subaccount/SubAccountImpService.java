package com.app.erp.subaccount;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubAccountImpService implements SubAccountService {
    private final SubSubAccountRepository repository;

    @Override
    public List<SubAccount> findAll() {
        return repository.findAll();
    }

    @Override
    public SubAccount findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public SubAccount save(SubAccount entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(SubAccount entity) {
        repository.delete(entity);
    }
}
