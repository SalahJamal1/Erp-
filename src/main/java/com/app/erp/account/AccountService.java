package com.app.erp.account;

import java.util.List;

public interface AccountService {
    List<Account> findAll();

    Account findById(Long id);

    Account save(Account entity);

    void delete(Account entity);
}
