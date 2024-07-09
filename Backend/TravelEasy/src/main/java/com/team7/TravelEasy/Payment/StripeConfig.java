package com.team7.TravelEasy.Payment;



import com.stripe.Stripe;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;



@Configuration
public class StripeConfig {

    @Value("${stripe.secretKey}")
    private String stripeApiKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeApiKey;
        System.out.println("Stripe API Key initialized: " + stripeApiKey); // Add this line to check if the API key is correctly set
    }
}
