package com.app.erp.parentaccount;

import java.util.List;

public interface ParentAccountService {
    List<ParentAccount> findAll();

    ParentAccount findById(Long id);

    ParentAccount save(ParentAccount entity);

    void delete(ParentAccount entity);
}
