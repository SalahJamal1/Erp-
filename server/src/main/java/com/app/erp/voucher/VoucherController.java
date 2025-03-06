package com.app.erp.voucher;

import com.app.erp.exception.AppError;
import com.app.erp.voucherDetails.VoucherDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/accounts/voucher")
@RequiredArgsConstructor
public class VoucherController {
    private final VoucherService service;

    @GetMapping
    public List<Voucher> Vouchers() {
        return service.findAll();
    }


    @GetMapping("/{id}")
    public Voucher VoucherById(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    public Voucher deleteVoucher(@PathVariable Long id) {
        Voucher Voucher = service.findById(id);
        service.delete(Voucher);
        return Voucher;
    }

    @PostMapping
    public Voucher createVoucher(@RequestBody Voucher entity) {
        if (!entity.isDebitEqualsCredit(entity)) {
            throw new AppError("The total for debit is not equals total for credit");
        } else return service.save(entity);
    }

    @PatchMapping("/{id}")
    public Voucher updateVoucher(@PathVariable Long id, @RequestBody Voucher entity) {
        Voucher Voucher = service.findById(id);
        entity.setId(id);

        List<VoucherDetail> newVoucherDetail = entity.getVoucherDetails();
        List<VoucherDetail> exsitingVoucherDetail = Voucher.getVoucherDetails();
        for (int i = 0; i < exsitingVoucherDetail.size(); i++) {
            if (exsitingVoucherDetail.get(i).getId() != null) {
                newVoucherDetail.get(i)
                        .setId(exsitingVoucherDetail.get(i).getId());
            }
        }
        if (!entity.isDebitEqualsCredit(entity)) {
            throw new AppError("The total for debit is not equals total for credit");
        } else return service.save(entity);
    }


}
