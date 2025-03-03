package com.app.erp.journalEntry;

import com.app.erp.exception.AppError;
import com.app.erp.journalEntryDetails.JournalEntryDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/accounts/journal/journal-entry")
@RequiredArgsConstructor
public class JournalEntryController {
    private final JournalEntryService service;


    @GetMapping
    public List<JournalEntry> journalEntrys() {
        return service.findAll();
    }




    @GetMapping("/{id}")
    public JournalEntry journalEntryById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public JournalEntry createJournalEntry(@RequestBody JournalEntry entity) {
        BigDecimal totalDebit=entity.getJournalEntryDetails().stream()
                .map(JournalEntryDetail::getDebit)
                .reduce(BigDecimal.ZERO,BigDecimal::add);
        BigDecimal totalCredit=entity.getJournalEntryDetails().stream().map(JournalEntryDetail::getCredit)
                .reduce(BigDecimal.ZERO,BigDecimal::add);
        if(!totalDebit.equals(totalCredit)){
            throw new AppError("The total for debit is not equals total for credit");
        }else return service.save(entity);
    }


}
