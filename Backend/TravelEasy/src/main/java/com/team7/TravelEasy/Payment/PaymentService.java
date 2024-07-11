package com.team7.TravelEasy.Payment;

import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.param.ChargeCreateParams;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    public String charge(String token, double amount) throws StripeException {
        ChargeCreateParams params = ChargeCreateParams.builder()
                .setAmount((long) (amount * 100)) // amount in cents
                .setCurrency("cad")
                .setDescription("Charge for payment")
                .setSource(token)
                .build();

        Charge charge = Charge.create(params);

        // Check the status of the charge
        if ("succeeded".equals(charge.getStatus())) {
            return "Payment done successfully";
        } else {
            return "Payment failed";
        }
    }
}
