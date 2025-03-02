package com.app.erp.accounts;

import java.util.List;

public interface AccountService {
    List<Account> findAll();

    Account findById(Long id);

    Account save(Account entity);

    void delete(Account entity);

    Account findByAccountNumber(Long accountNumber);

}
