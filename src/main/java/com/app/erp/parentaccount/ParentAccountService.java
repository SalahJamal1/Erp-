package com.app.erp.parentAccount;

import java.util.List;

public interface ParentAccountService {
    List<ParentAccount> findAll();

    ParentAccount findById(Long id);

    ParentAccount save(ParentAccount entity);

    void delete(ParentAccount entity);
}
