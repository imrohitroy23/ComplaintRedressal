package com.AbcComplaint.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import javax.persistence.Table;
import javax.persistence.TableGenerator;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table
public class Ticket {
	
	@TableGenerator(name = "Ticket_Gen" ,initialValue = 100000, allocationSize = 1 )
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE, generator = "Ticket_Gen")
	private Long id;
	
	
//	@Enumerated(EnumType.STRING)
	@Column
	private String serviceType;
	
	@Column
	private String issueType;
	
	@CreationTimestamp
	private LocalDate createdOn;
	
	@UpdateTimestamp
	private LocalDate updatedOn;
	
	@Column
	private String description;
		
	@ManyToOne
	private Customer customer;
	
	@Column
	private String address;
	
	@Column
	private String zipcode;
	
	@Column
	private String mobile;

	@Column
	private String status;
	
	
	@ManyToOne
	private Engineer engineer;
	

}

