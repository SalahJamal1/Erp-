package com.app.erp.basicAccount;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import com.app.erp.subAccount.SubAccount;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "basic_account", uniqueConstraints = @UniqueConstraint(columnNames = "accountNumber"))
public class BasicAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Column(unique = true)
    private String accountName;
    @NotNull
    @Column(unique = true)
    private Long accountNumber;
    private final Integer level = 3;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "basic_account_id")
    private List<SubAccount> subAccounts;

}
