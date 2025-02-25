package com.app.erp.subaccount;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "sub_account", uniqueConstraints = @UniqueConstraint(columnNames = "accountNumber"))
public class SubAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Column(unique = true)
    private String accountName;
    @NotNull
    @Column(unique = true)
    private Long accountNumber;

    private final Integer level = 4;
    private Long openingBalance;
    private Long debit;
    private Long credit;
    private Long endingBalance;

}
