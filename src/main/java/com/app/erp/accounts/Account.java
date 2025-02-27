package com.app.erp.accounts;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "chart_account", uniqueConstraints = @UniqueConstraint(columnNames = "accountNumber"))
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Column(unique = true)
    private String accountName;
    @NotNull
    @Column(unique = true)
    private Long accountNumber;
    private Integer level;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id")
    private List<Account> subAccounts;
    private Long openingBalance;
    private Long debit;
    private Long credit;
    private Long endingBalance;

}
