package com.app.erp.mainAccount;


import java.util.List;

public interface MainAccountService {
    List<MainAccount> findAll();

    MainAccount findById(Long id);

    MainAccount save(MainAccount entity);

    void delete(MainAccount entity);
}
