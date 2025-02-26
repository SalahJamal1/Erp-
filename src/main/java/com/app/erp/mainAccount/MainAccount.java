package com.app.erp.mainAccount;

import com.app.erp.parentAccount.ParentAccount;
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
@Table(name = "main_account", uniqueConstraints = @UniqueConstraint(columnNames = "accountNumber"))
public class MainAccount {
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
    @JoinColumn(name = "main_id")
    private List<ParentAccount> parentAccounts;
}
