package com.app.erp.payment;

import com.app.erp.paymentDetail.PaymentDetail;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate entryDate;
    private String description;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_id")
    private List<PaymentDetail> paymentDetails;
}
