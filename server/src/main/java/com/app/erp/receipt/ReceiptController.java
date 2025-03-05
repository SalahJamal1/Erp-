package com.app.erp.receipt;


import com.app.erp.exception.AppError;
import com.app.erp.receiptDetail.ReceiptDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/accounts/receipt")
@RequiredArgsConstructor
public class ReceiptController {
    private final ReceiptService service;


    @GetMapping
    public List<Receipt> receipts() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Receipt receipt(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Receipt createReceipt(@RequestBody Receipt entity) {
        BigDecimal totalDebit = entity.getReceiptDetails().stream().map(ReceiptDetail::getDebit).reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCredit = entity.getReceiptDetails().stream().map(ReceiptDetail::getCredit).reduce(BigDecimal.ZERO, BigDecimal::add);
        if (!totalCredit.equals(totalDebit)) {
            throw new AppError("The total for debit is not equals total for credit");
        } else return service.save(entity);
    }
}
