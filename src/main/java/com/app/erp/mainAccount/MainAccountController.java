package com.app.erp.mainAccount;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mainaccounts")
@RequiredArgsConstructor
public class MainAccountController {
    private final MainAccountService service;

    @GetMapping
    public List<MainAccount> MainAccountList() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public MainAccount MainAccount(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public MainAccount MainAccount(@RequestBody MainAccount entity) {
        return service.save(entity);
    }
}
