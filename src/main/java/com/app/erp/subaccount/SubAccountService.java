package com.app.erp.subAccount;

import java.util.List;

import com.app.erp.subAccount.SubAccount;

public interface SubAccountService {
    List<SubAccount> findAll();

    SubAccount findById(Long id);

    SubAccount save(SubAccount entity);

    void delete(SubAccount entity);
}
