package com.amit.dsa_tracker.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amit.dsa_tracker.entities.Company;

public interface CompanyRepository extends JpaRepository<Company, Long>{
    Optional<Company> findByName(String name);
}
