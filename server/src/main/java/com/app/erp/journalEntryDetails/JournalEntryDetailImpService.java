package com.app.erp.journalEntryDetails;

import com.app.erp.exception.AppError;
import com.app.erp.journalEntryDetails.JournalEntryDetail;
import com.app.erp.journalEntryDetails.JournalEntryDetailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JournalEntryDetailImpService implements JournalEntryDetailService {
    private final JournalEntryDetailRepository repository;

    @Override
    public List<JournalEntryDetail> findAll() {
        return repository.findAll();
    }

    @Override
    public JournalEntryDetail findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public JournalEntryDetail save(JournalEntryDetail entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(JournalEntryDetail entity) {
        repository.delete(entity);
    }


}
