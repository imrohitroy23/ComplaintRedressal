package com.AbcComplaint.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "zipcodes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Zipcode {

	@Id
	private Long id;
	
	@Column
	private String zipcode;
}
