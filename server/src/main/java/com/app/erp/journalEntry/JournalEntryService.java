package com.app.erp.journalEntry;

import com.app.erp.journalEntry.JournalEntry;

import java.util.List;

public interface JournalEntryService {
    List<JournalEntry> findAll();

    JournalEntry findById(Long id);

    JournalEntry save(JournalEntry entity);

    void delete(JournalEntry entity);


}
