package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Profissional;
@Repository
public interface RepositoryProfissional extends JpaRepository <Profissional, Long> {

	public List <Profissional> findAllByNomeContainingIgnoreCase(String nome);
		
		
}
	

