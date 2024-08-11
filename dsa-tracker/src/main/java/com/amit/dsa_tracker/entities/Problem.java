package com.amit.dsa_tracker.entities;

import java.util.Set;

import com.amit.dsa_tracker.enums.Difficulty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Problem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String problemName;

    private String topic;

    private String articleUrl;

    private String videoUrl;

    private String problemUrl;

    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;

    // @OneToMany(mappedBy = "problem", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(
        name = "problem_company", // Join table name
        joinColumns = @JoinColumn(name = "problem_id"), // Column for Problem
        inverseJoinColumns = @JoinColumn(name = "company_id") // Column for Company
    )
    private Set<Company> companies;

}
