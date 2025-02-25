package com.app.erp.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {
    private final String SecretsKey = "dfW8tS6Q43JUOSeym2Jt841uM/43IIoagAC9NEN/dT0=";

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) &&
                extractClaim(token, Claims::getExpiration).after(new Date());
    }


    public <T> T extractClaim(String token, Function<Claims, T> claimsFunction) {
        Claims claims = extractClaims(token);
        return claimsFunction.apply(claims);
    }

    public Claims extractClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSecretsKey())
                .build().parseClaimsJws(token)
                .getBody();
    }

    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String, Object> claims, UserDetails userDetails) {
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(Date.from(Instant.now().plus(90, ChronoUnit.DAYS)))
                .setSubject(userDetails.getUsername())
                .signWith(getSecretsKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Key getSecretsKey() {
        byte[] key = Decoders.BASE64.decode(SecretsKey);
        return Keys.hmacShaKeyFor(key);
    }

}
