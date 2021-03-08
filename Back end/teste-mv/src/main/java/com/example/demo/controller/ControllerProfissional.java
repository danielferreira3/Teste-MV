package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Profissional;
import com.example.demo.repository.RepositoryProfissional;



@RestController
@RequestMapping("/profissional")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ControllerProfissional {
	
	@Autowired
	private RepositoryProfissional repository;
	
	@PostMapping ("/cadastrar")
	public Profissional criar(@RequestBody Profissional objetinho) {
		repository.save(objetinho);
		return objetinho;
	}
	
	@GetMapping 
	public ResponseEntity <List <Profissional>> GetAll() {
		return ResponseEntity.ok (repository.findAll());
	}
	
	@GetMapping ("/id/{id}")
	public ResponseEntity <Profissional> GetById (@PathVariable Long id){	
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	
	@PutMapping
	public ResponseEntity<Profissional> put(@RequestBody Profissional profissional){
		return ResponseEntity.ok(repository.save(profissional));
	}
	
	
	@DeleteMapping ("/{id}")
	public void delete (@PathVariable Long id) {
		repository.deleteById(id);
	}
	
}
