package com.app.erp.journalEntry;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JournalEntryRepository extends JpaRepository<JournalEntry, Long> {
}
