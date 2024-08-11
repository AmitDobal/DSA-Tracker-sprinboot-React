package com.amit.dsa_tracker.services;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.amit.dsa_tracker.dtos.CompanyRequestDto;
import com.amit.dsa_tracker.dtos.ProblemRequestDto;
import com.amit.dsa_tracker.dtos.ProblemResponseDto;
import com.amit.dsa_tracker.entities.Company;
import com.amit.dsa_tracker.entities.Problem;
import com.amit.dsa_tracker.repositories.CompanyRepository;
import com.amit.dsa_tracker.repositories.ProblemRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProblemService {

    private final ObjectMapper objectMapper;
    private final ProblemRepository problemRepository;
    private final CompanyRepository companyRepository;

    @Transactional
    public ProblemResponseDto addProblem(ProblemRequestDto dto) {
        Problem problem = objectMapper.convertValue(dto, Problem.class);
        // if (dto.getCompanies() != null) {
        // Set<Company> companies = new HashSet<>();
        // for (CompanyRequestDto companyDto : dto.getCompanies()) {
        // Optional<Company> existingCompany =
        // companyRepository.findByName(companyDto.getName());
        // Company company;
        // if (existingCompany.isPresent()) {
        // company = existingCompany.get();
        // } else {
        // company = new Company();
        // company.setName(companyDto.getName());
        // companyRepository.save(company); // Save new company
        // }
        // company.getProblems().add(problem); // Ensure bidirectional relationship
        // companies.add(company);
        // }
        // problem.setCompanies(companies);
        // }
        Problem resProblem = problemRepository.save(problem);
        return objectMapper.convertValue(resProblem, ProblemResponseDto.class);
    }

    public List<ProblemResponseDto> getProblems() {
        List<Problem> problems = problemRepository.findAll();
        return problems.stream()
                .map(problem -> objectMapper.convertValue(problem, ProblemResponseDto.class))
                .toList();
    }

}
