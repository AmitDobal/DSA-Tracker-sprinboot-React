package com.amit.dsa_tracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amit.dsa_tracker.entities.Problem;

public interface ProblemRepository extends JpaRepository<Problem, Long>{

}
