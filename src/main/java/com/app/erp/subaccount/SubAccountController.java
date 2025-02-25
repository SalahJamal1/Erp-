package com.app.erp.subaccount;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/subAccount")
@RequiredArgsConstructor
public class SubAccountController {
    private final SubAccountService service;

    @GetMapping
    public List<SubAccount> subAccountList() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public SubAccount subAccount(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public SubAccount createAccount(@RequestBody SubAccount entity) {
        return service.save(entity);
    }
}
