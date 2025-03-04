package com.app.erp.journalEntryDetails;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/journal-entryDetail")
@RequiredArgsConstructor
public class JournalEntryDetailController {
    private final JournalEntryDetailService service;


    @GetMapping
    public List<JournalEntryDetail> JournalEntryDetails() {
        return service.findAll();
    }




    @GetMapping("/{id}")
    public JournalEntryDetail JournalEntryDetailById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public JournalEntryDetail createJournalEntryDetail(@RequestBody JournalEntryDetail entity) {
        return service.save(entity);
    }


}
