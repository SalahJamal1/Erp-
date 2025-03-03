package com.app.erp.journalEntry;

import com.app.erp.exception.AppError;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JournalEntryImpService implements JournalEntryService {
    private final JournalEntryRepository repository;

    @Override
    public List<JournalEntry> findAll() {
        return repository.findAll();
    }

    @Override
    public JournalEntry findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new AppError("we can not found it"));
    }

    @Override
    @Transactional
    public JournalEntry save(JournalEntry entity) {
        return repository.save(entity);
    }

    @Override
    @Transactional
    public void delete(JournalEntry entity) {
        repository.delete(entity);
    }


}
