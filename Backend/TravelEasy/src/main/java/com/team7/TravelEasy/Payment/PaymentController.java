package com.team7.TravelEasy.Payment;



import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/charge")
    public Charge charge(@RequestBody Map<String, Object> chargeRequest) throws StripeException {
        String token = (String) chargeRequest.get("token");
        double amount = (double) chargeRequest.get("amount");
        return paymentService.charge(token, amount);
    }
}
