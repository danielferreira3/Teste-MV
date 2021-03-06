package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Estabelecimento;
@Repository
public interface RepositoryEstabelecimento extends JpaRepository <Estabelecimento, Long> {

	public List <Estabelecimento> findAllByNomeContainingIgnoreCase(String nome);

}
