package com.amit.dsa_tracker.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/problem")
public class ProblemController {
    @PostMapping
    public ResponseEntity<String> addProblem() {
        return ResponseEntity.status(HttpStatus.CREATED).body("Hello");
    }

    // @GetMapping
    // public Res
}
