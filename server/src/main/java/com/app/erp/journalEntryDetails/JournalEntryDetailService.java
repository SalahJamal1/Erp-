package com.app.erp.journalEntryDetails;

import com.app.erp.journalEntryDetails.JournalEntryDetail;

import java.util.List;

public interface JournalEntryDetailService {
    List<JournalEntryDetail> findAll();

    JournalEntryDetail findById(Long id);

    JournalEntryDetail save(JournalEntryDetail entity);

    void delete(JournalEntryDetail entity);


}
