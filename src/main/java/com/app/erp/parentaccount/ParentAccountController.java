package com.app.erp.parentAccount;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/parentaccounts")
@RequiredArgsConstructor
public class ParentAccountController {
    private final ParentAccountService service;

    @GetMapping
    public List<ParentAccount> ParentAccountList() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ParentAccount ParentAccount(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public ParentAccount ParentAccount(@RequestBody ParentAccount entity) {
        return service.save(entity);
    }
}
