package com.team7.TravelEasy.Payment;

import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/charge")
    public ResponseEntity<Map<String, String>> charge(@RequestBody Map<String, Object> chargeRequest) {
        String token = (String) chargeRequest.get("token");

        // Handle amount conversion
        Object amountObj = chargeRequest.get("amount");
        double amount;
        if (amountObj instanceof Integer) {
            amount = ((Integer) amountObj).doubleValue();
        } else if (amountObj instanceof Double) {
            amount = (Double) amountObj;
        } else {
            throw new IllegalArgumentException("Invalid amount type");
        }

        Map<String, String> response = new HashMap<>();
        HttpStatus status;

        try {
            String message = paymentService.charge(token, amount);
            response.put("message", message);
            status = HttpStatus.OK;
        } catch (StripeException e) {
            response.put("message", "Payment failed");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(response, status);
    }
}
