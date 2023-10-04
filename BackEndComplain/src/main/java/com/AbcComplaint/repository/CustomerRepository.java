package com.AbcComplaint.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AbcComplaint.entity.Customer;
import com.AbcComplaint.entity.User;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
	List<Customer> findByUser(User user);

}
