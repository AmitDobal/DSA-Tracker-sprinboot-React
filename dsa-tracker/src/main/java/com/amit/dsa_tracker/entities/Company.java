package com.amit.dsa_tracker.entities;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import lombok.Data;

@Data
@Entity
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    // @ManyToOne
    // @JoinColumn(name = "problem_id")
    @ManyToMany(mappedBy = "companies", fetch = FetchType.LAZY)
    private Set<Problem> problems; 
}
