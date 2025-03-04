package com.app.erp.journalEntry;

import java.util.List;

public interface JournalEntryService {
    List<JournalEntry> findAll();

    JournalEntry findById(Long id);

    JournalEntry save(JournalEntry entity);

    void delete(JournalEntry entity);


}
