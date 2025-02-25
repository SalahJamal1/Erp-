package com.app.erp.subaccount;

import com.app.erp.subaccount.SubAccount;

import java.util.List;

public interface SubAccountService {
    List<SubAccount> findAll();

    SubAccount findById(Long id);

    SubAccount save(SubAccount entity);

    void delete(SubAccount entity);
}
