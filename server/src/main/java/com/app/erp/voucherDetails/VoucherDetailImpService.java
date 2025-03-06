package com.app.erp.voucherDetails;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VoucherDetailImpService implements VoucherDetailService {
    private final VoucherDetailRepository repository;

    @Override
    public List<VoucherDetail> findAll() {
        return repository.findAll();
    }

    @Override
    public VoucherDetail findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public VoucherDetail save(VoucherDetail entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(VoucherDetail entity) {
        repository.delete(entity);
    }

//    @Override
//    public List<VoucherDetail> findByJournalEntry(JournalEntry journalEntry) {
//        return List.of();
//    }


}
