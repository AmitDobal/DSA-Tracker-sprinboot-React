package com.amit.dsa_tracker.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amit.dsa_tracker.dtos.ProblemRequestDto;
import com.amit.dsa_tracker.dtos.ProblemResponseDto;
import com.amit.dsa_tracker.services.ProblemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/problem")
@RequiredArgsConstructor
@CrossOrigin
public class ProblemController {

    private final ProblemService problemService;

    @PostMapping
    public ResponseEntity<ProblemResponseDto> addProblem(@RequestBody ProblemRequestDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(problemService.addProblem(dto));
    }

    @GetMapping
    public ResponseEntity<List<ProblemResponseDto>> getProblems() {
        return ResponseEntity.status(HttpStatus.OK).body(problemService.getProblems());
    }
}