package com.app.erp.auth;

import com.app.erp.exception.AppError;
import com.app.erp.user.User;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> sigIn(HttpServletResponse response, @RequestBody AuthLogin authLogin) {
        return ResponseEntity.ok(authService.login(response, authLogin));
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> sigUp(HttpServletResponse response, @RequestBody AuthRegister authRegister) {
        return ResponseEntity.ok(authService.register(response, authRegister));
    }

    @GetMapping("/current")
    public User getCurrentUser(@AuthenticationPrincipal User user) {
        if (user != null) {
            return user;
        } else throw new AppError("You are not Authenticated");
    }

    @GetMapping("/logout")
    public String Logout(HttpServletResponse response) {
        authService.logout(response);
        return "you are logout successfully";
    }
}
