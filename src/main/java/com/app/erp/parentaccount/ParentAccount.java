package com.app.erp.parentAccount;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.app.erp.basicAccount.BasicAccount;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "parent_account", uniqueConstraints = @UniqueConstraint(columnNames = "accountNumber"))
public class ParentAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Column(unique = true)
    private String accountName;
    @NotNull
    @Column(unique = true)
    private Long accountNumber;
    private final Integer level = 2;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "parent_account_id")
    private List<BasicAccount> basicAccounts;

}
