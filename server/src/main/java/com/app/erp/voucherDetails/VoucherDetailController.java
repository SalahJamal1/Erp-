package com.app.erp.voucherDetails;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/voucherDetail")
@RequiredArgsConstructor
public class VoucherDetailController {
    private final VoucherDetailService service;


    @GetMapping
    public List<VoucherDetail> VoucherDetails() {
        return service.findAll();
    }


    @GetMapping("/{id}")
    public VoucherDetail VoucherDetailById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public VoucherDetail createVoucherDetail(@RequestBody VoucherDetail entity) {
        return service.save(entity);
    }


}
