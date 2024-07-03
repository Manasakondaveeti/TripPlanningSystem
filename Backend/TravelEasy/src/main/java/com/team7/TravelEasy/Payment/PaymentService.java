package com.team7.TravelEasy.Payment;



import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentService {

    @Value("${stripe.secretKey}")
    private String secretKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = secretKey;
    }

    public Charge charge(String token, double amount) throws StripeException {
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", (int) (amount * 100)); // Amount in cents
        chargeParams.put("currency", "usd");
        chargeParams.put("description", "Flight booking payment");
        chargeParams.put("source", token);
        return Charge.create(chargeParams);
    }
}
