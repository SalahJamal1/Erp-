package com.app.erp.receipt;

import java.util.List;

public interface ReceiptService {
    List<Receipt> findAll();

    Receipt findById(Long id);

    Receipt save(Receipt entity);

    void delete(Receipt entity);
}
