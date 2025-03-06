package com.app.erp.voucher;

import java.util.List;

public interface VoucherService {
    List<Voucher> findAll();

    Voucher findById(Long id);

    Voucher save(Voucher entity);

    void delete(Voucher entity);


}
