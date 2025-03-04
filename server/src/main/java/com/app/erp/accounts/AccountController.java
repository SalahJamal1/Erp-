package com.app.erp.accounts;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accounts")
@RequiredArgsConstructor
public class AccountController {
    private final AccountService service;


    @GetMapping
    public List<Account> accounts() {
        return service.findAll();
    }


    @GetMapping("/byAccountNumber")
    public Account ByAccountNumber(@RequestParam(value = "accountNumber") Long accountNumber) {
        return service.findByAccountNumber(accountNumber);
    }

    @GetMapping("/{id}")
    public Account accountById(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    public Account deleteAccountById(@PathVariable Long id) {
        Account account = service.findById(id);

        service.delete(account);
        return account;
    }

    @PostMapping
    public Account createAccount(@RequestBody Account entity) {
        return service.save(entity);
    }

    @PatchMapping("/{Id}")
    public Account updateAccount(@PathVariable Long Id, @RequestBody Account entity) {
        Account account = service.findById(Id);
        account.setAccountName(entity.getAccountName());
        account.setAccountNumber(entity.getAccountNumber());
        account.setLevel(entity.getLevel());
        account.setOpeningBalance(entity.getOpeningBalance());
        account.setAccountId(entity.getAccountId());
        return service.save(account);
    }
}
