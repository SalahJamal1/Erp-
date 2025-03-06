package com.app.erp.voucherDetails;

import java.util.List;

public interface VoucherDetailService {
    List<VoucherDetail> findAll();

    VoucherDetail findById(Long id);

    VoucherDetail save(VoucherDetail entity);

    void delete(VoucherDetail entity);

//    List<VoucherDetail> findByJournalEntry(JournalEntry journalEntry);


}
