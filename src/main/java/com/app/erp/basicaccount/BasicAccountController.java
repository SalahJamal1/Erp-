package com.app.erp.basicaccount;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/basic")
@RequiredArgsConstructor
public class BasicAccountController {
    private final BasicAccountService BasicAccountService;

    @GetMapping
    public List<BasicAccount> basicAccountList() {
        return BasicAccountService.findAll();
    }

    @GetMapping("/{id}")
    public BasicAccount basicAccount(@PathVariable Long id) {
        return BasicAccountService.findById(id);
    }

    @PostMapping
    public BasicAccount createAccount(@RequestBody BasicAccount entity) {
        return BasicAccountService.save(entity);
    }
}
