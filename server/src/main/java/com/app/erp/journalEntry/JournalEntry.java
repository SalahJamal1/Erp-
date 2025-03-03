package com.app.erp.journalEntry;

import com.app.erp.accounts.Account;
import com.app.erp.journalEntryDetails.JournalEntryDetail;
import com.app.erp.journalEntryDetails.JournalEntryDetailRepository;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "journal_entry")
public class JournalEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate entryDate;
    private String description;

@OneToMany(cascade = CascadeType.ALL)
@JoinColumn(name = "journal_entry_id")
private List<JournalEntryDetail> journalEntryDetails;

}
