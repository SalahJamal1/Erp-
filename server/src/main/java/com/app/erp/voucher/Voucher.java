package com.app.erp.voucher;

import com.app.erp.voucherDetails.VoucherDetail;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "voucher")
public class Voucher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "this filed is required")
    @Column(name = "voucher_no", unique = true)
    private String voucherNo;
    @NotNull(message = "this filed is required")
    private LocalDate entryDate;
    private String description;

    @NotNull
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "voucher_id")
    private List<VoucherDetail> voucherDetails;


    public boolean isDebitEqualsCredit(Voucher voucher) {
        BigDecimal totalDebit = voucher.getVoucherDetails().stream()
                .map(VoucherDetail::getDebit)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalCredit = voucher.getVoucherDetails().stream().map(VoucherDetail::getCredit)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        if (!totalDebit.equals(totalCredit)) {
            return false;
        }
        return true;

    }
}
