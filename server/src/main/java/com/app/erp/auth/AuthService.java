package com.app.erp.auth;

import com.app.erp.config.JwtService;
import com.app.erp.exception.AppError;
import com.app.erp.user.Role;
import com.app.erp.user.User;
import com.app.erp.user.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(HttpServletResponse response, AuthRegister register) {


        User user = User.builder()
                .email(register.getEmail())
                .password(passwordEncoder.encode(register.getPassword()))
                .firstName(register.getFirstName())
                .lastName(register.getLastName())
                .role(Role.ROLE_USER)
                .build();
        userRepository.save(user);
        String jwt = jwtService.generateToken(user);
        SetCookie(response, jwt);
        return AuthResponse.builder().token(jwt).user(user).build();

    }

    public AuthResponse login(HttpServletResponse response, AuthLogin login) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            login.getEmail(),
                            login.getPassword()
                    )
            );
            User user = userRepository.findByEmail(login.getEmail())
                    .orElseThrow(() -> new AppError("user is not exit"));
            String jwt = jwtService.generateToken(user);
            SetCookie(response, jwt);
            return AuthResponse.builder().token(jwt).user(user).build();
        } catch (AuthenticationException err) {
            System.out.println(err.getMessage());
            throw new AppError("email or password is wrong");
        }
    }

    public void logout(HttpServletResponse response) {
        try {
            Cookie cookie = new Cookie("jwt", null);
            cookie.setHttpOnly(true);
            cookie.setSecure(true);
            cookie.setMaxAge(0);
            cookie.setAttribute("SameSite", "None");
            cookie.setPath("/");
            response.addCookie(cookie);
        } catch (Exception err) {
            System.out.println(err.getMessage());
            throw new AppError(err.getMessage());
        }
    }


    public void SetCookie(HttpServletResponse response, String jwt) {
        Cookie cookie = new Cookie("jwt", jwt);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setMaxAge((int) Duration.ofHours(24).getSeconds());
        cookie.setAttribute("SameSite", "None");
        cookie.setPath("/");
        response.addCookie(cookie);
    }
}
