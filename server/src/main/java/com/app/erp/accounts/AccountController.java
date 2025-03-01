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
    public List<Account> accountList() {
        List<Account> accounts = service.findAll().stream().filter(acc -> acc.getLevel() == 1).toList();
        return accounts;
    }

    
    @GetMapping("/{id}")
    public Account account(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Account account(@RequestBody Account entity) {
        return service.save(entity);
    }
}
