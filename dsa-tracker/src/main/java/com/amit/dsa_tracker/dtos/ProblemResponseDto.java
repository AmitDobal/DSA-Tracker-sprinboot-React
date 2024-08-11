package com.amit.dsa_tracker.dtos;

import java.util.Set;

import com.amit.dsa_tracker.entities.Company;
import com.amit.dsa_tracker.enums.Difficulty;

import lombok.Data;

@Data
public class ProblemResponseDto {
    private long id;

    private String problemName;
    
    private String topic;

    private String articleUrl;

    private String videoUrl;

    private String problemUrl;

    private Difficulty difficulty;

    private Set<Company> companies;
}
