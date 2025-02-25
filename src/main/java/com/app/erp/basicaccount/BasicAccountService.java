package com.app.erp.basicAccount;

import java.util.List;

public interface BasicAccountService {
    List<BasicAccount> findAll();

    BasicAccount findById(Long id);

    BasicAccount save(BasicAccount entity);

    void delete(BasicAccount entity);
}
