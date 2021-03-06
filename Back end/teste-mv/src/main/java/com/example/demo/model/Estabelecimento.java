package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_estabelecimento")
public class Estabelecimento {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	private long id_estabelecimento;
	
	private String nome;
	
	private String endereco;
	
	private String telefone;
	
	
	public long getId_estabelecimento() {
		return id_estabelecimento;
	}

	public void setId_estabelecimento(long id_estabelecimento) {
		this.id_estabelecimento = id_estabelecimento;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	
}
