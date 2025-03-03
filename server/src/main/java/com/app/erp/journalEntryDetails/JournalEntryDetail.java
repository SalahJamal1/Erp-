package com.app.erp.journalEntryDetails;

import com.app.erp.accounts.Account;
import com.app.erp.journalEntry.JournalEntry;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "journal_entry_details")
public class JournalEntryDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;
    private BigDecimal debit=BigDecimal.ZERO;
    private BigDecimal credit=BigDecimal.ZERO;

}
