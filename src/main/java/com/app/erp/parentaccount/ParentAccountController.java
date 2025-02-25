package com.app.erp.parentAccount;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/parentAccount")
@RequiredArgsConstructor
public class ParentAccountController {
    private final ParentAccountService service;

    @GetMapping
    public List<ParentAccount> parentAccountList() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ParentAccount parentAccount(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public ParentAccount createAccount(@RequestBody ParentAccount entity) {
        return service.save(entity);
    }
}
